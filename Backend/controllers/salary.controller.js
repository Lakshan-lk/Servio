import mongoose from "mongoose";
import Salary from "../models/salary.model.js";

const calculateNetPay = (salaryAmount, bonuses, deductions) => {
  return salaryAmount + (bonuses || 0) - (deductions || 0);
};

// Add a new salary
export const addSalary = async (req, res) => {
  try {
    const {
      employeeId,
      employeeName,
      salaryAmount,
      paymentFrequency,
      paymentDate,
      bonuses,
      deductions,
      notes,
    } = req.body;

    const netPay = calculateNetPay(salaryAmount, bonuses, deductions);

    const newSalary = new Salary({
      employeeId,
      employeeName,
      salaryAmount,
      paymentFrequency,
      paymentDate,
      bonuses,
      deductions,
      netPay,
      notes,
    });

    await newSalary.save();
    res.status(201).json({ message: "Salary record added successfully", data: newSalary });
  } catch (error) {
    res.status(500).json({ message: "Error adding salary record", error: error.message });
  }
};

// Get all salary records
export const getSalaryList = async (req, res) => {
  try {
    const salaries = await Salary.find().sort({ paymentDate: -1 });
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching salary records", error: error.message });
  }
};

// Get a single salary record by ID
export const getSalaryDetails = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    if (!salary) {
      return res.status(404).json({ message: "Salary record not found" });
    }
    res.status(200).json(salary);
  } catch (error) {
    res.status(500).json({ message: "Error fetching salary record", error: error.message });
  }
};

// Update a salary record
export const editSalary = async (req, res) => {
  try {
    const { salaryAmount, bonuses, deductions, status } = req.body;

    const netPay = calculateNetPay(salaryAmount, bonuses, deductions);

    const updatedSalary = await Salary.findByIdAndUpdate(
      req.params.id,
      { salaryAmount, bonuses, deductions, netPay, status },
      { new: true }
    );

    if (!updatedSalary) {
      return res.status(404).json({ message: "Salary record not found" });
    }

    res.status(200).json({ message: "Salary record updated successfully", data: updatedSalary });
  } catch (error) {
    res.status(500).json({ message: "Error updating salary record", error: error.message });
  }
};

// Delete a salary record
export const deleteSalary = async (req, res) => {
  try {
    const deletedSalary = await Salary.findByIdAndDelete(req.params.id);
    if (!deletedSalary) {
      return res.status(404).json({ message: "Salary record not found" });
    }
    res.status(200).json({ message: "Salary record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting salary record", error: error.message });
  }
};

// Get dashboard data
export const getDashboardData = async (req, res) => {
  try {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    // Total payroll for the current month
    const totalPayroll = await Salary.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              { $eq: [{ $month: "$paymentDate" }, currentMonth] },
              { $eq: [{ $year: "$paymentDate" }, currentYear] },
            ],
          },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$netPay" },
        },
      },
    ]);

    // Pending payments
    const pendingPayments = await Salary.countDocuments({ status: "Unpaid" });

    // Salary trend (last 6 months)
    const salaryTrend = await Salary.aggregate([
      {
        $match: {
          paymentDate: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 5)),
          },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$paymentDate" },
            year: { $year: "$paymentDate" },
          },
          total: { $sum: "$netPay" },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    res.status(200).json({
      totalPayroll: totalPayroll[0]?.total || 0,
      pendingPayments,
      salaryTrend,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error: error.message });
  }
};

// Process salary payments
export const processPayments = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || ids.length === 0) {
      return res.status(400).json({ message: "No records selected for processing" });
    }

    const updatedRecords = await Salary.updateMany(
      { _id: { $in: ids }, status: "Unpaid" },
      { status: "Paid" }
    );

    res.status(200).json({
      message: "Salary payments processed successfully",
      modifiedCount: updatedRecords.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Error processing salary payments", error: error.message });
  }
};

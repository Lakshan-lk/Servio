import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
    },
    employeeName: {
        type: String,
        required: true,
    },
    salaryAmount: {
        type: Number,
        required: true,
    },
    paymentFrequency: {
        type: String,
        enum: ["Hourly", "Weekly", "Monthly"],
        required: true,
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    bonuses: {
        type: Number,
        default: 0,
    },
    deductions: {
        type: Number,
        default: 0,
    },
    netPay: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["Paid", "Unpaid"],
        default: "Unpaid",
    },
    notes: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true
});

const Salary = mongoose.model('Salary',SalarySchema);

export default Salary;
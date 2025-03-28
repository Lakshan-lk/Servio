import express from "express";
import { addSalary, getSalaryList, getSalaryDetails, editSalary, deleteSalary, getDashboardData, processPayments} from "../controllers/salary.controller.js";

const router = express.Router();

router.post("/add", addSalary); 
router.get("/list", getSalaryList); 
router.get("/details/:id", getSalaryDetails); 
router.put("/edit/:id", editSalary); 
router.delete("/delete/:id", deleteSalary); 
router.get("/dashboard", getDashboardData); 
router.post("/process", processPayments); 

export default router;
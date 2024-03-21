import express from "express"
import { getEmployees, getEmployee } from '../controllers/employee.js';

const router = express.Router();

router.get('/', getEmployees);
router.get("/:id", getEmployee);
// router.get("/:id", getEmployeeFeedbacks);

export default router;
import express from "express"
import { getEmployeeSchedule } from '../controllers/schedule.js';

const router = express.Router();

router.get("/:id", getEmployeeSchedule);

export default router;
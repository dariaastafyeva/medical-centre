import express from "express"
import { getEmployeeFeedbacks } from '../controllers/feedback.js';

const router = express.Router();

router.get("/:id", getEmployeeFeedbacks);

export default router;
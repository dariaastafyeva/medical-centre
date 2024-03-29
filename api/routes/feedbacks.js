import express from "express"
import { getAllFeedbacks, getEmployeeFeedbacks } from '../controllers/feedback.js';

const router = express.Router();

router.get("/:id", getEmployeeFeedbacks);
router.get("/", getAllFeedbacks);

export default router;
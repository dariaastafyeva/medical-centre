import express from "express"
import { getEmployeeServices } from '../controllers/service.js';

const router = express.Router();

router.get("/:id", getEmployeeServices);

export default router;
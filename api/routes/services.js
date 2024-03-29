import express from "express"
import { getAllServiceGroups, getEmployeeServices } from '../controllers/service.js';

const router = express.Router();

router.get("/:id", getEmployeeServices);
router.get("/", getAllServiceGroups)

export default router;
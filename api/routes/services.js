import express from "express"
import { getAllServiceGroups, getAllServicesBySubGroup, getEmployeeServices } from '../controllers/service.js';

const router = express.Router();

router.get("/:id", getEmployeeServices);
router.get("/", getAllServiceGroups)
router.get("/detail/:id", getAllServicesBySubGroup)

export default router;
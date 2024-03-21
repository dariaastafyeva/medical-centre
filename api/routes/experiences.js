import express from "express"
import { getEmployeeExperience } from '../controllers/experience.js';

const router = express.Router();

router.get('/:id', getEmployeeExperience);

export default router;
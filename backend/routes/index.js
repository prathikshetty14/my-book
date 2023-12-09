import { Router } from "express";
import { getBookData, getFormData } from "../controllers/api/v1/index.js";
import path from "path";

const router = Router();

router.get('/', getFormData);
router.post('/bookdata', getBookData);

export default router;
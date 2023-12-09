import { Router } from "express";
import { getBookData, getFormData } from "../controllers/api/v1/index.js";

const router = Router();

router.get('/', getFormData);
router.post('/bookdata', getBookData);

export default router;
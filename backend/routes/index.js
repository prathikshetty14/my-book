import { Router } from "express";
import { getBookData, getFormData } from "../controllers/api/v1/index.js";

const router = Router();

router.get('/api/v1/formdata', getFormData);
router.post('/api/v1/bookdata', getBookData);

export default router;
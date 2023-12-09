import { Router } from "express";
import { getBookData, getFormData } from "../controllers/api/v1/index.js";

const router = Router();

router.get('/api/v1/formdata', getFormData);
router.post('/api/v1/bookdata', getBookData);
router.get("/*", function (req,res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function(error){
            if(error){
                res.status(500).send(error);
            }
        }
    )
})

export default router;
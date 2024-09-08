import express from 'express';
import isAuthticated from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyId, registerCompany, updateCompany } from '../controllers/company.controller.js';

const router = express.Router();

router.route("/register").post(isAuthticated,registerCompany);
router.route("/get").get(isAuthticated,getCompany); 
router.route("/get/:id").get(isAuthticated,getCompanyId);
router.route("/update/:id").put(isAuthticated,updateCompany);

export default router;
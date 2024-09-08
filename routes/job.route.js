import express from 'express';
import isAuthticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controller.js';

const router = express.Router();

router.route("/post").post(isAuthticated,postJob);
router.route("/get").get(isAuthticated,getAllJobs);
router.route("/getadminjobs").get(isAuthticated,getAdminJobs);
router.route("/get/:id").get(isAuthticated,getJobById);


export default router;
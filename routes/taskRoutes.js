import express from 'express';
import { createTask } from '../controllers/taskController.js';
const router = express.Router();

router.post('/create-task', createTask); // POST /tasks/create-task

export default router;

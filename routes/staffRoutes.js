import express from 'express';
const router = express.Router();

import { createStaff } from '../controllers/staffController.js';

router.route('/').post(createStaff);

export default router;

import express from 'express';
const router = express.Router();

import { createStaff, updateOneStaff } from '../controllers/staffController.js';

router.route('/').post(createStaff);

router.route('/:id').patch(updateOneStaff);

export default router;

import express from 'express';
const router = express.Router();

import {
  createStaff,
  updateOneStaff,
  getAllStaff,
} from '../controllers/staffController.js';

router.route('/').post(createStaff).get(getAllStaff);

router.route('/:id').patch(updateOneStaff);

export default router;

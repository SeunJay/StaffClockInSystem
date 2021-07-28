import express from 'express';
const router = express.Router();

import {
  createStaff,
  updateOneStaff,
  getOneStaff,
  getAllStaff,
  clockStaffIn,
  clockStaffOut,
} from '../controllers/staffController.js';

router.route('/').post(createStaff).get(getAllStaff);

router.route('/:id').patch(updateOneStaff).get(getOneStaff);

router.route('/clockIn/:id').patch(clockStaffIn);

router.route('/clockOut/:id').patch(clockStaffOut);

export default router;

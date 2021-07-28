import Staff from '../models/staffModel.js';
import catchAsync from '../utils/catchAsync.js';

// @desc    Create category
// @route   POST /api/categories
const createStaff = catchAsync(async (req, res, next) => {
  const { name, department, designation } = req.body;

  const staff = new Staff({
    name,
    department,
    designation,
  });

  const createdStaff = await staff.save();

  res.status(201).json(createdStaff);
});

export { createStaff };

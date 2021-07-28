import Staff from '../models/staffModel.js';
import catchAsync from '../utils/catchAsync.js';
import generateId from '../utils/generateId.js';

// @desc    Create staff
// @route   POST /api/staff
const createStaff = catchAsync(async (req, res, next) => {
  const { name, department, designation } = req.body;

  const staff = new Staff({
    name,
    department,
    designation,
    staffId: generateId(),
  });

  const createdStaff = await staff.save();

  res.status(201).json(createdStaff);
});

// @desc    Update one staff by ID
// @route   PUT /api/staff/:id
const updateOneStaff = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { name } = req.body;

  const staffToUpdate = await Staff.findById(id);

  if (!staffToUpdate)
    return res.status(404).json({
      message: 'No staff found',
    });

  staffToUpdate.name = name ? name : staffToUpdate.name;
  await staffToUpdate.save();

  res.status(200).json({
    message: 'Staff updated successfully!',
    staffToUpdate,
  });
});

export { createStaff, updateOneStaff };

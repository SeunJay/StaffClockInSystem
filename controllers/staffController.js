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
// @route   PATCH /api/staff/:id
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

// @desc    get one staff by ID
// @route   PATCH /api/staff/:id
const getOneStaff = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const staff = await Staff.findById(id);

  if (!staff)
    return res.status(404).json({
      message: 'No staff found',
    });

  res.status(200).json({
    staff,
  });
});

// @desc    Get all staff
// @route   GET /api/staff/
const getAllStaff = catchAsync(async (req, res, next) => {
  const allStaff = await Staff.find({});

  res.status(200).json({
    count: allStaff.length,
    allStaff,
  });
});

// @desc    Clock staff in
// @route   PATCH /api/staff/clockIn
const clockStaffIn = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { staffId } = req.body;

  const staff = await Staff.findOne({ staffId, _id: id });

  if (!staff)
    return res.status(404).json({
      message: 'No staff found',
    });

  if (staff.isAvailable)
    return res.status(400).json({
      message: 'Already clocked in!',
    });



  staff.isAvailable = true;
  staff.timeIn = Date.now();
  await staff.save();

  res.status(200).json({
    staff,
  });
});

// @desc    Clock staff out
// @route   PATCH /api/staff/clockOut
const clockStaffOut = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { staffId } = req.body;

  const staff = await Staff.findOne({ staffId, _id: id });

  if (!staff)
    return res.status(404).json({
      message: 'No staff found',
    });

  if (!staff.isAvailable)
    return res.status(400).json({
      message: 'Already clocked out!',
    });

  staff.isAvailable = false;
  staff.timeOut = Date.now();
  await staff.save();

  res.status(200).json({
    staff,
  });
});

export {
  createStaff,
  updateOneStaff,
  getOneStaff,
  getAllStaff,
  clockStaffIn,
  clockStaffOut,
};

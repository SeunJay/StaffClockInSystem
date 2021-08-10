import Staff from '../models/staffModel.js';
import catchAsync from '../utils/catchAsync.js';
import generateId from '../utils/generateId.js';
import AppError from '../utils/appError.js';

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

  res.status(201).json({ status: 'success', createdStaff });
});

// @desc    Update one staff by ID
// @route   PATCH /api/staff/:id
const updateOneStaff = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { name } = req.body;

  const staffToUpdate = await Staff.findById(id);

  if (!staffToUpdate) return next(new AppError('Staff not found!', 404));

  staffToUpdate.name = name ? name : staffToUpdate.name;
  await staffToUpdate.save();

  res.status(200).json({
    status: 'success',
    staffToUpdate,
  });
});

// @desc    get one staff by ID
// @route   PATCH /api/staff/:id
const getOneStaff = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const staff = await Staff.findById(id);

  if (!staff) return next(new AppError('Staff not found!', 404));

  res.status(200).json({
    status: 'success',
    staff,
  });
});

// @desc    Get all staff
// @route   GET /api/staff/
const getAllStaff = catchAsync(async (req, res, next) => {
  const allStaff = await Staff.find({});

  res.status(200).json({
    count: allStaff.length,
    status: 'success',
    allStaff,
  });
});

// @desc    Clock staff in
// @route   PATCH /api/staff/clockIn
const clockStaffIn = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { staffId } = req.body;

  const staff = await Staff.findOne({ staffId, _id: id });

  if (!staff) return next(new AppError('Staff not found!', 404));

  if (staff.isAvailable) return next(new AppError('Already Checked In', 400));

  staff.isAvailable = true;
  staff.timeIn = Date.now();
  await staff.save();

  res.status(200).json({
    status: 'success',
    staff,
  });
});

// @desc    Clock staff out
// @route   PATCH /api/staff/clockOut
const clockStaffOut = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { staffId } = req.body;

  const staff = await Staff.findOne({ staffId, _id: id });

  if (!staff) return next(new AppError('Staff Not Found', 404));

  if (!staff.isAvailable) return next(new AppError('Already Checked Out', 400));

  staff.isAvailable = false;
  staff.timeOut = Date.now();
  await staff.save();

  res.status(200).json({
    status: 'success',
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

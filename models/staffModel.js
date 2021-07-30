import mongoose from 'mongoose';

const staffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  staffId: {
    type: String,
  },
  timeIn: {
    type: Number,
    default: 0,
  },

  timeOut: {
    type: Number,
    default: 0,
  },
  period: {
    type: String,
  },
});

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;

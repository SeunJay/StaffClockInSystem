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
    type: Date,
  },

  timeOut: {
    type: Date,
  },
});

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;

import { combineReducers } from 'redux';
import {
  staffReducer,
  newStaffReducer,
  updateStaffReducer,
} from './staff/staff.reducers';

const rootReducer = combineReducers({
  staff: staffReducer,
  newStaff: newStaffReducer,
  updatedStaff: updateStaffReducer,
});

export default rootReducer;

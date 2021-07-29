import { combineReducers } from 'redux';
import { staffReducer, newStaffReducer } from './staff/staff.reducers';

const rootReducer = combineReducers({
  staff: staffReducer,
  newStaff: newStaffReducer,
});

export default rootReducer;

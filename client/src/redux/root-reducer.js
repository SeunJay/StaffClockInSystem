import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  staffReducer,
  // newStaffReducer,
  // updateStaffReducer,
  // clockStaffInReducer,
} from './staff/staff.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['clockedStaff'],
};

const rootReducer = combineReducers({
  staff: staffReducer,
  // newStaff: newStaffReducer,
  // updatedStaff: updateStaffReducer,
  // clockedStaff: clockStaffInReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;

import { combineReducers } from 'redux';
import { staffReducer } from './staff/staff.reducers';

const rootReducer = combineReducers({ staff: staffReducer });

export default rootReducer;

import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
  ADD_NEW_STAFF_FAILURE,
  ADD_NEW_STAFF_SUCCESS,
  ADD_NEW_STAFF_REQUEST
} from './staff.types';

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  newStaff: null,
  errorMessage: '',
};

export const staffReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_STAFF_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_STAFF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: payload,
      };

    case FETCH_ALL_STAFF_FAILURE:
      return {
        ...state,
        isFetching: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};


export const newStaffReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_STAFF_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_NEW_STAFF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newStaff: payload,
      };

    case ADD_NEW_STAFF_FAILURE:
      return {
        ...state,
        isFetching: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
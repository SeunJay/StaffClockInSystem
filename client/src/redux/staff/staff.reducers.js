import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
  ADD_NEW_STAFF_FAILURE,
  ADD_NEW_STAFF_SUCCESS,
  ADD_NEW_STAFF_REQUEST,
  UPDATE_STAFF_FAILURE,
  UPDATE_STAFF_REQUEST,
  UPDATE_STAFF_SUCCESS,
  CLOCK_STAFF_IN_FAILURE,
  CLOCK_STAFF_IN_REQUEST,
  CLOCK_STAFF_IN_SUCCESS,
  CLOCK_STAFF_OUT_FAILURE,
  CLOCK_STAFF_OUT_REQUEST,
  CLOCK_STAFF_OUT_SUCCESS,
} from './staff.types';

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  newStaff: null,
  updatedStaff: null,
  clockedStaff: null,
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
        isFetching: false,
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
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export const updateStaffReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_STAFF_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_STAFF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        updatedStaff: payload,
      };

    case UPDATE_STAFF_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export const clockStaffInReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOCK_STAFF_IN_REQUEST:
    case CLOCK_STAFF_OUT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case CLOCK_STAFF_IN_SUCCESS:
    case CLOCK_STAFF_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        clockedStaff: payload,
      };

    case CLOCK_STAFF_IN_FAILURE:
    case CLOCK_STAFF_OUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

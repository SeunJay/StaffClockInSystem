import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
} from './staff.types';

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
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

import axios from 'axios';
import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
} from './staff.types';

export const getAllStaff = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_STAFF_REQUEST });
  console.log('called');
  try {
    const res = await axios.get('/api/staff');

    dispatch({
      type: FETCH_ALL_STAFF_SUCCESS,
      payload: res.data.allStaff,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_STAFF_FAILURE,
      payload: {
        msg: error.response.statusText,
      },
    });
  }
};

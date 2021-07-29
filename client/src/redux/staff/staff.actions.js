import axios from 'axios';
import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
  ADD_NEW_STAFF_FAILURE,
  ADD_NEW_STAFF_SUCCESS,
  ADD_NEW_STAFF_REQUEST,
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

export const addNewStaff =
  (name, department, designation) => async (dispatch) => {
    dispatch({ type: ADD_NEW_STAFF_REQUEST });
    console.log('called');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(
        '/api/staff',
        {
          name,
          department,
          designation,
        },
        config
      );

      console.log(res);

      dispatch({
        type: ADD_NEW_STAFF_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_NEW_STAFF_FAILURE,
        payload: {
          msg: error.response.statusText,
        },
      });
    }
  };

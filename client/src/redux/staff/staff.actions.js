import axios from 'axios';
import { toast } from 'react-toastify';

import {
  FETCH_ALL_STAFF_SUCCESS,
  FETCH_ALL_STAFF_REQUEST,
  FETCH_ALL_STAFF_FAILURE,
  ADD_NEW_STAFF_FAILURE,
  ADD_NEW_STAFF_SUCCESS,
  ADD_NEW_STAFF_REQUEST,
  UPDATE_STAFF_SUCCESS,
  UPDATE_STAFF_REQUEST,
  UPDATE_STAFF_FAILURE,
  CLOCK_STAFF_IN_REQUEST,
  CLOCK_STAFF_IN_SUCCESS,
  CLOCK_STAFF_IN_FAILURE,
  CLOCK_STAFF_OUT_FAILURE,
  CLOCK_STAFF_OUT_REQUEST,
  CLOCK_STAFF_OUT_SUCCESS,
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

export const updateStaff = (name, id) => async (dispatch) => {
  dispatch({ type: UPDATE_STAFF_REQUEST });
  console.log('called');
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.patch(
      `/api/staff/${id}`,
      {
        name,
      },
      config
    );

    console.log(res);

    dispatch({
      type: UPDATE_STAFF_SUCCESS,
      payload: res.data.staffToUpdate,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STAFF_FAILURE,
      payload: {
        msg: error.response.statusText,
      },
    });
  }
};

export const clockStaffIn = (staffId, id) => async (dispatch) => {
  dispatch({ type: CLOCK_STAFF_IN_REQUEST });
  console.log('called');
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.patch(
      `/api/staff/clockIn/${id}`,
      {
        staffId,
      },
      config
    );

    console.log(res);

    dispatch({
      type: CLOCK_STAFF_IN_SUCCESS,
      payload: res.data.staff,
    });

    toast.success('checked in successfully');
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: CLOCK_STAFF_IN_FAILURE,
      payload: error.response.data.message,
    });

    toast.error(error.response.data.message);
  }
};

export const clockStaffOut = (staffId, id) => async (dispatch) => {
  dispatch({ type: CLOCK_STAFF_OUT_REQUEST });
  console.log('called');
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.patch(
      `/api/staff/clockOut/${id}`,
      {
        staffId,
      },
      config
    );

    console.log(res);

    dispatch({
      type: CLOCK_STAFF_OUT_SUCCESS,
      payload: res.data.staff,
    });

    toast.success('checked out successfully');
  } catch (error) {
    dispatch({
      type: CLOCK_STAFF_OUT_FAILURE,
      payload: error.response.data.message,
    });
  }
};

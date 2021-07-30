import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Message from '../message/Message';
import Button from '../custom-button2/Button';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { clockStaffIn, clockStaffOut } from '../../redux/staff/staff.actions';

import {
  CardWrapper,
  CardFooter,
  Image,
  StaffId,
  StaffName,
  CustomButton,
} from './staff-card.styles';

const initialState = {
  isIn: false,
  staffId: '',
  successMessage: '',
  errors: '',
};

const StaffCard = ({ item }) => {
  const dispatch = useDispatch();

  const checkedStaff = useSelector((state) => state.clockedStaff);

  const { clockedStaff } = checkedStaff;

  console.log(checkedStaff);

  useEffect(() => {
    if (clockedStaff !== null && clockedStaff._id === item._id) {
      return setFormValues((prevProps) => ({
        ...prevProps,
        successMessage: 'Checked successfully!',
      }));
    }
  }, []);

  const [formValues, setFormValues] = useState(initialState);

  const { name, staffId } = item;

  const handleClockIn = (e) => {
    e.preventDefault();
    setFormValues((prevProps) => ({ ...prevProps, isIn: true }));

    const { staffId } = formValues;

    if (!staffId) {
      return setFormValues((prevProps) => ({
        ...prevProps,
        errors: 'Id field cannot be empty!',
      }));
    }

    dispatch(clockStaffIn(staffId, item._id));

    setFormValues((prevProps) => ({
      ...prevProps,
      staffId: '',
      successMessage: '',
      errors: '',
    }));
  };

  const handleClockOut = (e) => {
    e.preventDefault();
    setFormValues((prevProps) => ({ ...prevProps, isIn: false }));

    const { staffId } = formValues;

    if (!staffId) {
      return setFormValues((prevProps) => ({
        ...prevProps,
        errors: 'Id field cannot be empty!',
      }));
    }

    dispatch(clockStaffOut(staffId, item._id));

    setFormValues((prevProps) => ({
      ...prevProps,
      staffId: '',
      successMessage: '',
      errors: '',
    }));
  };

  if (formValues.errors) {
    setTimeout(() => {
      setFormValues((prevProps) => ({ ...prevProps, errors: '' }));
    }, 3000);
  }

  if (formValues.successMessage) {
    setTimeout(() => {
      setFormValues((prevProps) => ({ ...prevProps, successMessage: '' }));
    }, 3000);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevProps) => ({ ...prevProps, [name]: value }));
  };

  return (
    <>
      <CardWrapper>
        {formValues.errors && (
          <Message error={true}>{formValues.errors}</Message>
        )}
        {formValues.successMessage && (
          <Message error={false}>{formValues.successMessage}</Message>
        )}
        <Image
          style={{
            backgroundImage: `url('https://i.ibb.co/xJS0T3Y/camo-vest.png')`,
          }}
        />
        <CardFooter>
          <StaffName>{name}</StaffName>
          <StaffId>{staffId}</StaffId>
        </CardFooter>

        <Link
          to={{
            pathname: `/edit-staff/${item._id}`,
            state: { name },
          }}
        >
          <CustomButton className='custom-button' inverted>
            Edit Name
          </CustomButton>
        </Link>
        <CardFooter>
          <Button onClick={handleClockIn}>Clock in</Button>
          <Button onClick={handleClockOut}>Clock out</Button>
        </CardFooter>
        {/* <CardFooter>
          {clockedStaff &&
            clockedStaff._id === item._id &&
            clockedStaff.isAvailable &&
            clockedStaff.timeOut === 0 && (
              <small>
                Checked in{' '}
                <Moment format="YYYY/MM/DD">{new Date(clockedStaff.timeIn)}</Moment>
              </small>
            )}
        </CardFooter>
        <CardFooter>
          {clockedStaff &&
            clockedStaff._id === item._id &&
            !clockedStaff.isAvailable &&
            clockedStaff.timeIn !== 0 && (
              <small>
                Checked out{' '}
                <Moment fromNow>{new Date(clockedStaff.timeOut)}</Moment>
              </small>
            )}
        </CardFooter> */}
        <CardFooter></CardFooter>
        <input
          type='text'
          name='staffId'
          onChange={handleChange}
          value={formValues.staffId}
          placeholder='staff id'
          style={{
            outline: 'none',
            fontFamily: 'Open Sans Condensed',
            textAlign: 'center',
          }}
        />
      </CardWrapper>
    </>
  );
};

export default StaffCard;

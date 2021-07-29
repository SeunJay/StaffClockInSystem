import React, { useState, useEffect } from 'react';
import { Container, Title } from './add-staff.styles';
import FormInput from '../form-input/FormInput';
import Message from '../message/Message';
import { CustomButton } from '../staff-card/staff-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addNewStaff } from '../../redux/staff/staff.actions';

const initialState = {
  name: '',
  department: '',
  designation: '',
  successMessage: '',
  errors: '',
};

const AddStaff = () => {
  const dispatch = useDispatch();

  const staff = useSelector((state) => state.newStaff);

  const { newStaff } = staff;

  useEffect(() => {
    if (newStaff !== null) {
      return setFormValues((prevProps) => ({
        ...prevProps,
        successMessage: 'Staff added successfully!',
      }));
    }
  }, [newStaff]);

  const [formValues, setFormValues] = useState(initialState);

  const { name, department, designation, successMessage, errors } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevProps) => ({ ...prevProps, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('called!');

    if (!name || !department || !designation)
      return setFormValues((prevProps) => ({
        ...prevProps,
        errors: 'All fields are required!',
      }));

    dispatch(addNewStaff(name, department, designation));

    setFormValues(initialState);
  };

  if (errors) {
    setTimeout(() => {
      setFormValues((prevProps) => ({ ...prevProps, errors: '' }));
    }, 3000);
  }

  if (successMessage) {
    setTimeout(() => {
      setFormValues((prevProps) => ({ ...prevProps, successMessage: '' }));
    }, 3000);
  }

  return (
    <Container>
      <Title>Create New Staff</Title>
      {errors && <Message error={true}>{errors}</Message>}
      {successMessage && <Message error={false}>{successMessage}</Message>}
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={name}
          handleChange={handleChange}
          label='name'
        />

        <FormInput
          type='text'
          name='department'
          value={department}
          handleChange={handleChange}
          label='department'
        />

        <FormInput
          type='text'
          name='designation'
          value={designation}
          handleChange={handleChange}
          label='designation'
        />

        <CustomButton>Add Staff</CustomButton>
      </form>
    </Container>
  );
};

export default AddStaff;

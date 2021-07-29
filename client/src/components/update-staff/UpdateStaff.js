import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Title } from '../add-staff/add-staff.styles';
import FormInput from '../form-input/FormInput';
import Message from '../message/Message';
import { CustomButton } from '../staff-card/staff-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateStaff } from '../../redux/staff/staff.actions';

const UpdateStaff = () => {
  const params = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const staff = useSelector((state) => state.updatedStaff);

  console.log(staff);

  const { updatedStaff } = staff;

  // useEffect(() => {
  //   if (updatedStaff !== null) {
  //     return setFormValues((prevProps) => ({
  //       ...prevProps,
  //       successMessage: 'Staff Updated successfully!',
  //     }));
  //   }
  // }, []);

  console.log(params.id);
  console.log(location.state.name);

  const [formValues, setFormValues] = useState({
    name: location.state.name,
    successMessage: '',
    errors: '',
  });

  const { name, successMessage, errors } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevProps) => ({ ...prevProps, [name]: value }));
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('called!');

    if (!name)
      return setFormValues((prevProps) => ({
        ...prevProps,
        errors: 'Name field cannot be empty!',
      }));

    dispatch(updateStaff(name, params.id));

    setFormValues({
      name: '',
      errors: '',
      successMessage: '',
    });
  };

  return (
    <Container>
      <Title>Edit Name</Title>
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

        <CustomButton>Update Name</CustomButton>
      </form>
    </Container>
  );
};

export default UpdateStaff;

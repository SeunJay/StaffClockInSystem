import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Title } from '../add-staff/add-staff.styles';
import FormInput from '../form-input/FormInput';
import Message from '../message/Message';
import { CustomButton } from '../staff-card/staff-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateStaff } from '../../redux/staff/staff.actions';
import { toast } from 'react-toastify';



const UpdateStaff = () => {
  const params = useParams();

  const location = useLocation();

  const dispatch = useDispatch();

  const staff = useSelector((state) => state.staff);

  console.log(staff);

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

  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('called!');

    if (!name)
    return toast.error('Name field is required!');


    dispatch(updateStaff(name, params.id));

    setFormValues({
      name: '',
      errors: '',
      successMessage: '',
    });

    toast.success('Staff name updated successfully!');

  };

  return (
    <Container>
      <Title>Edit Name</Title>
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

import React, { useEffect } from 'react';
import { Collection, Title, Items, Wrapper } from './allStaff.styles';
import { Link } from 'react-router-dom';
import StaffCard from '../staff-card/StaffCard';
import Spinner from '../spinner/Spinner';
import Button from '../custom-button2/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStaff } from '../../redux/staff/staff.actions';

const AllStaff = () => {
  const dispatch = useDispatch();

  const staff = useSelector((state) => state.staff);

  const { collection, isFetching, errorMessage } = staff;

  if (isFetching && collection === null) {
    console.log('loading');
    console.log(isFetching);
  } else {
    console.log(collection);
    console.log(isFetching);
  }

  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  return (
    <Collection>
      <Title>All Staff</Title>
      {isFetching ? (
        <Spinner />
      ) : (
        <Items>
          {collection &&
            collection.map((staff) => (
              <StaffCard key={staff._id} item={staff} />
            ))}
        </Items>
      )}
    </Collection>
  );
};

export default AllStaff;

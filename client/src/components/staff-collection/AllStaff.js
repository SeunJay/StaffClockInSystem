import React, { useEffect } from 'react';
import { Collection, Title, Items } from './allStaff.styles';
import StaffCard from '../staff-card/StaffCard';
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
  }, []);

  return (
    <Collection>
      <Title>All Staff</Title>
      <Items>
        {collection && collection.map((staff) => (
            <StaffCard key={staff._id} staff={staff} />
          ))}
      </Items>
    </Collection>
  );
};

export default AllStaff;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableContainer } from './table.styles';
import { getAllStaff } from '../../redux/staff/staff.actions';
import Moment from 'react-moment';

const Table = () => {
  const dispatch = useDispatch();

  const staff = useSelector((state) => state.staff);

  const { collection } = staff;

  useEffect(() => {
    dispatch(getAllStaff());
  }, [dispatch]);

  return (
    <TableContainer>
      <tr>
        <th>Staff Id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Designation</th>
        <th>Time In</th>
        <th>Time Out</th>
      </tr>

      {collection &&
        collection.map((item) => (
          <tr>
            <td>{item.staffId}</td>
            <td>{item.name}</td>
            <td>{item.department}</td>
            <td>{item.designation}</td>
            <td>
              {`${
                item.timeIn === 0
                  ? '00:00'
                  : new Date(item.timeIn).toUTCString()
              }`}
            </td>
            <td>{`${
              item.timeOut === 0
                ? '00:00'
                : new Date(item.timeOut).toUTCString()
            }`}</td>
          </tr>
        ))}
    </TableContainer>
  );
};

export default Table;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper,
  CardFooter,
  Image,
  StaffId,
  StaffName,
  CustomButton,
} from './staff-card.styles';

const StaffCard = ({ staff }) => {
  // const [isEdit, setIsEdit] = useState(false);
  // console.log(staff._id);
  const { name, staffId } = staff;
  return (
    <CardWrapper>
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
          pathname: `/edit-staff/${staff._id}`,
          state: { name },
        }}
      >
        <CustomButton className='custom-button' inverted>
          Edit Name
        </CustomButton>
      </Link>
    </CardWrapper>
  );
};

export default StaffCard;

import React from 'react';
import {
  CardWrapper,
  CardFooter,
  Image,
  StaffId,
  StaffName,
  CustomButton,
} from './staff-card.styles';

const StaffCard = ({ staff }) => {
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

      <CustomButton className='custom-button' inverted>
        Clock In
      </CustomButton>
    </CardWrapper>
  );
};

export default StaffCard;

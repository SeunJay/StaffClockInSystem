import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  & .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StaffName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StaffId = styled.span`
  width: 10%;
`;

export const CustomButton = styled.button`
  max-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: ${({ inverted }) => (inverted ? '0px' : '0.5px')};
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black; */
  background-color: ${({ inverted }) => (inverted ? 'white' : 'black')};
  color: ${({ inverted }) => (inverted ? 'white' : 'white')};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: ${({ inverted }) => (inverted ? '1px solid black' : 'none')};
  display: inline-block;
  cursor: pointer;
  text-align: center;
  margin-right: 17px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    letter-spacing: 0px;
  }
`;

import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 60px;

  /* border: 1px solid red; */
  //padding: 30px 40px;

  & .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 140px;
    right: 42px;
    display: none;

    @media only screen and (max-width: 480px) {
      top: 90px;
      right: 13px;
      width: 70%;
    }
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

  

  @media only screen and (max-width: 540px) {
    width: 50%;
    margin: 0 auto;
    padding: 5%;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  object-fit: cover;

  /* @media only screen and (max-width: 654px) {
    border: 2px solid black;
  } */
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-bottom: 15px;
  /* border: 1px solid red; */

  /* @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
`;

export const StaffName = styled.span`
  width: 90%;
  /* border: 1px solid blue; */

  margin-bottom: 15px;
`;

export const StaffId = styled.span`
  width: 10%;
  /* border: 1px solid blue; */
`;

export const CustomButton = styled.button`
  max-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: ${({ inverted }) => (inverted ? '0px' : '0.5px')};
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  background-color: ${({ inverted }) => (inverted ? 'white' : 'black')};
  color: ${({ inverted }) => (inverted ? 'black' : 'white')};
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

  @media only screen and (max-width: 480px) {
    max-width: 125px;
    width: auto;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px 0 30px;
  }



`;

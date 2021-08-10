import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  margin-bottom: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 100px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}


  

  @media only screen and (max-width: 480px) {
    /* display: none; */
    //max-width: 20px;
    width: 10px;
    height: 40px;
    font-size: 10px;
    letter-spacing: 0.4px;
    padding: 0 20px 0 20px;
    border-radius: 5px;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    /* max-width: 125px;
    width: auto;
    height: 50px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px 0 30px; */
    /* max-width: 20%; */
    width: 12px;
    font-size: 70%;
    height: 40px;
    flex: 40%;
    margin-right: 2%;
    padding: 0 10px 0 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
`;

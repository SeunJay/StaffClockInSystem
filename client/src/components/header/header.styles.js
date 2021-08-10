import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 10%;
  }

  @media only screen and (max-width: 653px) {
    font-size: 13px;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  /* border: 1px solid red; */
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    height: 50px;
  }

  @media only screen and (max-width: 654px) {
    height: 50px;
    width: 100%;
    /* border: 2px solid green; */
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  //display: flex;
  & .logo {
    width: 100%;
    height: auto;
  }

  /* @media only screen and (max-width: 480px) {
    width: 30%;
    height: 40%;
    padding: 15px;
    display: flex;
    border: 1px solid blue;
  } */
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles};
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles};
`;

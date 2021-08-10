import styled from 'styled-components';

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 77%;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 654px) {
    font-size: 25px;
    margin: 15px 0;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media only screen and (max-width: 654px) {
    /* border: 1px solid red; */
    grid-gap: 9px;
    margin: 0 auto;
    width: 100%;
    padding: 2%;
  }
`;

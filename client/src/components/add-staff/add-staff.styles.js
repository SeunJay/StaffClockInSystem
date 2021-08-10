import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* border: 1px solid yellow; */

  @media only screen and (max-width: 480px) {
   width: 93%;
  }

 
`;

export const Title = styled.h2`
  margin: 10px 0px;
  font-weight: 600;
  color: #2b2b2b;

  @media only screen and (max-width: 480px) {
   font-size: 17px;
   margin-top: 15px;
  }
`;
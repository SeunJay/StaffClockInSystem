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
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
`;

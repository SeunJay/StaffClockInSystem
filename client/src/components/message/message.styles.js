import styled from 'styled-components';

export const Body = styled.div`
  background: ${({ error }) => (error ? '#f53e4e' : '#25F058')}; //#f53e4e;
  border-radius: 4px;
  font-size: 14px;
  margin: 15px 0 10px;
  color: white;
  padding: 15px 20px;
`;

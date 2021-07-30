import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;

  & td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & tr:hover {
    background-color: #ddd;
  }

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #222d38;
    color: white;
  }
`;

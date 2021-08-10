import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  /* outline: 1px solid red; */
  margin: 5% auto;

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

  @media only screen and (max-width: 480px) {
    th {
      display: none;
    }

    td {
      display: block;
    }

    td:nth-child(1) {
      display: none;
    }

    td:nth-child(2) {
      background-color: #222d38;
      color: white;
      text-align: center;
    }

    td:nth-child(3)::before {
      content: 'Department';
    }

    td:nth-child(4)::before {
      content: 'Designation';
    }

    td:nth-child(5)::before {
      content: 'Time In';
    }

    td:nth-child(6)::before {
      content: 'Time Out';
    }

    td {
      text-align: right;
    }

    td::before {
      float: left;
    }
  }
`;

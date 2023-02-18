import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 700px;
  margin-top: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);

  thead {
    background-color: rgb(119, 197, 240);
  }

  thead th {
    color: white;
    padding: 15px 5px;
  }
`;

export const TableRaw = styled.tr`
  text-align: center;

  &:nth-child(odd) {
    background-color: rgb(242, 242, 242);
  }

  &:nth-child(even) {
    background-color: rgb(213, 217, 251);
  }

  td {
    padding: 15px 5px;
  }
`;

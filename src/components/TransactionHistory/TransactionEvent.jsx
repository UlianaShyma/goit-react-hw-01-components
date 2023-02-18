import PropTypes from 'prop-types';
import { TableRaw } from './Transactions.styled';

export const TransactionEvent = ({ type, amount, currency }) => {
  return (
    <TableRaw>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRaw>
  );
};

TransactionEvent.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

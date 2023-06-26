import React from 'react';
import styled from '../TransactionHistory/transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ data }) => {
  TransactionHistory.propTypes = {
    data: PropTypes.array,
  };
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={styled.tableItem}>Type</th>
          <th className={styled.tableItem}>Amount</th>
          <th className={styled.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id}>
              <td className={styled.tableItem}>{item.type}</td>
              <td className={styled.tableItem}>{item.amount}</td>
              <td className={styled.tableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

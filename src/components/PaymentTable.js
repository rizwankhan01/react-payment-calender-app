// PaymentTable.js
import React from 'react';

const PaymentTable = ({ payments = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Connection</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td>{payment.date}</td>
            <td>{payment.type}</td>
            <td>{payment.connection}</td>
            <td>{payment.name}</td>
            <td>₹{payment.amount}</td>
            <td>{payment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;

// TotalPendingDisplay.js
import React from 'react';

const TotalPendingDisplay = ({ payments = [] }) => {
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`; // Format: YYYY-MM
  };

  const totalPending = payments
    .filter(
      (payment) =>
        payment.status === 'Pending' &&
        payment.date.startsWith(getCurrentMonth())
    )
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="total-pending-display">
      <strong>Total Pending Amount (This Month):</strong> ₹{totalPending}
    </div>
  );
};

export default TotalPendingDisplay;

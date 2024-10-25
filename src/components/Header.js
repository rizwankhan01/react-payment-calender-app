// Header.js
import React from 'react';

const Header = ({ toggleView, openTypeModal, openPaymentModal }) => (
  <div className="header">
    <h1>Payment Calendar</h1>
    <div>
      <button onClick={() => toggleView('calendar')}>Calendar View</button>
      <button onClick={() => toggleView('list')}>List View</button>
      <button onClick={openPaymentModal}>Add Payment</button>
      <button onClick={openTypeModal}>Manage Payment Types</button>
    </div>
  </div>
);

export default Header;
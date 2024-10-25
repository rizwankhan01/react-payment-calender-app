// PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ onAddPayment, paymentTypes }) => {
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    connection: '',
    name: '',
    amount: '',
    description: '',
    status: 'Pending',
    recurring: 'None',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPayment({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({
      type: '',
      date: '',
      connection: '',
      name: '',
      amount: '',
      description: '',
      status: 'Pending',
      recurring: 'None',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Select Payment Type</option>
        {paymentTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="connection"
        placeholder="Connection Number"
        value={formData.connection}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="name"
        placeholder="In Name of"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Payment Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
      </select>

      <select name="recurring" value={formData.recurring} onChange={handleChange}>
        <option value="None">None</option>
        <option value="Bi-Monthly">Bi-Monthly</option>
        <option value="Half-Yearly">Half-Yearly</option>
        <option value="Yearly">Yearly</option>
      </select>

      <button type="submit">Add Payment</button>
    </form>
  );
};

export default PaymentForm;
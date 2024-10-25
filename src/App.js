// App.js
import React, { useContext, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm';
import PaymentTable from './components/PaymentTable';
import CalendarView from './components/CalendarView';
import TotalPendingDisplay from './components/TotalPendingDisplay';
import Login from './components/Login';

function App() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [view, setView] = useState('list'); // Manage view (list or calendar)
  const [payments, setPayments] = useState([]); // Store payments
  const [paymentTypes, setPaymentTypes] = useState(['Electricity', 'Water', 'Internet']); // Payment types
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Add Payment Modal state
  const [showTypeModal, setShowTypeModal] = useState(false); // Add Payment Type Modal state

  // Toggle between Calendar View and List View
  const toggleView = (viewName) => setView(viewName);

  // Add a new payment
  const addPayment = (payment) => {
    setPayments([...payments, { ...payment, id: Date.now() }]);
    setShowPaymentModal(false); // Close modal after adding
  };

  // Delete a payment by id
  const deletePayment = (id) => {
    setPayments(payments.filter((p) => p.id !== id));
  };

  // Add a new payment type
  const addPaymentType = (type) => {
    if (!paymentTypes.includes(type)) {
      setPaymentTypes([...paymentTypes, type]);
    }
    setShowTypeModal(false); // Close modal after adding
  };

  // If the user is not authenticated, render the Login page
  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="App">
      <Header
        toggleView={toggleView}
        openPaymentModal={() => setShowPaymentModal(true)}
        openTypeModal={() => setShowTypeModal(true)}
      />
      <button onClick={logout}>Logout</button>
      <TotalPendingDisplay payments={payments} />
      
      {view === 'list' ? (
        <PaymentTable payments={payments} onDelete={deletePayment} />
      ) : (
        <CalendarView payments={payments} />
      )}

      {/* Add Payment Modal */}
      {showPaymentModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Payment</h2>
            <PaymentForm onAddPayment={addPayment} paymentTypes={paymentTypes} />
            <button onClick={() => setShowPaymentModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Add Payment Type Modal */}
      {showTypeModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Payment Type</h2>
            <input
              type="text"
              placeholder="New Payment Type"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addPaymentType(e.target.value);
                  e.target.value = ''; // Clear input field
                }
              }}
            />
            <button onClick={() => setShowTypeModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
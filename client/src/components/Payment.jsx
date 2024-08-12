// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode.react';


// const Payment = () => {
//   const location = useLocation();
//   const { bus } = location.state;

//   const handlePayment = (e) => {
//     e.preventDefault();
//     // Payment processing logic here
//     alert('Payment successful!');
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-4">Payment Details</h2>
//       <div className="card mt-4 mb-4 shadow-sm">
//         <div className="card-header">
//           {bus.source} to {bus.destination}
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">Date: {bus.date}</h5>
//           <p className="card-text">Price: {bus.price}</p>
//           <p className="card-text">Starting Point: {bus.source}</p>
//           <p className="card-text">Destination : {bus.destination}</p>
//           <p className="card-text">Total Seats: {bus.totalSeats}</p>
//           <p className="card-text">Seats Available: {bus.availableSeats}</p>
//           <p className="card-text">Bus ID: {bus.busId}</p>
//           <p className="card-text">QR Code for Payment:</p>
//           <pre>             <QRCode value={bus.UPI_ID} /></pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus } = location.state;
  
  // State to hold the payment ID input
  const [paymentId, setPaymentId] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

    // Optional: Add logic here to verify paymentId with backend

    // For now, we assume the payment ID is valid
    alert('Payment successful!');
    
    // Redirect to the ticket section
    navigate('/ticket', { state: { bus } });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Payment Details</h2>
      <div className="card mt-4 mb-4 shadow-sm">
        <div className="card-header">
          {bus.source} to {bus.destination}
        </div>
        <div className="card-body">
          <h5 className="card-title">Date: {bus.date}</h5>
          <p className="card-text">Price: {bus.price}</p>
          <p className="card-text">Starting Point: {bus.source}</p>
          <p className="card-text">Destination: {bus.destination}</p>
          <p className="card-text">Total Seats: {bus.totalSeats}</p>
          <p className="card-text">Seats Available: {bus.availableSeats}</p>
          <p className="card-text">Bus ID: {bus.busId}</p>
          <p className="card-text">QR Code for Payment:</p>
          <div className="text-center">
            <QRCode value={bus.UPI_ID} />
          </div>

          {/* New Section for Payment ID Input */}
          <div className="mt-4">
            <label htmlFor="paymentId" className="form-label">Payment ID</label>
            <input
              type="text"
              className="form-control"
              id="paymentId"
              placeholder="Enter your Payment ID"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              required
            />
          </div>

          {/* "Paid" Button */}
          <button
            className="btn btn-primary mt-3"
            onClick={handlePayment}
          >
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;



// src/components/CheckoutForm/PaymentStep.js
import React, { useState } from 'react';
import { Label, Input, Button } from './styled';

const PaymentStep = ({ paymentMethod, setPaymentMethod, nextStep, prevStep }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentSave = (e) => {
    e.preventDefault();
    // Here we can combine all the payment details into a single string or object
    setPaymentMethod(`Card ending in ${cardNumber.slice(-4)}, Expiry: ${expiryDate}`);
    nextStep();
  };

  return (
    <form onSubmit={handlePaymentSave}>
      <Label>Card Number</Label>
      <Input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      <Label>Expiry Date</Label>
      <Input
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
      <Label>CVV</Label>
      <Input
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />
      <Button type="button" onClick={prevStep}>Back</Button>
      <Button type="submit">Save Payment Method</Button>
    </form>
  );
};

export default PaymentStep;

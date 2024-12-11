
import React from 'react';
import { Label, Input, Button } from './styled';

const ShippingStep = ({ address, setAddress, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>Shipping Address</Label>
      <Input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <Button type="submit">Next</Button>
    </form>
  );
};

export default ShippingStep;

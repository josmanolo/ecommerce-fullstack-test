
import React, { useState } from 'react';
import ShippingStep from './ShippingStep';
import PaymentStep from './PaymentStep';
import ConfirmationStep from './ConfirmationStep';
import ProgressBar from './ProgressBar';
import { FormContainer } from './styled';

const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <FormContainer>
      <ProgressBar step={step} />
      {step === 1 && (
        <ShippingStep
          address={address}
          setAddress={setAddress}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <PaymentStep
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <ConfirmationStep
          address={address}
          paymentMethod={paymentMethod}
          prevStep={prevStep}
        />
      )}
    </FormContainer>
  );
};

export default CheckoutForm;

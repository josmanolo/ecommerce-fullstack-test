// src/components/CheckoutForm/styled.js
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    background-color: #0056b3;
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const ProductList = styled.div`
  margin: 1rem 0;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: auto;
    margin-right: 1rem;
  }

  div {
    h4 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      margin: 0;
      color: #007bff;
    }
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
`;

export const Step = styled.div`
  text-align: center;
  flex: 1;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${(props) => (props.active ? '#007bff' : '#ccc')};
    margin-bottom: 5px;
  }
`;

export const StepLabel = styled.div`
  font-size: 0.75rem;
  color: ${(props) => (props.active ? '#007bff' : '#ccc')};
`;

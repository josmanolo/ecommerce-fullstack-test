
import styled from 'styled-components';

export const CartContainer = styled.div`
  padding: 2rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: auto;
    margin-right: 1rem;
  }

  div {
    h3 {
      margin: 0 0 0.5rem 0;
    }

    p {
      margin: 0;
      color: #007bff;
    }
  }
`;

export const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;

export const Total = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

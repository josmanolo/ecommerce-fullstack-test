
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

export const Message = styled.p`
  margin-bottom: 2rem;
  color: #555;
`;

export const OrderDetails = styled.div`
  width: 100%;
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

export const Button = styled.button`
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

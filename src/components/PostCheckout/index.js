// src/components/PostCheckout/index.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, Message, OrderDetails, ProductList, ProductItem, ItemDetails, Button } from './styled';
import { useNavigate } from 'react-router-dom';

const PostCheckout = () => {
  const orderItems = useSelector((state) => state.order.items);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Order Confirmed!</Title>
      <Message>Thank you for your purchase. Here are the details of your order:</Message>
      <OrderDetails>
        <ProductList>
          {orderItems.map((item) => (
            <ProductItem key={item.id}>
              <ItemDetails>
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
              </ItemDetails>
            </ProductItem>
          ))}
        </ProductList>
        <p><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</p>
      </OrderDetails>
      <Button onClick={handleGoHome}>Go to Home</Button>
    </Container>
  );
};

export default PostCheckout;

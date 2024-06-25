// src/components/CheckoutForm/ConfirmationStep.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { setOrder } from '../../redux/slices/orderSlice';
import { Button, ProductList, ProductItem, ItemDetails } from './styled';
import { useNavigate } from 'react-router-dom';

const ConfirmationStep = ({ address, paymentMethod, prevStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleConfirm = () => {
    dispatch(setOrder({ items: cartItems, totalAmount }));
    dispatch(clearCart());
    navigate('/post-checkout');
  };

  return (
    <div>
      <h3>Confirm Your Order</h3>
      <p><strong>Shipping Address:</strong> {address}</p>
      <p><strong>Payment Method:</strong> {paymentMethod}</p>
      <ProductList>
        {cartItems.map((item) => (
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
      <Button type="button" onClick={prevStep}>Back</Button>
      <Button type="button" onClick={handleConfirm}>Confirm Purchase</Button>
    </div>
  );
};

export default ConfirmationStep;

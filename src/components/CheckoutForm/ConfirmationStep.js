
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import { Button, ProductList, ProductItem, ItemDetails } from './styled';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../redux/slices/orderSlice';

const ConfirmationStep = ({ address, paymentMethod, prevStep }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + Number(item.price), 0);

  const handleConfirm = () => {
    const products = cartItems.map(item => item.id)

    const order = {
      user: 1,
      products,
      total: totalAmount,
      shippingAdress: address, 
    }

    dispatch(createOrder(order))
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
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
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

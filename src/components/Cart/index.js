// src/components/Cart/index.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { CartContainer, CartItem, ItemDetails, RemoveButton, Total, CheckoutButton } from './styled';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemDetails>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))
      )}
      <Total>Total: ${totalAmount.toFixed(2)}</Total>
      {cartItems.length > 0 && (
        <Link to="/checkout">
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Link>
      )}
    </CartContainer>
  );
};

export default Cart;

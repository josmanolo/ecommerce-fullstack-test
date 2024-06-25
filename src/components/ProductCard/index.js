// src/components/ProductCard/index.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Card, Image, Info, Title, Price, AddButton } from "./styled";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <AddButton onClick={handleAddToCart}>Add to Cart</AddButton>
      </Info>
    </Card>
  );
};

export default ProductCard;

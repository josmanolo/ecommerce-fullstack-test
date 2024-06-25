// src/components/ProductList/index.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
import { List } from './styled';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;

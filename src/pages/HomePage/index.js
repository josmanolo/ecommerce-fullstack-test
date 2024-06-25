import React from 'react';
import ProductList from '../../components/ProductList';
import Header from '../../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Products</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
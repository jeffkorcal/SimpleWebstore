import React, { Component } from 'react';
import Product from './Product.jsx';

const Products = ({products}) => {
  return (
    <div>
      {products.map(({id, name, price, image}) => {
        return <Product key={id} name={name} price={price} image={image}/>
      })}
    </div>
  );
}

export default Products;
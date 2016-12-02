import React, { Component } from 'react';

const Product = ({name, image, price}) => {
  return (
    <div className='grid-cell align-center'>
      <img src={image} alt={name} />
      <h4 className='product-name'>{name}</h4>
      <p className='product-price'>${price}</p>
    </div>
  );
}

export default Product;
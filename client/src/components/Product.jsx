import React, { Component } from 'react';

const Product = ({name, image, price}) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
}

export default Product;
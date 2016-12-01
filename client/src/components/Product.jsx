import React, { Component } from 'react';

const Product = ({name, image, price}) => {
  return (
    <div>
      {name}
      <img src={image} alt=""/>
      {price}
    </div>
  );
}

export default Product;
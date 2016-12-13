import React from 'react';

const Product = ({id, name, image, price, handleCart, wholesale}) => {
  
  let displayPrice = '';
  if (wholesale) {
    displayPrice = (<p className='product-price wholesale'>${price}</p>);
  } else {
    displayPrice = (<p className='product-price'>${price}</p>);
  }

  return (
    <div className='grid-cell align-center'>
      <img src={image} alt={name} />
      <h4 className='product-name'>{name}</h4>
      {displayPrice}
      <button 
        className='add-to-cart-btn' 
        onClick={() => handleCart(id, name, price)}>
        Add to Card
      </button>
    </div>
  );
}

export default Product;
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Cart = React.createClass({
  
  displayCart() {
    if (this.props.totalInCart) {
      return this.props.cart.map((product) => {
        return (
          <li key={product.id}>{product.name} ${product.price}</li>
        )
      }); 
    }
  },

  render() {
    return (
      <div className='grid grid-col grid-col-end'>
        <div className='cart-total'>Total In Cart: {this.props.totalInCart}</div>
        <ul className='align-right cart-products'>
          {this.displayCart()} 
        </ul>
      </div>
    );
  }

});

function mapStateToProps({main}) {
  return {
    totalInCart: main.totalInCart,
    cart: main.cart
   };
}

export default connect(mapStateToProps)(Cart);
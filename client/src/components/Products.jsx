import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Product from './Product.jsx';

const Products = React.createClass({
  
  togglePrice(price) {
    if (this.props.wholesale) {
      return (price * 0.8).toFixed(2);
    } else {
      return price;
    }
  },
  
  render(){
    return (
      <div className='grid'>
        {this.props.products.map(({id, name, price, image}) => {
          price = this.togglePrice(price);
          return (
            <Product 
              key={id}
              id={id}
              name={name} 
              price={price} 
              image={image} 
              handleCart={this.props.handleCart}
              wholesale={this.props.wholesale}
            />
          );
        })}
      </div>
    );
  }
});

function mapStateToProps({main}) {
  return {
    products: main.products,
    wholesale: main.wholesale
   };
}

export default connect(mapStateToProps, actions)(Products);
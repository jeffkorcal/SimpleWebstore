import axios from 'axios';
import {
  FETCH_PRODUCTS,
  SORT_PRODUCTS_BY,
  TOGGLE_WHOLESALE,
  ADD_TO_CART
} from './types';

export function getProducts() {
  return function (dispatch) {
    
    axios.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
    .then(response => {
      const products = response.data.products.map(product => {
        return {
          id: product.id,
          name: product.name.toUpperCase(),
          image: product.mainImage.ref,
          price: (product.defaultPriceInCents / 100).toFixed(2)
        }
      });

      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => console.log(err));
  }
}

export function handleFilterChange(sortBy) {
  return function (dispatch) {
    dispatch({ 
      type: SORT_PRODUCTS_BY,
      payload: sortBy
    });
  }
}

export function handleCheckbox() {
  return function (dispatch) {
    dispatch({ type: TOGGLE_WHOLESALE })
  }
}

export function handleCart(id, name, price) {
  return function (dispatch) {
    dispatch({ 
      type: ADD_TO_CART,
      payload: {id, name, price}
    });
  }
}

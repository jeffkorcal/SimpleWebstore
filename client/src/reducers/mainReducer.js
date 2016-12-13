import {
  FETCH_PRODUCTS,
  SORT_PRODUCTS_BY,
  TOGGLE_WHOLESALE,
  ADD_TO_CART
} from '../actions/types';

const initialState = {
  products: [],
  filterVal: '',
  wholesale: false,
  totalInCart: 0,
  cart: []
};

export default function(state = initialState, action) {
  
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, products: action.payload };
    case TOGGLE_WHOLESALE:
      return {...state, wholesale: !state.wholesale };
    case ADD_TO_CART:
      return {
        ...state, 
        cart: state.cart.concat(action.payload),
        totalInCart: state.totalInCart + 1
      };
    case SORT_PRODUCTS_BY:
      return {
        ...state, 
        products: sortBy(action.payload, state.products),
        filterVal: action.payload
      };
    default:
      return state;
  }
}

// I decided to put the function here instead of in the view because I did not want to run a sort on every re-render
function sortBy(filterVal, data) {
  const products = data.slice();

  if (filterVal === 'nameAZ') {
    products.sort((a,b) => a.name > b.name);
  } else if (filterVal === 'nameZA') {
    products.sort((a,b) => a.name < b.name);
  } else if (filterVal === 'priceHL') {
    products.sort((a,b) => b.price - a.price);
  } else if (filterVal === 'priceLH') {
    products.sort((a,b) => a.price - b.price);
  }

  return products;
}
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PageHeader from './PageHeader.jsx';
import Filters from './Filters.jsx';
import Cart from './Cart.jsx'
import Products from './Products.jsx';
import PageFooter from './PageFooter.jsx';
import styles from '../styles/style.less';

const App = React.createClass({
  componentDidMount() {
    this.props.getProducts();
  },
  render() {
    return (
      <div>
        <PageHeader />
        <div className='grid grid-center'>
          <div className='container'>
            <Filters />
            <Cart />
            <Products />
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
});

export default connect(null, actions)(App);

import React, { Component } from 'react';
import Products from './Products.jsx';
import styles from '../styles/style.less';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      pageTitle: null,
      extraInfo: null
    }

  }

  init() {

    const request = $.ajax({
      url: "https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js",
      method: 'GET',
      dataType: 'json'
    });

    request.done(response => {

      const products = response.products.map(product => {
        return {
          id: product.id,
          name: product.name,
          image: product.mainImage.ref,
          price: '$' + (product.defaultPriceInCents / 100).toFixed(2)
        }
      });

      this.setState({ 
        products: products,
        pageTitle: response.pageTitle,
        extraInfo: response.extraInfo
       });

    })
    .fail(error => { console.log(error); })

  }

  componentWillMount() {
    this.init();
  }

  render() {
    return (
      <div>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
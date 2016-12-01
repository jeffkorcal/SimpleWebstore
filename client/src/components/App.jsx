import React, { Component } from 'react';
import Products from './Products.jsx';
import Filters from './Filters.jsx';
import styles from '../styles/style.less';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filterVal: '',
      pageTitle: null,
      extraInfo: null
    }

    this.init = this.init.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

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
          name: product.name.toUpperCase(),
          image: product.mainImage.ref,
          price: (product.defaultPriceInCents / 100).toFixed(2)
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

  handleFilterChange(event) {
    const filterVal = event.target.value;
    const products = this.state.products.slice();

    if (filterVal === 'nameAZ') {
      products.sort((a,b) => a.name > b.name);
    } else if (filterVal === 'nameZA') {
      products.sort((a,b) => a.name < b.name);
    } else if (filterVal === 'priceHL') {
      products.sort((a,b) => b.price - a.price);
    } else if (filterVal === 'priceLH') {
      products.sort((a,b) => a.price - b.price);
    }

    this.setState({ products, filterVal });
  }

  componentWillMount() {
    this.init();
  }

  render() {
    return (
      <div>
        <Filters filterVal={this.state.filterVal} handleFilterChange={this.handleFilterChange}/>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
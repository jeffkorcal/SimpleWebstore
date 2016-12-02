import React, { Component } from 'react';
import $ from 'jquery';
import PageHeader from './PageHeader.jsx';
import Filters from './Filters.jsx';
import Products from './Products.jsx';
import PageFooter from './PageFooter.jsx';
import styles from '../styles/style.less';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filterVal: ''
    }

    this.init = this.init.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  init() {
    //ajax call to recieve data
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

      this.setState({ products });
    })
    .fail(error => { console.log(error); })

  }

  handleFilterChange(event) {
    // event handler for filtering products
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

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div className='grid grid-center'>
          <div className='container'>
            <Filters filterVal={this.state.filterVal} handleFilterChange={this.handleFilterChange}/>
            <Products products={this.state.products} />
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default App;
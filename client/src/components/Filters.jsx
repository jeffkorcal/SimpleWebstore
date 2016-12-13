import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Filters = React.createClass({
  render() {
    return (
      <div className="grid grid-col filter">
        <div className='grid grid-end checkbox'>
          <label htmlFor="checkbox_id">Wholesale Price</label>
          <input type="checkbox" id="checkbox_id" onChange={() =>this.props.handleCheckbox()} />
        </div>
        <div className='grid grid-end sort-by'>
          <select value={this.props.filterVal} onChange={(e) => this.props.handleFilterChange(e.target.value)}>
            <option value="">Sort by</option>
            <option value="nameAZ">Name A-Z</option>
            <option value="nameZA">Name Z-A</option>
            <option value="priceHL">Highest Price</option>
            <option value="priceLH">Lowest Price</option>
          </select>
        </div>
      </div>
    );
  }
});

function mapStateToProps({main}) {
  return {
    filterVal: main.filterVal
   };
}

export default connect(mapStateToProps, actions)(Filters);
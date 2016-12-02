import React, { Component } from 'react';

const Filters = ({filterVal, handleFilterChange}) => {
  return (
    <div className="grid grid-end">
      <div className='filter'>
        <select value={filterVal} onChange={(e) => handleFilterChange(e)}>
          <option value="">Sort by Feature:</option>
          <option value="nameAZ">Sort by Name A-Z</option>
          <option value="nameZA">Sort by Name Z-A</option>
          <option value="priceHL">Sort by Highest Price</option>
          <option value="priceLH">Sort by Lowest Price</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
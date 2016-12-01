import React, { Component } from 'react';

const Filters = ({filterVal, handleFilterChange}) => {
  return (
    <div>
      <select value={filterVal} onChange={(e) => handleFilterChange(e)}>
        <option value="">Sort by Feature:</option>
        <option value="nameAZ">Sort by Name A-Z</option>
        <option value="nameZA">Sort by Name Z-A</option>
        <option value="priceHL">Sort by Highest to Lowest Price</option>
        <option value="priceLH">Sort by Lowest to Highest Price</option>
      </select>
    </div>
  );
}

export default Filters;
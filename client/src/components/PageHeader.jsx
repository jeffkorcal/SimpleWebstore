import React, { Component } from 'react';

const PageHeader = () => {
  return (
    <div className='grid grid-center banner'>
      <div className='align-center'>
        <span className='logo-container'>
          <img src='/client/assets/fiji-logo.png' alt='Fiji Water'/>   
        </span>
      </div>
    </div>
  );
}

export default PageHeader;
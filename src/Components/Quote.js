import React from 'react';
import refreshIcon from './Images/icon-refresh.svg';

export const Quote = ({ quote, refreshQuote, author }) => {
  return (
    <div className='quote-container' id='quote-container'>
      <div className='quote'>
        <h5 className='quote-text'>{quote}</h5>
        <img src={refreshIcon} alt='' onClick={refreshQuote} />
      </div>
      <h5 className='author'>{author}</h5>
    </div>
  );
};

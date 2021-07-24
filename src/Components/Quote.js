import React from 'react';
import useFetch from '../useFerch';
import refreshIcon from './Images/icon-refresh.svg';

export const Quote = () => {
  const { quote, getQuoteData } = useFetch();
  return (
    <div className='quote-container' id='quote-container'>
      <div className='quote'>
        <h5 className='quote-text'>{quote.content}</h5>
        <img src={refreshIcon} alt='' onClick={getQuoteData} />
      </div>
      <h5 className='author'>{quote.author}</h5>
    </div>
  );
};

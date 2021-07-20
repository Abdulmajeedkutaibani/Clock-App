import React from 'react';

export const Quote = ({ quote, author }) => {
  return (
    <div className='quote-container' id='quote-container'>
      <h5 className='quote'>{quote}</h5>
      <h5 className='author'>{author}</h5>
    </div>
  );
};

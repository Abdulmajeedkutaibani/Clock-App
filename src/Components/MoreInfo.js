import React from 'react';

export const MoreInfo = () => {
  return (
    <div className='more-info-container' id='more-info-container'>
      <div className='more-info' id='more-info'>
        <div className='col-1' id='col'>
          <div className='col-1_item'>
            <h6>CURRENT TIMEZONE</h6>
            <h2>Europe/London</h2>
          </div>
          <div className='col-1_item'>
            <h6>DAY OF THE YEAR</h6>
            <h2>295</h2>
          </div>
        </div>
        <div className='col-2' id='col'>
          <div className='col-2_item'>
            <h6>DAY OF THE WEEK</h6>
            <h2>5</h2>
          </div>
          <div className='col-2_item'>
            <h6>WEEK NUMBER</h6>
            <h2>42</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

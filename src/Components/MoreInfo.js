import React from 'react';
import useFetch from '../useFerch';

export const MoreInfo = () => {
  const { moreData } = useFetch();
  return (
    <div className='more-info-container' id='more-info-container'>
      <div className='more-info' id='more-info'>
        <div className='col-1'>
          <div className='col-1_item'>
            <h6>CURRENT TIMEZONE</h6>
            <h2>{moreData.timezone}</h2>
          </div>
          <div className='col-1_item'>
            <h6>DAY OF THE YEAR</h6>
            <h2>{moreData.day_of_year}</h2>
          </div>
        </div>
        <div className='col-2'>
          <div className='col-2_item'>
            <h6>DAY OF THE WEEK</h6>
            <h2>{moreData.day_of_week}</h2>
          </div>
          <div className='col-2_item'>
            <h6>WEEK NUMBER</h6>
            <h2>{moreData.week_number}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Btn } from './Btn';
export const TimeAndInfo = ({
  icon,
  greeting,
  time,
  abbreviation,
  country,
  country_code,
}) => {
  return (
    <div className='time-info' id='time-info'>
      <div className='time'>
        <div className='greeting' id='greeting'>
          <img src={icon} alt='' />
          <h4>{greeting}</h4>
        </div>
        <div className='clock-info'>
          <h1 className='clock'>{time}</h1>
          <span className='clock-format'>{abbreviation}</span>
        </div>
        <div className='location'>
          <h3>
            in {country}, {country_code}
          </h3>
        </div>
      </div>
      <div className='more-btn'>
        <Btn />
      </div>
    </div>
  );
};

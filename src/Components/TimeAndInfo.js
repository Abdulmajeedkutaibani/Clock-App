import React from 'react';
import { Btn } from './Btn';
import sunIcon from './Images/icon-sun.svg';

export const TimeAndInfo = ({ time }) => {
  return (
    <div className='time-info'>
      <div className='time'>
        <div className='greeting'>
          <img src={sunIcon} alt='' />
          <h4>GOOD MORNING, IT'S CURRENTLY</h4>
        </div>
        <div className='clock-info'>
          <h1 className='clock'>{time}</h1>
          <span className='clock-format'>BST</span>
        </div>
        <div className='location'>
          <h3>IN LONDON, UK</h3>
        </div>
      </div>
      <div className='more-btn'>
        <Btn />
      </div>
    </div>
  );
};

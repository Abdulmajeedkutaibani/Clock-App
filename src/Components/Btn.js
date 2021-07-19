import React from 'react';
import arrowIcon from './Images/icon-arrow-up.svg';
import { useState } from 'react';
export const Btn = () => {
  const [arrow, setArrow] = useState('arrow');
  const [btnText, setBtnText] = useState('MORE');
  const handleClick = () => {
    arrow === 'arrow' ? setArrow('arrow-active') : setArrow('arrow');
    btnText === 'MORE' ? setBtnText('LESS') : setBtnText('MORE');

    arrow === 'arrow-active'
      ? (document.getElementById('more-info-container').style.height = '0')
      : (document.getElementById('more-info-container').style.height = '50%');

    arrow === 'arrow'
      ? (document.getElementById('more-info').style.display = 'flex')
      : (document.getElementById('more-info').style.display = 'none');

    arrow === 'arrow-active'
      ? (document.getElementById('quote-container').style.display = 'flex')
      : (document.getElementById('quote-container').style.display = 'none');
  };
  return (
    <div>
      <div className='expand-btn' onClick={handleClick}>
        <h6>{btnText}</h6>
        <div className={arrow}>
          <img src={arrowIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

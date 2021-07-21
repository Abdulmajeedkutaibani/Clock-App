import React from 'react';
import arrowIcon from './Images/icon-arrow-up.svg';
import { useState } from 'react';
export const Btn = () => {
  const [arrow, setArrow] = useState('arrow');
  const [btnText, setBtnText] = useState('MORE');
  const handleClick = () => {
    arrow === 'arrow' ? setArrow('arrow-active') : setArrow('arrow');
    btnText === 'MORE' ? setBtnText('LESS') : setBtnText('MORE');

    arrow === 'arrow'
      ? (document.getElementById('time-info').style.transform =
          'translateY(-125%)')
      : (document.getElementById('time-info').style.transform =
          'translateY(0%)');

    arrow === 'arrow'
      ? (document.getElementById('quote-container').style.transform =
          'translateY(-100%)')
      : (document.getElementById('quote-container').style.transform =
          'translateY(0%)');
    arrow === 'arrow'
      ? (document.getElementById('quote-container').style.opacity = '0')
      : (document.getElementById('quote-container').style.opacity = '1');

    arrow === 'arrow'
      ? (document.getElementById('more-info-container').style.height = '50%')
      : (document.getElementById('more-info-container').style.height = '0%');

    // arrow === 'arrow-active'
    //   ? (document.getElementById('more-info-container').style.maxHeight = '0')
    //   : (document.getElementById('more-info-container').style.maxHeight =
    //       '60%');

    // arrow === 'arrow'
    //   ? (document.getElementById('quote-container').style.display = 'none')
    //   : (document.getElementById('quote-container').style.display = 'flex');
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

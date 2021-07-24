import React from 'react';
import useFetch from '../useFerch';
import { Btn } from './Btn';
import sunIcon from './Images/icon-sun.svg';
import moonIcon from './Images/icon-moon.svg';

export const TimeAndInfo = () => {
  const { timeData, moreData, location } = useFetch();
  const iconChange = () => {
    if (timeData[0] > '18' && timeData[0] <= '24') {
      return moonIcon;
    } else return sunIcon;
  };
  const greetingChange = () => {
    const morning = timeData >= '05:00' && timeData < '12:00';
    const afternoon = timeData >= '12:00' && timeData < '18:00';
    const evining = !morning && !afternoon;
    let greeting = '';

    if (morning || afternoon) {
      document.getElementById('greeting-image').classList.add('rotate-image');
    }
    if (morning) {
      greeting = 'GOOD MORNING, IT’S CURRENTLY';
    } else if (afternoon) {
      greeting = 'GOOD AFTERNOON, IT’S CURRENTLY';
    } else if (evining) {
      greeting = 'GOOD EVENING, IT’S CURRENTLY';
    }

    if (morning && window.innerWidth < 767) {
      greeting = 'GOOD MORNING, IT’S CURRENTLY';
    } else if (afternoon && window.innerWidth < 767) {
      greeting = 'GOOD AFTERNOON, IT’S CURRENTLY';
    } else if (evining && window.innerWidth < 767) greeting = 'GOOD EVENING';

    return greeting;
  };

  return (
    <div className='time-info' id='time-info'>
      <div className='time'>
        <div className='greeting' id='greeting'>
          <img id='greeting-image' src={iconChange()} alt='' />
          <h4>{greetingChange()}</h4>
        </div>
        <div className='clock-info'>
          <h1 className='clock'>{timeData}</h1>
          <span className='clock-format'>{moreData.abbreviation}</span>
        </div>
        <div className='location'>
          <h3>
            in {location.country_name}, {location.country_code}
          </h3>
        </div>
      </div>
      <div className='more-btn'>
        <Btn />
      </div>
    </div>
  );
};

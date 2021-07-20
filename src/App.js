import './index.css';
import { TimeAndInfo } from './Components/TimeAndInfo';
import { Quote } from './Components/Quote';
import { MoreInfo } from './Components/MoreInfo';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [moreData, setMoreData] = useState([]);
  const [location, setLocation] = useState([]);

  ////////
  const getData = async () => {
    const response = await Axios.get(`https://api.quotable.io/random`);
    setData(response.data);
  };
  const getLocation = async () => {
    const response = await Axios.get('https://freegeoip.app/json/');
    setLocation(response.data);
  };
  const getTime = async () => {
    const response = await Axios.get('http://worldtimeapi.org/api/ip');
    setMoreData(response.data);
    const timeData1 = response.data.datetime.split('T', 2);
    const timeData2 = timeData1[1].split('.', 1);
    const timeData3 = timeData2[0].split(':', 2);
    setTimeData(timeData3);
  };
  useEffect(() => {
    getTime();
  }, [timeData]);

  useEffect(() => {
    getLocation();
    getData();
  }, []);
  return (
    <div className='container'>
      <div className='clock-container'>
        <Quote quote={data.content} author={data.author} />
        <TimeAndInfo
          time={`${timeData[0]}:${timeData[1]}`}
          country={location.country_name}
          country_code={location.country_code}
        />
        <MoreInfo
          timezone={moreData.timezone}
          day_of_year={moreData.day_of_year}
          day_of_week={moreData.day_of_week}
          week_number={moreData.week_number}
        />
      </div>
    </div>
  );
}

export default App;

import './index.css';
import { TimeAndInfo } from './Components/TimeAndInfo';
import { Quote } from './Components/Quote';
import { MoreInfo } from './Components/MoreInfo';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);

  ////////
  const getData = async () => {
    const response = await Axios.get(`https://api.quotable.io/random`);
    setData(response.data);
  };
  const getTime = async () => {
    const response = await Axios.get('http://worldtimeapi.org/api/ip');

    const timeData1 = response.data.datetime.split('T', 2);
    const timeData2 = timeData1[1].split('.', 1);
    const currentTime = timeData2[0].split(':', 2).join(':');

    setTime(currentTime);
    console.log(currentTime);
  };
  useEffect(() => {
    getData();
    getTime();
  }, []);

  return (
    <div className='container'>
      <div className='clock-container'>
        <Quote quote={data.content} author={data.author} />
        <TimeAndInfo time={time} />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;

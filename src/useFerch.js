import Axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [quote, setQuote] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [moreData, setMoreData] = useState([]);
  const [location, setLocation] = useState([]);

  const getQuoteData = async () => {
    const quoteResponse = await Axios.get(`https://api.quotable.io/random`);
    setQuote(quoteResponse.data);
  };

  useEffect(async () => {
    getQuoteData();
    const locationResponse = await Axios.get('https://freegeoip.app/json/');
    setLocation(locationResponse.data);
  }, []);

  useEffect(async () => {
    const timeResponse = await Axios.get(
      'https://ancient-woodland-98023.herokuapp.com'
    );
    setMoreData(timeResponse.data);
    const timeData1 = timeResponse.data.datetime.split('T', 2);
    const timeData2 = timeData1[1].split('.', 1);
    const timeData3 = timeData2[0].split(':', 2);
    const realTime = `${timeData3[0]}:${timeData3[1]}`;
    setTimeData(realTime);
  }, [timeData]);
  return { quote, timeData, moreData, location, getQuoteData };
};

export default useFetch;

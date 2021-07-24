import './index.css';
import { TimeAndInfo } from './Components/TimeAndInfo';
import { Quote } from './Components/Quote';
import { MoreInfo } from './Components/MoreInfo';

import useFetch from './useFerch';
function App() {
  const { timeData } = useFetch();

  const backgroundChange = () => {
    document.getElementById('container').classList.add('container-dark');
  };
  if (timeData > '18:00' && timeData <= '24:00') {
    backgroundChange();
  }

  ////
  return (
    <div className='container' id='container'>
      <div className='clock-container' id='clock-container'>
        <Quote />
        <TimeAndInfo />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;

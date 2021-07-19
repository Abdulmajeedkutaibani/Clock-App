import './index.css';
import { TimeAndInfo } from './Components/TimeAndInfo';
import { Quote } from './Components/Quote';

import { MoreInfo } from './Components/MoreInfo';

function App() {
  return (
    <div className='container'>
      <div className='clock-container'>
        <Quote />
        <TimeAndInfo />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;

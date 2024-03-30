import './App.css';
import './index.css'
import InputFields from './components/InputFields';
import CountdownTimer from './components/CountdownTimer';
import { WhatTime } from './components/InputFields';

function App() {

  console.log(WhatTime)
  return (
    <div className="w-full h-100vh flex flex-col justify-center items-center">
      <div className='w-3/5 h-3/4 rounded-md border-gray-300 border-solid border-2 '>
        <InputFields />
        <CountdownTimer time={WhatTime}/>
      </div>
    </div>
  );
}

export default App;

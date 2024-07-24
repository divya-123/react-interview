import React, { useEffect, useState } from 'react'
import '../styles.css';
import ProgressBar from './ProgressBar';

const ProgressBarContainer = () => {
const [value, setValue] = useState(0);
useEffect(()=>{
    setInterval(() => {
        setValue((val)=>val+1);
    }, 100); 
},[]);

  return (
    <div className='progressbarcontainer'>
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  )
}

export default ProgressBarContainer

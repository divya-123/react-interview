import React, { useEffect, useState } from 'react'

const ProgressBar = ({value}) => {
    //Step 1: Build Basic UI
    //Create a Progress bar component
    //Add style to the percentage value and the bar
    //Step 2: Simulate Progress Bar
    //Usestate for value
    //UseEffect to set interval
    //In the Progress Bar set minimum and max limits of the percentage - Handle Edge cases
    //Step 3: Add Fill Animation
    //style css
    //control the width from ProgressBar component
    //Responsiveness for font-color
    const [percent, setPercent] = useState(value);
    useEffect(()=>{
        setPercent(Math.min(100, Math.max(value, 0)));
    },[value]);
  return (
    <div className='progress'>
      <span>{percent.toFixed()}%</span>
      <div style={{width: `${percent}%` }}/>
    </div>
  )
}

export default ProgressBar

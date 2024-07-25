import React, { useState } from 'react'
import Panel from './Panel'

const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Panel title={"About"} isActive={activeIndex===0} onShow={()=>{setActiveIndex(0)}}>This is About section.</Panel>
      <Panel title={"Places to Visit"} isActive={activeIndex===1} onShow={()=>{setActiveIndex(1)}}>Places to visit section.</Panel>
    </div>
  )
}

export default Accordian

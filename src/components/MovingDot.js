import React, { useState } from 'react'

const MovingDot = () => {
  const [position, setPosition] = useState({x:0, y:0});
  const handlePointerMove = (e) => {
    setPosition({
        x: e.clientX,
        y: e.clientY
    })
  }
  return (
    <div onPointerMove={handlePointerMove} style={{position:'relative', width:'100vw', height:'100vh'}}>
      <div style={{position:'absolute', backgroundColor: 'red', borderRadius: '50%', transform:`translate(${position.x}px, ${position.y}px)`,left:-10, top:-10, width: 20, height: 20}}/>
    </div>
  )
}

export default MovingDot

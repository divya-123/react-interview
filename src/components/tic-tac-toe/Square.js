import React, { useState } from 'react'
import './styles.css';

const Square = ({value, onSquareClick}) => {
  return (
    <div>
    <button className='square' onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Square

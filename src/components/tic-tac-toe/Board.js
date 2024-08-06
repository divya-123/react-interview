import React, { useState } from 'react'
import Square from './Square'
import './styles.css';

const Board = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null))

  let label;
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if(nextSquares[i] || calculateWinner(squares)) return;
    if(isXNext){
        nextSquares[i] = "X";
    } else{
        nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  const calculateWinner = (squares) => {
    const lines = [[0,1,2], [3,4,5], [6,7,8],
                   [0,4,8], [2,4,6],
                   [0,3,6], [1,4,7], [2,5,8]];

    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] == squares[b] && squares[b] == squares[c] && squares[a] == squares[c]){
            return squares[a];
        }
    }
    return null;
  }

  if(calculateWinner(squares)){
    label="Winner is " + calculateWinner(squares);
  } else{
    label = isXNext ? "Next Player is : X" : "Next Player is : O" ;
  }



  return (
    <div className='board'>
      <div>
        {label}
      </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

export default Board

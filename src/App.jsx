import { useState } from "react";
import PropTypes from 'prop-types';
import "./App.css";

function Square({ value, onSquareClick }) {
  return ( 
  <button
  className="square"
  onClick={onSquareClick}
  > 
  {value}
  </button>
)};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
  const newSquares = squares.slice();
  newSquares[0] = 'X';
  setSquares(newSquares);
  }
  
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

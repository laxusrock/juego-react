import PropTypes from "prop-types";
import "./App.css";

function Square({ value }) {

  function handleClick() {
    alert("He hecho click en la casilla " +  value );
  }

  return (
    <button
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
};

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>

      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>

      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

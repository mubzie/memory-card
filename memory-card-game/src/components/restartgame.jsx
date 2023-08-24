/* eslint-disable react/prop-types */
import "../assets/styles/restartgame.css";

export default function Restart({ onRestart, onStart }) {
  return (
    <div className="overlay">
      <div className="content">
        <div>You lost this one</div>
        <div className="content-btns">
          <button className="content-btn" onClick={onRestart}>
            start new game
          </button>
          <button className="content-btn" onClick={onStart}>
            go back to main menu
          </button>
        </div>
      </div>
    </div>
  );
}

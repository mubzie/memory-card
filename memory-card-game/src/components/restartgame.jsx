/* eslint-disable react/prop-types */
import "../assets/styles/restartgame.css";

export default function Restart({ onRestart, onStart, score, level }) {
  const newScore = score;
  if (newScore === level) {
    console.log("let see");
  }
  return (
    <div className="overlay">
      {score === level ? (
        <div className="content">
          <div>You Won. Too Easy!</div>
          <div className="content-btns">
            <button className="content-btn restart-game" onClick={onRestart}>
              start new game
            </button>
            <button className="content-btn" onClick={onStart}>
              go back to main menu
            </button>
          </div>
        </div>
      ) : (
        <div className="content">
          <div>You lost this one</div>
          <div className="content-btns">
            <button className="content-btn restart-game" onClick={onRestart}>
              start new game
            </button>
            <button className="content-btn" onClick={onStart}>
              go back to main menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

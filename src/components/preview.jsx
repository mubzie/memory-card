/* eslint-disable react/prop-types */
import "../assets/styles/preview.css";

export default function Preview({ currentScore, highestScore }) {
  return (
    <>
      <div className="score-preview">
        <div className="display-text">current score: {currentScore}</div>
        <div className="display-text highscore">
          highest score: {highestScore}
        </div>
      </div>
    </>
  );
}

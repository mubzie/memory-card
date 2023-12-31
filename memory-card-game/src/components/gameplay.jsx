/* eslint-disable react/prop-types */
import "../assets/styles/gameplay.css";

export default function Gamescreen({ title, easy, medium, hard, show }) {
  return (
    <>
      {show && (
        <div className="intro-screen">
          <h1>
            The {title} tests memory retention by matching country flags, but be
            cautious, as clicking on the same flag twice will end the game.
          </h1>
          <div className="selection">
            <div className="selection-text">select difficulty</div>
            <div className="selection-btns">
              <button onClick={easy}>easy</button>
              <button onClick={medium}>medium</button>
              <button onClick={hard}>hard</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/main.css";

export default function Main() {
  const [currentScore, setCurrentScore] = useState(0);

  const handleClick = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <>
      <main>
        <div className="display-text">current score - {currentScore}</div>
        <div className="display-text">highest score - {currentScore}</div>
      </main>
      <button type="" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

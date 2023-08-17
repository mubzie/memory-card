/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../assets/styles/main.css";

export default function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [count, setCount] = useState(-2);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [count]);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [currentScore]);

  const handleClick = () => {
    setCurrentScore(currentScore + 1);
  };

  return (
    <>
      <main>
        <div className="display-text">current score: {currentScore}</div>
        <div className="display-text">highest score: {currentScore}</div>
      </main>
      <button type="" onClick={handleClick}>
        Click Me
      </button>
      <p>click amout: {count}</p>
      <p>uptime in secs: {counter}</p>
    </>
  );
}

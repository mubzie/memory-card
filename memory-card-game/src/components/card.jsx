/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/card.css";

export default function Card({
  flag,
  score,
  setScore,
  bestScore,
  setBestScore,
  round,
  setRound,
}) {
  const [selected, setSelected] = useState([]);

  const handleClick = (item) => {
    if (
      !selected.some((element) => {
        return element.id === item.id;
      })
    ) {
      setSelected([...selected], item);
      setScore(score + 1);
    }
    if (score.length === item.length) {
      setRound(round + 1);
    }
  };

  return (
    <div className="card-container">
      {flag.map((item) => {
        return (
          <div
            key={item.id}
            className="container-card"
            onClick={() => handleClick(item)}
          >
            <img src={item.flag} className="card-img"></img>
            <div className="container-card-name">
              <div className="card-name">
                {item.name} {selected}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

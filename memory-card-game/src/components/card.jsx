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
  const [selectedCard, setSelectedCard] = useState([]);
  
  const handleClick = (index) => {
    const findId = (element) => {
      return element.id === index.id;
    };

    if (!selectedCard.find(findId)) {
      setSelectedCard([...selectedCard], index);
      setScore(score + 1);
    }

    if (score === flag.length) {
      console.log(flag.length);
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
              <div className="card-name">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

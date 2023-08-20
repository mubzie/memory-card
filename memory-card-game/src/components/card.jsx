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

  const handleClick = (item) => {
    console.log(item.id);

    if (selectedCard) {
      console.log("selected");
      setSelectedCard([...selectedCard, item]);
      setScore(score + 1);
      setBestScore(bestScore + 1);
    }

    shuffleCard(flag);

    if (selectedCard.find((element) => element.id === item.id)) {
      console.log("i dey here before");
      // setSelectedCard([]);
      // setSelectedCard([...selectedCard, item]);
      setScore(1);
    }
  };

  const shuffleCard = (flag) => {
    console.log(flag);
    for (let i = flag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [flag[i], flag[j]] = [flag[j], flag[i]];
      console.log(flag);
    }
  };

  return (
    <div className="card-container">
      {flag.map((item) => {
        return (
          <div key={item.id} className="card" onClick={() => handleClick(item)}>
            <img className="card-img" src={item.flag}></img>
            <div className="container-card-name">
              <div className="card-name">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* eslint-disable react/prop-types */
// import { useState } from "react";
import "../assets/styles/card.css";

export default function Card({
  flag,
  score,
  setScore,
  bestScore,
  setBestScore,
  setGameOver,
  selectedCard,
  setSelectedCard,
}) {
  // const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (item) => {
    console.log(item.id);

    if (selectedCard) {
      console.log("selected");
      setSelectedCard([...selectedCard, item]);
      setScore(score + 1);
      setBestScore(bestScore + 1);
    }

    shuffleCard(flag);

    // Local storage
    localStorage.setItem("score", bestScore);

    const cardAlreadySelected = selectedCard.find(
      (element) => element.id === item.id
    );

    if (cardAlreadySelected) {
      console.log("already selected");
      setGameOver(true);

      const highestScore = JSON.parse(localStorage.getItem("score"));
      setBestScore(highestScore);

      setScore(1);
    }
  };

  const shuffleCard = (flag) => {
    for (let i = flag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [flag[i], flag[j]] = [flag[j], flag[i]];
    }
  };

  return (
    <div className="card-container">
      {flag.map((item) => {
        return (
          <div
            key={item.id}
            className="card"
            onClick={() => handleCardClick(item)}
          >
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

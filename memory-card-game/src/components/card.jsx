/* eslint-disable react/prop-types */
import "../assets/styles/card.css";

export default function Card({
  flag,
  score,
  setScore,
  highScore,
  setHighScore,
  setGameOver,
  selectedCard,
  setSelectedCard,
  level,
}) {
  const handleCardClick = (item) => {
    if (selectedCard) {
      setSelectedCard([...selectedCard, item]);
      setScore(score + 1);
    }

    shuffleCard();

    localStorage.setItem("score", highScore);

    const cardAlreadySelected = selectedCard.find(
      (element) => element.id === item.id
    );

    if (cardAlreadySelected) {
      setGameOver(true);

      const highestScore = JSON.parse(localStorage.getItem("score"));
      setHighScore(highestScore);

      setScore(1);
    }

    const updatedScore = score + 1;

    if (updatedScore === level) {
      setGameOver(true);
    }
  };

  const shuffleCard = () => {
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

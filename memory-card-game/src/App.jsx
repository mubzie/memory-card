import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Preview from "./components/preview";
import Card from "./components/card";
import Gamescreen from "./components/gameplay";
import Restart from "./components/restartgame";

function App() {
  const [title] = useState("Memory Card Game");
  const [level, setLevel] = useState(null);
  const [show, setShow] = useState(true);
  const [gameOn, setGameOn] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [flag, setFlag] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  const easyLevel = () => {
    setLevel(5);
    setGameOn(true);
    setShow(false);
  };

  const mediumLevel = () => {
    setLevel(10);
    setGameOn(true);
    setShow(false);
  };

  const hardLevel = () => {
    setLevel(15);
    setGameOn(true);
    setShow(false);
  };

  const handleRestart = () => {
    if (level === 5) {
      easyLevel();
    } else if (level === 10) {
      mediumLevel();
    } else {
      hardLevel();
    }

    setGameOver(false);
    setScore(0);
    setSelectedCard([]);
    shuffleCard();
  };

  const handleStart = () => {
    setLevel(null);
    setScore(0);
    setGameOver(false);
    setShow(true);
    setGameOn(false);
    setSelectedCard([]);
  };

  const shuffleCard = () => {
    for (let i = flag.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [flag[i], flag[j]] = [flag[j], flag[i]];
    }
  };

  useEffect(() => {
    const countryCount = [];

    const generateRandomNumber = (difficulty) => {
      for (let i = 0; i < difficulty; i++) {
        const randomCountries = Math.floor(Math.random() * 250);
        if (!countryCount.includes(randomCountries)) {
          console.log(randomCountries);
          countryCount.push(randomCountries);
        } else {
          countryCount.push(randomCountries + 1);
        }
      }
    };

    const fetchData = async () => {
      let countryArray = [];

      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();

      generateRandomNumber(level);

      countryCount.map((item) => {
        countryArray = [
          ...countryArray,
          {
            id: item,
            name: data[item]["name"]["common"],
            flag: data[item]["flags"]["png"],
          },
        ];
      });

      setFlag([...countryArray]);

      console.log(countryArray);
    };

    fetchData();
  }, [level]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  return (
    <>
      <Header title={title} />

      <Gamescreen
        title={title}
        easy={easyLevel}
        medium={mediumLevel}
        hard={hardLevel}
        show={show}
      />

      {gameOn && <Preview currentScore={score} highestScore={highScore} />}

      {gameOn && (
        <Card
          flag={flag}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          gameOver={gameOver}
          setGameOver={setGameOver}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      )}

      {gameOver && (
        <Restart
          score={score}
          level={level}
          onRestart={handleRestart}
          onStart={handleStart}
        />
      )}

      {/* <Restart score={score} level={level} /> */}
    </>
  );
}

export default App;

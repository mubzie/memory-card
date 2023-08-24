import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Preview from "./components/preview";
import Card from "./components/card";
import Gamescreen from "./components/gameplay";

function App() {
  const [title] = useState("Memory Card Game");
  const [level, setLevel] = useState(null);
  const [gameOn, setGameOn] = useState(false);
  const [show, setShow] = useState(true);
  const [flag, setFlag] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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

  return (
    <>
      <Header title={title} />

      {gameOn && <Preview currentScore={score} highestScore={bestScore} />}

      <Gamescreen
        title={title}
        easy={easyLevel}
        medium={mediumLevel}
        hard={hardLevel}
        show={show}
      />

      {gameOn && (
        <Card
          flag={flag}
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      )}
    </>
  );
}

export default App;

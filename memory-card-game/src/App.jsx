import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";

function App() {
  const [levelOne, setLevelOne] = useState(10);
  const [levelTwo, setLevelTwo] = useState(20);
  const [levelThree, setLevelThree] = useState(30);
  const [flag, setFlag] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
      // console.log(data);

      generateRandomNumber(levelOne);

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
  }, []);

  return (
    <>
      <Header title="Memory Card Game" />
      <Main></Main>
      <Card
        flag={flag}
        score={score}
        setScore={setScore}
        // setRound={setRound}
        // round={round}
      />
    </>
  );
}

export default App;

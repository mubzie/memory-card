import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";

function App() {
  const [round, setRound] = useState(1);
  const [flag, setFlag] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const countryArray = [];

    const generateRandom = (count) => {
      if (count < round * 8 + 1) {
        const randomCountries = Math.floor(Math.random() * 250);
        console.log(randomCountries);
        if (!countryArray.includes(randomCountries)) {
          countryArray.push(randomCountries);
          count++;
          generateRandom(count);
        } else {
          generateRandom(count);
        }
      }
    };

    const fetchData = async () => {
      let countryObj = [];

      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      console.log(data);

      generateRandom(1);

      countryArray.map((item) => {
        countryObj = [
          ...countryObj,
          {
            id: item,
            name: data[item]["name"]["common"],
            flag: data[item]["flags"]["png"],
          },
        ];
      });

      setFlag([...countryObj]);

      console.log(countryArray);
      console.log(countryObj);
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
        setRound={setRound}
        round={round}
      />
    </>
  );
}

export default App;

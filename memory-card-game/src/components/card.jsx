import { useState, useEffect } from "react";
import "../assets/styles/card.css";

export default function Card() {
  const [round, setRound] = useState(1);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    const dataInfo = [];

    const generateRandom = (count) => {
      if (count < round * 6 + 1) {
        const random = Math.floor(Math.random() * 250);
        console.log(random);
        if (!dataInfo.includes(random)) {
          dataInfo.push(random);
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

      dataInfo.map((item) => {
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

      console.log(dataInfo);
      console.log(countryObj);
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {flag.map((item) => {
        return (
          <div key={item.id} className="card">
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

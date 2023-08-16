import { useState, useEffect } from "react";

export default function Card() {
  const [count, setcount] = useState(1);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    const imgId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const generateRandom = (count) => {
    //   if (count < count * 1) {
    //     const random = Math.floor(Math.random() * 250);
    //     if (!imgId.includes(random)) {
    //       imgId.push(random);
    //       console.log(imgId)
    //       count++;
    //       generateRandom(count);
    //     } else {
    //       generateRandom(count);
    //     }
    //   }
    // };

    const fetchData = async () => {
      let newObj = [];

      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      console.log(data);

      imgId.map((item) => {
        console.log(item);
        newObj = [
          ...newObj,
          {
            id: item,
            name: data[item]["name"]["common"],
            flag: data[item]["flags"]["png"],
          },
        ];
      });

      setFlag([...newObj]);

      console.log(newObj);
    };

    fetchData();
  }, []);

  return (
    <div className="game-card">
      {flag.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <img src={item.flag}></img>
          </div>
        );
      })}
    </div>
  );
}

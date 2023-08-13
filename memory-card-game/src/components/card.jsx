import { useState, useEffect } from "react";

export default function Card() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
      const data = await response.json();
      console.log(data.results);

      setPokemon(data);

      const pokemonDatas = data.results.forEach((result) => {
        console.log(result);
        fetchPokemonData(result);
      });

      console.log(pokemonDatas);

      return data;
    };

    const fetchPokemonData = async (pokemons) => {
      const url = pokemons.url;
      const response = await fetch(url);
      const data = await response.json();

      setPokemonData(data);

      console.log(data);
    };

    fetchPokemon();
    fetchPokemonData();
  }, []);

  return (
    <div className="game-card">
      {/* {pokemonData.map((poke, index) => {
        // console.log(index)
        return (
          <div key={index}>
            <h3>{poke.name}</h3>
          </div>
        );
      })} */}
    </div>
  );
}

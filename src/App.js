import React, { useEffect, useState } from "react";
import "./styles.css";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const pokemons = mockPokemonsData;
      pokemons.map((poke, i) => {
        console.log("pokeYou: ", poke, i);
        setPokemons(poke, i);
        console.log("POKEMONS: ", pokemons);
      });
      setPokemons(pokemons);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {/**
        Render here the list of pokemons
      */}
      <PokeCards
      //pokemons={pokemons}
      />
    </div>
  );
}

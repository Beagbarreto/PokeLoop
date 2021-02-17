import React from "react";
import "./styles.css";
import PokeTable from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  const pokemons = mockPokemonsData;
  console.log("POKEEE", pokemons);
  return (
    <div className="App">
      <PokeTable pokemons={pokemons} />
    </div>
  );
}

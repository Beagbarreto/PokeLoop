import React from "react";
import "./styles.css";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

export default function App() {
  const pokemons = mockPokemonsData;
  console.log("POKEEEMONS", pokemons);
  return (
    <div className="App">
      <PokeCards pokemonList={mockPokemonsData} />
    </div>
  );
}

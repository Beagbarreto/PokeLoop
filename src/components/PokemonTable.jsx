import React from "react";
import PokeCards from "./PokeCards.jsx";

const PokemonTable = (props) => (
  <table>
    <tbody>
      {props.pokemons.map((poke, index) => {
        return <PokeCards poke={poke} key={index} />;
      })}
    </tbody>
  </table>
);

export default PokemonTable;

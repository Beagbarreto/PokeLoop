import React, { useState, useEffect } from "react";
import { mockPokemonsData } from "../mock/pokeData";

const PokeCards = () => {
  //const pokemon = mockPokemonsData;
  const [pokemons, setPokemons] = useState("");
  const [names, setNames] = useState("");
  const list = [];

  useEffect(() => {
    const fetchData = () => {
      const pokemons = mockPokemonsData;
      pokemons.map((poke, i) => {
        console.log("pokeBlue: ", poke, i);
        list.push([poke.name + ""]);
        setPokemons(list);
        setNames(poke.name);
        console.log("DETAILS", name.name);

        console.log("POKEDEMONS: ", pokemons);
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>POKECARDS</h1>
      {/* <h1>{pokemon[0]['name']}</h1> */}
      <h1>Pokemons! {pokemons}</h1>
      <h1>Name! {names}</h1>

      {/* <div>
          {pokemons.map(poke, i => (
              <Pokemon
                pokemon={poke}
                key={i}
              />
          ))}
        </div> */}

      {/* <div>
        <img src={mockPokemonData.sprites.front_default} />
        <img src={mockPokemonData.sprites.front_shiny} />
      </div>
      <a href={mockPokemonData.video}>video click here</a> */}
    </div>
  );
};
export default PokeCards;

const myUsers = [
  { name: "shark", likes: "ocean" },
  { name: "turtle", likes: "pond" },
  { name: "otter", likes: "fish biscuits" }
];

const usersByLikes = myUsers.map((item) => {
  const container = {};

  container[item.name] = item.likes;
  container.age = item.name.length * 10;

  return container;
});

console.log(usersByLikes);

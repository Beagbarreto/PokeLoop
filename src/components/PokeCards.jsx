import React, { useState } from "react";
import { render } from "react-dom";

const Pokemon = (props) => {
  return (
    <div>
      <h1>
        <a href={props.data.videoLink}>{props.data.name}</a>
      </h1>
      <div>
        <img src={props.data.sprites.back_default} />
        <img src={props.data.sprites.back_shiny} />
      </div>
    </div>
  );
};

const PokeCards = (props) => {
  const pokeList = props.pokemonList;

  const pokeElements = pokeList.map((poke, index) => (
    <Pokemon key={index} data={poke} />
  ));
  return <div>{pokeElements}</div>;
};

export default PokeCards;

//       <tr onClick={() => this.setState({ showShiny: !this.state.showShiny })}>

//         {/* {this.state.showShiny ? (
//           <td>{poke.sprites.front_default}</td>
//         ) : (
//           <td>{poke.sprites.back_shiny} </td>
//         )} */}
//       </tr>

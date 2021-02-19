import React, { useState } from "react";

const Pokemon = (props) => {
  return (
    <div>
      <h1>
        <a href={props.data.videoLink}>{props.data.name}</a>
      </h1>
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

// import React, { Component } from "react";

// class PokeCards extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showShiny: false
//     };
//   }

//   render() {
//     const poke = this.props.poke;
//     return (
//       <tr onClick={() => this.setState({ showShiny: !this.state.showShiny })}>
//         <td>
//           <h1>
//             <a href={poke.video}>{poke.name}</a>
//           </h1>
//         </td>
//         {/* {this.state.showShiny ? (
//           <td>{poke.sprites.front_default}</td>
//         ) : (
//           <td>{poke.sprites.back_shiny} </td>
//         )} */}
//       </tr>
//     );
//   }
// }
// export default PokeCards;

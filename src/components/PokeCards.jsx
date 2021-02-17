import React, { Component } from "react";

class PokeCards extends Component {
  constructor() {
    super();
    this.state = {
      showShiny: false
    };
  }

  render() {
    const poke = this.props.poke;
    return (
      <tr onClick={() => this.setState({ showShiny: !this.state.showShiny })}>
        <td>
          <h1>
            <a href={poke.video}>{poke.name}</a>
          </h1>
          <h1>{poke.name}</h1>
        </td>
        {this.state.showShiny ? (
          <td>{pokemon.sprites.front_default}</td>
        ) : (
          <td>{pokemon.sprites.back_shiny} </td>
        )}
      </tr>
    );
  }
}
export default PokeCards;

import React from "react";

const Pokemon = ({ pokemon }) => {
  console.log("ITEM: ", pokemon);

  return (
    <div>
      <span>
        <h1>{pokemon.name}</h1>
      </span>
      {/* <td>{data.precio}</td> */}
    </div>
  );
};

export default Pokemon;

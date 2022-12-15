import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

// interface ComponetNameProps {
//   property: string;
// }

export const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>("");

  const searchPokemon = () => {
    dispatch();
  };

  return (
    <React.Fragment>
      <Grid flexGrow={1}>
        <TextField type="text" value=" " onChange={(ev) => setPokemon(ev.target.value)} />
        <button type="submit" onClick={searchPokemon}>
          {" "}
          Pesquisar
        </button>
      </Grid>
    </React.Fragment>
  );
};
function dispatch() {
  throw new Error("Function not implemented.");
}

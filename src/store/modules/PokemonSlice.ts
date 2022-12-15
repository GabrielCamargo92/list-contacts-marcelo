import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiGet, apiPost } from "../../api";

const initialState = "";

export const pokemonGetAll = createAsyncThunk("pokemon/getAll", async () => {
  const { data } = await apiGet("/pokemon");

  if (data.success === "OK") {
    const { pokemon } = data.data;
    return pokemon;
  }

  return false;
});

export const pokemonAdd = createAsyncThunk(
    "pokemon/addOne",
    async (pokemon { }) => {
      const { data } = await apiPost("/pokemon", pokemon);
  
      if (data.success === "OK") {
        dispatch(pokemonGetAll());
      }
  
      return true;
    }
  );

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    create(state, action: PayloadAction) {
        const getPoke = (item) => pokemonSlice.name === action.payload
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}


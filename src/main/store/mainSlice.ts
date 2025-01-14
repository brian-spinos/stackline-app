import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataResult, SeachState } from "./storeInterfaces";

import jsonData from "./data.json";

let initialState: SeachState = {
  results: [],
  searchData: [],
  value: 0,
};

// ===================== Async thunks

export const fetchData = createAsyncThunk<DataResult[]>(
  "main/getByQuery",
  async (): Promise<DataResult[]> => {
    // Simulate API delay
    const API_DELAY = 300;
    await new Promise((resolve) => setTimeout(resolve, API_DELAY));

    return [{ data: jsonData }];
  }
);

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        //
        return state;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        //
        return state;
      });
  },
});

export const { increment, decrement, setValue } = exampleSlice.actions;
export default exampleSlice.reducer;

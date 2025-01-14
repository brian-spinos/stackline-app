import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DataResult, SeachState } from "./storeInterfaces";

import jsonData from "./data.json";

let initialState: SeachState = {
  value: 0,
  query: "",
  results: [],
  searchData: [],
  isLoading: false,
  error: "",
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
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload;
        state.error = "";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "ERROR";
      });
  },
});

export const { increment, decrement, setValue } = exampleSlice.actions;
export default exampleSlice.reducer;

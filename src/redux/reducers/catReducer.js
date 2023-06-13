import { createReducer } from "@reduxjs/toolkit";
import { getCatFactsThunk } from "../thunks";

const initialState = {
  isLoading: false,
};

const catReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCatFactsThunk.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getCatFactsThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      facts: action.payload,
    }))
    .addCase(getCatFactsThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
);

export default catReducer;

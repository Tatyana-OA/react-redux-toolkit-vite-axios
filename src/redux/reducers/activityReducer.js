import { createReducer } from "@reduxjs/toolkit";
import { getActivitiesThunk } from "../thunks";

const initialState = {
  isLoading: false,
};

const activityReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getActivitiesThunk.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getActivitiesThunk.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      activities: action.payload,
    }))
    .addCase(getActivitiesThunk.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
);

export default activityReducer;

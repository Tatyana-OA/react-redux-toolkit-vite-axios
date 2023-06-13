import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { PREFIX } from "./config";
import { RandomActivitiesURL } from "../../../api/requestsURLS";

export const getActivitiesThunk = createAsyncThunk(
  `${PREFIX} Get Random`,
  // _ signifies empty payload
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(RandomActivitiesURL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

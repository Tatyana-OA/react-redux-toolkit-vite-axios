import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { PREFIX } from "./config";
import { CatInfoURL } from "../../../api/requestsURLS";

export const getCatFactsThunk = createAsyncThunk(
  `${PREFIX} Get Random`,
  // _ signifies empty payload
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(CatInfoURL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

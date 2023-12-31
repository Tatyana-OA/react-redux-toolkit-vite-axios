import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducers/rootReducer";

// configure store
const store = configureStore({
  reducer: rootReducer,
});

export default store;

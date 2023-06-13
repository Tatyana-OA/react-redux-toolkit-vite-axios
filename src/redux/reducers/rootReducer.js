import { combineReducers } from "@reduxjs/toolkit";
import activityReducer from "./activityReducer";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
  cats: catReducer,
  activity: activityReducer,
});

export default rootReducer;

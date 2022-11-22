import { configureStore, combineReducers } from "@reduxjs/toolkit";
import linksReducer from "./links";

const reducer = combineReducers({
  links: linksReducer,
});

export const store = configureStore({ reducer });

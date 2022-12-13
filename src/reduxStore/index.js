import { configureStore, combineReducers } from "@reduxjs/toolkit";
import linksReducer from "./links";
import userReducer from "./user";

const reducer = combineReducers({
  links: linksReducer,
  user: userReducer,
});

export const store = configureStore({ reducer });

store.subscribe(() => console.log("STORE", store.getState()));

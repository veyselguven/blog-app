/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { createStore, combineReducers } from "redux";
import blogReducer from "../reducers/blogs";
import authReducer from "../reducers/auth";

export default () => {
  const store = createStore(
    combineReducers({
      blogs: blogReducer,
      auth: authReducer,
    })
  );
  return store;
};

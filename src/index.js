/* eslint-disable default-case */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// action creater

const addBlog = ({ title = "", description = "", dateAdded = 0 }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded,
  },
});

const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id: id,
});

const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});

const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      console.log("addblogaction", action); //{type: 'ADD_BLOG', blog: {…}}
      console.log("addblogactiontype", action.blog); //{title: 'blog title 1', description: 'blog description 1', dateAdded: 0, id: ƒ}
      return [...state, action.blog];
    case "REMOVE_BLOG":
      console.log("remove", action);
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_BLOG":
      return state.map((blog) => {
        if (blog.id === action.id) {
          return {
            ...blog,
            ...action.updates,
          };
        } else {
          return blog;
        }
      });
    default:
      return state;
  }
};

const authState = {};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({ title: "blog title 1", description: "blog description 1" })
);
const blog2 = store.dispatch(
  addBlog({
    title: "blog title 2",
    description: "blog description 2",
    dateAdded: Date.now(),
  })
);
//console.log("blog1", blog1); //{type: 'ADD_BLOG', blog: {…}}
//console.log("blog1.blog", blog1.blog); // {title: 'blog title 1', description: 'blog description 1,id:124}

store.dispatch(removeBlog({ id: blog1.blog.id }));

// birinci parametrede state uzerinden hangi parametre ile guncellicez onu bildiriyoruz
// ikincisinde ise yeni gondercegimiz bilgileri burda yazabiliriz.
store.dispatch(
  editBlog(blog2.blog.id, {
    title: "updated blog  title",
    description: "update blog description",
  })
);

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* eslint-disable default-case */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./App.css";

import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";

import configureStore from "./store/configureStore";

import { addBlog, removeBlog, editBlog } from "./actions/blogs";
import "./firebase/fairbaseConfig";

const store = configureStore();

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
store.dispatch(
  addBlog({
    title: "blog title 3",
    description: "blog description 3",
    dateAdded: Date.now(),
  })
);
store.dispatch(
  addBlog({
    title: "blog title 4",
    description: "blog description 4",
    dateAdded: Date.now(),
  })
);
store.dispatch(
  addBlog({
    title: "blog title 5",
    description: "blog description 5",
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

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

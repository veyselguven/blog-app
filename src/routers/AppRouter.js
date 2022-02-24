import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import Header from "../components/Header";
import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import AddBlogPage from "../components/AddBlogPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogs" component={BlogListPage} />
          <Route path="/create" component={AddBlogPage} />
          <Route path="/blogs/:id" component={BlogDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;

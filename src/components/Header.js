import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Blog App</h1>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/blogs" activeClassName="active">
        Blogs
      </NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink activeClassName="active" className="link" to="/">Home</NavLink>
        <NavLink activeClassName="active" className="link" to="/anime">Anime</NavLink>
        <NavLink activeClassName="active" className="link" to="/episodes">Episodes</NavLink>
        <NavLink activeClassName="active" className="link" to="/categories">Categories</NavLink>
      </div>
    </>
  );
};

export default Navbar
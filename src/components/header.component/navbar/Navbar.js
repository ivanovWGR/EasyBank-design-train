import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Button from "../../button/button.component";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <Link className="navbar-brand" to="/">
        <img alt="website logo" src={logo}></img>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/careers">
              Careers
            </Link>
          </li>
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;

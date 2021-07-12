import React from "react";
import "./footer.component.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import youtube from "../../assets/icon-youtube.svg";
import instagram from "../../assets/icon-instagram.svg";
import logo from "../../assets/logo.svg";
import Button from "../button/button.component";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center text-lg-start footer">
      <div className="container">
        <div className="row">
          <div className="logo-icons">
            <div className="logo">
              <Link className="navbar-brand" to="/">
                <img alt="website logo" src={logo}></img>
              </Link>
            </div>
            <a
              className="btn btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
            >
              <img src={facebook} alt="facebook logo"></img>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
            >
              <img src={youtube} alt="youtube logo"></img>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
            >
              <img src={twitter} alt="twitter logo"></img>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
            >
              <img src={pinterest} alt="pintereest logo"></img>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
            >
              <img src={instagram} alt="instagram logo"></img>
            </a>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 links-text">
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white link-footer">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white link-footer">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white link-footer">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/career" className="text-white link-footer">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white link-footer">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white link-footer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 btn-cont">
            <Button />
            <p className="rights-text">© Easybank.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

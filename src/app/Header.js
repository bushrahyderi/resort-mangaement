import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
          <div className="container">
            <img src="../images/logo.png" alt="logo" width="7%" />
            <a className="navbar-brand" href="index.html">
              The Golden Escape{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar-light"
              id="navbarsExample05"
            >
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/about"> About</Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/rooms"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Stays
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <Link className="dropdown-item" to="/rooms">Presidential Stay</Link><br/>
                  <Link className="dropdown-item" to="/beach">Beach Villa</Link><br/>
                  <Link className="dropdown-item" to="/nature">Nature Villa</Link><br/>
                  </div>
                </li>
                <li className="nav-item">

                  <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/blog">Services</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/contact"> Contact</Link>
                 
                </li>
                <li className="nav-item cta">
                <Link className="nav-link" to="/booknow"> <span>Book Now</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

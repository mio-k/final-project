import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top " color-on-scroll="300">
        <div className="container">
          <div className="navbar-translate">
            <a
              className="navbar-brand"
              href="/"
              rel="tooltip"
              title="Dog Pod Portal"
              data-placement="bottom"
            >
              Home
            </a>
            <button
              className="navbar-toggler navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/userlist" className="nav-link">
                  <i className="nc-icon nc-layout-11"></i> Members
                </a>
              </li>
              <li className="nav-item">
                <a href="/doglist" className="nav-link">
                  <i className="nc-icon nc-layout-11"></i> Our Dogs
                </a>
              </li>
              <li className="nav-item">
                <a href="/itemlist" className="nav-link">
                  <i className="nc-icon nc-book-bookmark"></i> Free Items
                </a>
              </li>
              <li className="nav-item">
                <a href="/newitemform" className="nav-link">
                  <i className="nc-icon nc-book-bookmark"></i> Offer Free Item
                </a>
              </li>
              <button
                variant="outline"
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
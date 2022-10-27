import React from "react";
import { Link } from "react-router-dom";

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
            <Link
              className="navbar-brand"
              to="/"
              rel="tooltip"
              title="Dog Pod Portal"
              data-placement="bottom"
            >
              Home
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/doglist" className="nav-link">
                  <i className="nc-icon nc-alert-circle-i"></i> Members
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/itemlist" className="nav-link">
                  <i className="nc-icon nc-diamond"></i> Free Stuff
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/playdates" className="nav-link">
                  <i className="nc-icon nc-favourite-28"></i> Playdates
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/yourprofile" className="nav-link">
                  <i className="nc-icon nc-circle-10"></i> Your Profile
                </Link>
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

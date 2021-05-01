import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Button } from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            quinn ha.
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                earth
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="astronaut"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                astronaut
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/missions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                missions
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

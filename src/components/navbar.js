import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTruckMonster,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            EPC
            <FontAwesomeIcon icon={faTruckMonster} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/zero" className="nav-links" onClick={closeMobileMenu}>
                Year 0
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/one" className="nav-links" onClick={closeMobileMenu}>
                Year 1
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/two" className="nav-links" onClick={closeMobileMenu}>
                Year 2
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/three" className="nav-links" onClick={closeMobileMenu}>
                Year 3
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/four" className="nav-links" onClick={closeMobileMenu}>
                Year 4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

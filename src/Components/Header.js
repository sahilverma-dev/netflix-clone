// importing react hooks
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// impotring style
import "./Style/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);
  return (
    <div className={`header ${scrolled ? `sticky` : ``}`}>
      <div className="container">
        <div className="nav">
          <NavLink to="/">
            <div className="logo">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt=""
              />
            </div>
          </NavLink>

          <div className="nav-list">
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
            <NavLink to="/movie" className="nav-item">
              Movies
            </NavLink>
            <NavLink to="/" className="nav-item">
              Series
            </NavLink>
            <NavLink to="/" className="nav-item">
              Dramas
            </NavLink>
            <NavLink to="/" className="nav-item">
              My List
            </NavLink>
          </div>
          <div className="nav-icons">
            <div className="login">
              <button className="netflix-btn login-b">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

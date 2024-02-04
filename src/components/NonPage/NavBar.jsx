import React from "react";
import "./Nav.css";
import JuniorLogo from "../../Images/JuniorCaucusLogo.svg";
import { useState, useEffect, useCallback } from "react";
import Banner from "./Banner";

function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && menuOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [menuOpen, toggleMenu]);

  return (
    <div className="head-nav">
      <Banner />
      <div className="nav-container">
        <div className="juni-logo-container">
          <a href="/">
            <img
              src={JuniorLogo}
              alt="Logo"
              className="junior-logo nav-menu-item"
            />
          </a>
        </div>
        <div className="menu">
          <a href="/" className={currPageGet(props.page, "Home")}>
            {getText(props.page, "Home")}
          </a>
          <a href="/people" className={currPageGet(props.page, "People")}>
            {getText(props.page, "People")}
          </a>
          <a href="/events" className={currPageGet(props.page, "Events")}>
            {getText(props.page, "Events")}
          </a>
          <a href="/resources" className={currPageGet(props.page, "Resources")}>
            {getText(props.page, "Resources")}
          </a>
          <a href="/Socials" className={currPageGet(props.page, "Socials")}>
            {getText(props.page, "Socials")}
          </a>
        </div>

        <div className={`nav-menu-item mobile-dropdown`}>
          <div className="dropbtn" onClick={toggleMenu}>
            <span className="decorative">b</span> Menu{" "}
            <span className="decorative">a</span>
          </div>
          <div className={`dropdown-content ${menuOpen ? "show" : ""}`}>
            <a href="/" className={currPageGet(props.page, "Home")}>
              {getText(props.page, "Home")}
            </a>
            <a href="/people" className={currPageGet(props.page, "People")}>
              {getText(props.page, "People")}
            </a>
            <a href="/events" className={currPageGet(props.page, "Events")}>
              {getText(props.page, "Events")}
            </a>
            <a
              href="/resources"
              className={currPageGet(props.page, "Resources")}
            >
              {getText(props.page, "Resources")}
            </a>
            <a href="/Socials" className={currPageGet(props.page, "Socials")}>
              {getText(props.page, "Socials")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const currPageGet = (page, currPage) => {
  return currPage === page ? "nav-menu-item current-page" : "nav-menu-item";
};

const getText = (page, currPage) => {
  return currPage === page ? (
    <>
      <span className="decorative">b</span> {currPage}{" "}
      <span className="decorative">a</span>
    </>
  ) : (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{currPage}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
};

export default NavBar;

import React from "react";
import {
  FcHome,
  FcOpenedFolder,
  FcBusinesswoman,
  FcAddressBook,
  FcBriefcase,
  FcEngineering,
  FcGraduationCap,
} from "react-icons/fc";
import { RiLightbulbFlashLine, RiLightbulbLine } from "react-icons/ri";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

// #7132b3 (dark) #ddccef (light)

function navbar(props) {
  return (
    <>
      <nav className="navbar flex-center">
        <div className="navbar_logo">
          <a href="#">MEEEE!</a>
        </div>
        <div className="navbar_link-container">
          <ul className="links">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="work">Work</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <button className="app__theme-btn" onClick={props.changeTheme}>
            {props.currentTheme === "dark" ? (
              <RiLightbulbLine />
            ) : (
              <RiLightbulbFlashLine />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
export default navbar;

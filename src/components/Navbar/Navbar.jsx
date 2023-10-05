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
import { Images } from "../../constants";
import { NavLink } from "react-router-dom";

// #7132b3 (dark) #ddccef (light)

function navbar(props) {
  return (
    <>
      <nav className="navbar flex-center">
        <div className="navbar_logo">
          <a href="#">
            <img src={Images.logo_new} width={48} height={48} />
          </a>
        </div>
        <div className="navbar_link-container">
          <ul className="links">
            <li>
              <a href="about">
                <FcBusinesswoman />
              </a>
            </li>
            <li>
              <a href="skills">
                <FcEngineering />
              </a>
            </li>
            <li>
              <a href="work">
                <FcBriefcase />
              </a>
            </li>
            <li>
              <a href="contact">
                <FcAddressBook />
              </a>
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

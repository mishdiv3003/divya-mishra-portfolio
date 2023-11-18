import React, { useState } from "react";
import { Images } from "../../constants";
import { FaBars } from "react-icons/fa";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Navbar.scss";

const Navbar = (props) => {

  const { menuOptionsList, changeTheme, currentTheme } = props;
  const [showHideMenu, setShowHideMenu] = useState(false);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSelection = (menuOption) => {
    handleClick(menuOption);
    setShowHideMenu(false);
  };

  const handleThemeSelectionInMenu = () => {
    changeTheme();
    setShowHideMenu(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <a href="/#about">
            <img
              alt="user initials as logo"
              src={Images.logo_new}
              width={54}
              height={54}
            />
          </a>
        </div>
        <div className="navbar_link-container">
          <ul className="links">
            {menuOptionsList.map((navObj) => {
              return (
                <li key={Math.random()}>
                  <a
                    href={navObj.routeName}
                    onClick={() => handleClick(navObj.section)}
                  >
                    {navObj.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeSwitch
            themeId={"theme_btn"}
            changeTheme={changeTheme}
            currentTheme={currentTheme}
          />
        </div>

        <div
          id="toggleBtn"
          className="toggle_btn"
          onClick={() => setShowHideMenu(!showHideMenu)}
        >
          <FaBars />
        </div>
        {showHideMenu && (
          <div className="dropdown_menu open">
            <div>
              {menuOptionsList.map((navObj) => {
                return (
                  <li key={Math.random()}>
                    <a
                      href={navObj.routeName}
                      onClick={() => handleSelection(navObj.section)}
                    >
                      {navObj.icon} <span>{navObj.menuOptionName}</span>
                    </a>
                  </li>
                );
              })}
            </div>
            <div className="theme-in-menu">
              <ThemeSwitch
                themeId={"theme_btn_menu"}
                changeTheme={handleThemeSelectionInMenu}
                currentTheme={currentTheme}
              />

              <p
                onClick={handleThemeSelectionInMenu}
              >
                Change Theme
              </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;

import React from "react";
import "./ThemeSwitch.scss";
import { RiLightbulbFlashLine, RiLightbulbLine } from "react-icons/ri";

const ThemeSwitch = (props) => {
  const {changeTheme, themeId, currentTheme} = props
  return (
    <>
      <button
        id={themeId}
        className="app__theme-btn"
        onClick={changeTheme}
      >
        {currentTheme === "dark" ? (
          <RiLightbulbLine />
        ) : (
          <RiLightbulbFlashLine />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;

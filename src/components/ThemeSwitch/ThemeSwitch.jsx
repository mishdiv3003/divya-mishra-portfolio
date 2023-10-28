import React from "react";
import "./ThemeSwitch.scss";
import { RiLightbulbFlashLine, RiLightbulbLine } from "react-icons/ri";

const ThemeSwitch = (props) => {
  return (
    <>
      <button
        id={props.themeId}
        className="app__theme-btn"
        onClick={props.changeTheme}
      >
        {props.currentTheme === "dark" ? (
          <RiLightbulbLine />
        ) : (
          <RiLightbulbFlashLine />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;

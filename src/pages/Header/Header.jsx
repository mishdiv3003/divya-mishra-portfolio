import React, { useRef, useEffect } from "react";
import {
  FcBusinesswoman,
  FcAddressBook,
  FcBriefcase,
  FcEngineering,
} from "react-icons/fc";
import Navbar from "../../components/Navbar/Navbar";

const Header = (props) => {
  const navMenuOptions = [
    {
      menuOptionName: "About Me",
      icon: <FcBusinesswoman />,
      routeName: "/#about",
      section: "about",
    },
    {
      menuOptionName: "Skills",
      icon: <FcEngineering />,
      routeName: "/#skills",
      section: "skills",
    },
    {
      menuOptionName: "Work",
      icon: <FcBriefcase />,
      routeName: "/#work",
      section: "work",
    },
    {
      menuOptionName: "Contact Me",
      icon: <FcAddressBook />,
      routeName: "/#contact",
      section: "contact",
    },
  ];
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      menuOptionsList={navMenuOptions}
      changeTheme={props.changeTheme}
      currentTheme={props.currentTheme}
    />
  );
};

export default Header;

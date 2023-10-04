import "./App.css";
import useLocalStorage from "use-local-storage";
// import Header from "./components/Header/Header";
import { FaHeart } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";
import { ThemeSwitch, AboutCard } from "./components";
// #7132b3 (dark) #ddccef (light)

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Navbar changeTheme={switchTheme} currentTheme={theme} />
      <AboutCard />
    </div>
  );
}

export default App;

// import React from "react";
// import { About, Footer, Work, Experience, Skills, Header } from "./pages";
// import { Navbar } from "./components";
// const App = () => {
//   return (
//     <div className="app">
//       {/* <Navbar /> */}

//       {/* <Header />
//       <About />
//       <Work />
//       <Skills /> */}
//     </div>
//   );
// };

// export default App;

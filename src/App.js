import "./App.css";
import useLocalStorage from "use-local-storage";
// import { FaHeart } from "react-icons/fa";
import { Skills, Experience, Footer, About, Header } from "./pages";

const App = () => {
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
    <div className="container-fluid App" data-theme={theme}>
      <Header changeTheme={switchTheme} currentTheme={theme} />
      <div>
        <About />
        <Skills />
        <Experience />
        {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;

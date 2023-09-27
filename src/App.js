import "./App.css";
import useLocalStorage from "use-local-storage";

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
      <header className="App-header">
        {/* maybe add a box here */}
        <p>Hi There! I am just starting a new project </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={switchTheme}>
         Change to {theme === "light"? "dark": "light"} theme
        </button>
      </header>
    </div>
  );
}

export default App;

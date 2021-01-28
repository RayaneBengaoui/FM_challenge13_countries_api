import { useState } from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Route path={["/country/:id", "/"]}>
            <Home themeToggler={themeToggler} theme={theme} />
          </Route>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

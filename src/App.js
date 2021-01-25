//Global Style
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/country/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Switch } from "react-router-dom";
import RecipePage from "./components/RecipePage/RecipePage";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/recipe-page">
          <RecipePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import "./App.css";
import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import RecipePage from "./components/RecipePage/RecipePage";
import Main from "./components/Main";

const RecipePage=lazy(() => import("./components/RecipePage/RecipePage"));

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

import "./App.css";
import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
// import RecipePage from "./components/RecipePage/RecipePage";
import Main from "./components/Main";
import SocialLinksProfile from "./components/SocialLinksProfile/SocialLinksProfile";

const RecipePage=lazy(() => import("./components/RecipePage/RecipePage"));

function App() {
  return (
    <>
      <Switch>
        <Suspense fallback={<p>loading... Please wait</p>}>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/recipe-page">
          <RecipePage />
        </Route>
        <Route path="/social-links-profile">
          <SocialLinksProfile />
        </Route>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;

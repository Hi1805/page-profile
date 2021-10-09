import React from "react";
import logo from "./logo.svg";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { useIsMobile } from "hooks";

const history = createBrowserHistory();
const HomeScreen = React.lazy(() => import("pages/Homescreen"));

function App() {
  const render = () => {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    );
  };
  return (
    <div className="App">
      <React.Suspense fallback={null}>
        <Router history={history}>{render()}</Router>
      </React.Suspense>
    </div>
  );
}

export default App;

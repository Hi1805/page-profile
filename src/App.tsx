import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import { HomeScreen } from "./pages";

const history = createBrowserHistory();

function App() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    const handleResize = () => {
      const isMobileCurrent = window.innerWidth <= 768;
      if (isMobileCurrent !== isMobile) {
        setIsMobile(isMobileCurrent);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  console.log(isMobile);

  return (
    <div className="App">
      <Router history={history}>
        {!isMobile ? (
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
            </Switch>
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;

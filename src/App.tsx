import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

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

  return (
    <div className="App">
      <Router history={history}></Router>
    </div>
  );
}

export default App;

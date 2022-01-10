import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Button } from "@material-ui/core";

import { Home } from "./pages/public/home";

export const App = () => {
  const throwError = () => {
    throw new Error("Error thrown");
  };
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Button onClick={throwError}>Method does not exists</Button>
    </Router>
  );
};

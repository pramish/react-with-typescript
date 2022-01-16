import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/public/home";

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

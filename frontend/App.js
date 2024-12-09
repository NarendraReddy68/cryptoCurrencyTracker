import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Auth} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

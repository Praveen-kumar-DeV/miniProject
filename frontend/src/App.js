import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/profile" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;

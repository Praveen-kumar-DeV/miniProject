import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Section1 from "./containers/section1";
import "./App.css";
import Navbar from "./components/Navbar";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  handleAuth = () => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <Navbar />
        <Section1 />
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <PrivateRoute path="/profile" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

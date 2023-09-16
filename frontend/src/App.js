import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <Login />;
  }
}

export default App;

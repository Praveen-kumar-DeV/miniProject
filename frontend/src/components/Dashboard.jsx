import React, { Component } from "react";
import Logout from "./Logout";
import Navbar from "./Navbar/Navbar";
class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div>
        Dashboard !
        <Navbar />
        <Logout />
      </div>
    );
  }
}

export default Dashboard;

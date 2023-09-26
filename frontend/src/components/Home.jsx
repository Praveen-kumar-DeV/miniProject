import React, { Component } from "react";
import { Button } from "@mui/material";
import Section1 from "../containers/section1";
class Home extends Component {
  state = {};

  handleNavigation = (choice) => {
    if (choice == "Login") {
      this.props.history.push("/login");
    }
    if (choice == "Register") {
      this.props.history.push("/register");
    }
  };
  render() {
    return (
      <div>
        <center>
          <h1>Home</h1>
          <Button
            variant="outlined"
            onClick={() => this.handleNavigation("Login")}>
            Login
          </Button>
          <p></p>
          <Button
            variant="outlined"
            onClick={() => this.handleNavigation("Register")}>
            Register
          </Button>
        </center>
        <Section1 />
      </div>
    );
  }
}

export default Home;

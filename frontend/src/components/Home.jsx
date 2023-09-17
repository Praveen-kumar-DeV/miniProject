import React, { Component } from "react";
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
          <button
            className="ui primary button"
            onClick={() => this.handleNavigation("Login")}>
            <p>Login</p>
          </button>
          <button
            className="ui primary button"
            onClick={() => this.handleNavigation("Register")}>
            <p>Register</p>
          </button>
        </center>
      </div>
    );
  }
}

export default Home;

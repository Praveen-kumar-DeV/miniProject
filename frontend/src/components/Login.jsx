import React, { Component } from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqY2k6c_f6HAUBzC9IvViWoDMLoAcjaSo",
  authDomain: "praveenkumarpatini-ac74d.firebaseapp.com",
  projectId: "praveenkumarpatini-ac74d",
  storageBucket: "praveenkumarpatini-ac74d.appspot.com",
  messagingSenderId: "629125667796",
  appId: "1:629125667796:web:65d89685bfbdc01ea6d441",
};
const app = initializeApp(firebaseConfig);

class Login extends Component {
  state = { email: "", password: "" };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handleSuccessfulLogin = (response) => {
    toast.success("Account Logged In", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    console.log(response.user);
    let temp = response.user;
    localStorage.setItem("user_data", JSON.stringify(temp));
    this.props.history.push("/profile");
  };
  handleLogin = () => {
    let eid = this.state.email;
    var psd = this.state.password;

    if (eid.length < 5 || psd.length < 8) {
      toast.error("Incorrect Email ID / Password", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, eid, psd)
        .then((response) => this.handleSuccessfulLogin(response))
        .catch((error) => {
          console.log("Error IS ====>", error);
          toast.warn("Incorrect Credentials", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    }
  };
  handleGoogleRegister = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((response) => this.handleSuccessfulLogin(response))
      .catch((error) => {
        console.log("Error IS ====>", error);
      });
  };
  render() {
    return (
      <div className="ui segment">
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Username</label>
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="email"
                      value={this.state.email}
                      onChange={(e) => this.handleEmail(e)}
                    />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={(e) => this.handlePassword(e)}
                    />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <div
                  className="ui blue submit button"
                  onClick={() => this.handleLogin()}>
                  Login
                </div>
              </div>
            </div>
            <div className="middle aligned column">
              <div
                className="ui big button"
                onClick={() => this.handleGoogleRegister()}>
                <i className="signup icon"></i>
                Sign In With Google
              </div>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}

export default Login;

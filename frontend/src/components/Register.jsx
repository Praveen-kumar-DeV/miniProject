import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
class Register extends Component {
  state = { email: "", password: "" };

  navigateTo = (val) => {
    //this.props.history.push(val);
    if (val == "login") {
      this.props.history.push("/login");
    }
    if (val == "register") {
      this.props.history.push("/register");
    }
  };
  handleEmail = (x) => {
    //console.log(x.target.value.length)
    this.setState({ email: x.target.value });
  };
  handlePassword = (x) => {
    //console.log(x.target.value.length)
    this.setState({ password: x.target.value });
  };
  handleSuccessfulRegistration = (response) => {
    toast.success("Account Created", {
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
  handleRegister = () => {
    let eid = this.state.email;
    var psd = this.state.password;

    if (eid.length < 5 || psd.length < 8) {
      toast.error("Invalid Email ID / Password", {
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
      createUserWithEmailAndPassword(auth, eid, psd)
        .then((response) => this.handleSuccessfulRegistration(response))
        .catch((error) => {
          console.log("Error IS ====>", error);
          toast.warn("Registration Failed", {
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
      .then((x) => this.handleSuccessfulRegistration(x))
      .catch((error) => {
        console.log("Error IS ====>", error);
      });
  };

  render() {
    return (
      <div>
        {/* <center>
            <h1>Register</h1>
            <input
              type="text"
              value={this.state.email}
              onChange={(x) => this.handleEmail(x)}
              placeholder="Email ID"
              className="enterEmail"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={(x) => this.handlePassword(x)}
              placeholder="Password"
              className="enterEmail"
            />
            <br />
            <button className="sendMail" onClick={() => this.handleRegister()}>
              <p>Register</p>
            </button>
            <br />
            <button
              className="googleLogin"
              onClick={() => this.handleGoogleRegister()}>
              <p>Sign Up with Google</p>
            </button>
          </center> */}
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
                    onClick={() => this.handleRegister()}>
                    Register
                  </div>
                </div>
              </div>
              <div className="middle aligned column">
                <div
                  className="ui big button"
                  onClick={() => this.handleGoogleRegister()}>
                  <i className="signup icon"></i>
                  Sign Up With Google
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
      </div>
    );
  }
}

export default Register;

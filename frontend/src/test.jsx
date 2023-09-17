import React from "react";
import { withRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const firebaseConfig = {
  //WRITE YOUR OWN FIREBASE PROJECT CONFIGURATION
};

const app = initializeApp(firebaseConfig);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  navigateTo = (choice) => {
    if (choice == "login") {
      this.props.history.push("/login");
    }
    if (choice == "register") {
      this.props.history.push("/register");
    }
  };
  handleEmail = (x) => {
    this.setState({ email: x.target.value });
  };
  handlePassword = (x) => {
    this.setState({ password: x.target.value });
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
  componentDidMount() {}
  render() {
    return (
      <div>
        <center>
          <h1>Login</h1>
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
          <button className="sendMail" onClick={() => this.handleLogin()}>
            <p>Login</p>
          </button>
          <br />
          <button
            className="googleLogin"
            onClick={() => this.handleGoogleRegister()}>
            <p>Sign In with Google</p>
          </button>
        </center>
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
export default withRouter(Login);

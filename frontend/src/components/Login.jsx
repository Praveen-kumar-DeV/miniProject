import React, { Component } from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import { Container, IconButton, Stack, Typography, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import TextField from "@mui/material/TextField";

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
    localStorage.setItem("isLogin", true);
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
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "block",
            alignItems: "center",
            top: "100px",
            position: "relative",
            margin: "0 25%",
            borderRadius: "4px",
            boxShadow: "0 0 50px 15px #48abe0",
            padding: "10px",
          }}
          noValidate
          autoComplete="off">
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}>
            <TextField
              required
              id="outlined-required"
              label="Username"
              type="text"
              value={this.state.email}
              onChange={(e) => this.handleEmail(e)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={(e) => this.handlePassword(e)}
            />
            <Button
              size="large"
              variant="outlined"
              sx={{ height: "223.75 px", width: "56.14 px", color: "red" }}
              onClick={() => this.handleLogin()}>
              Login
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={() => this.handleGoogleRegister()}>
              <GoogleIcon />
              Sign In With Google
            </Button>
          </Stack>
        </Box>
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

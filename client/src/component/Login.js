import { Typography } from "@mui/material";
import React, { useState } from "react";
import photo from "../assets/App-Login_photo.png";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  function handleSubmit() {
    console.log(loginData);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <img src={photo} alt="Not found" height={500} />
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "white",
            padding: "8%",
            overflowY: "auto",
            height: "280px",
            width: "300px",
          }}
        >
          Sign in to Soluxy
          <br />
          <br />
          <InputLabel shrink>
            <b>Email:</b>
          </InputLabel>
          <TextField
            id="email"
            name="Email"
            value={loginData.Email || ""}
            onChange={handleChange}
            label="Your Email"
            variant="outlined"
            sx={{ width: 280 }}
          />
          <br />
          <br />
          <InputLabel shrink>
            <b>Password:</b>
          </InputLabel>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              sx={{ width: 280 }}
              id="password"
              name="Password"
              value={loginData.Password || ""}
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 3, maxWidth: "100%" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "15px", marginTop: "30px" }}>
              New to Soluxy?
            </p>
            &nbsp;
            <NavLink
              to="/registration"
              style={{ fontSize: "15px", marginTop: "30px" }}
            >
              Sign up Here
            </NavLink>
          </div>
        </Typography>
      </div>
    </>
  );
};

export default Login;

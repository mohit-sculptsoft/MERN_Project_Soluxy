import { Typography } from "@mui/material";
import React from "react";
import photo from "../assets/App-Login_photo.png";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
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
        Signup to Soluxy
        <br />
        <br />
        <InputLabel shrink>
          <b>Email:</b>
        </InputLabel>
        <TextField
          type="email"
          id="email"
          name="email"
          label="Your Email"
          variant="outlined"
          sx={{ width: 280 }}
        />
        <br />
        <br />
        <InputLabel shrink>
          <b>Name:</b>
        </InputLabel>
        <TextField
          type="text"
          id="name"
          name="name"
          label="Your Name"
          variant="outlined"
          sx={{ width: 280 }}
        />
        <br />
        <br />
        <InputLabel shrink>
          <b>Birthday:</b>
        </InputLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: 400 }}>
          <DatePicker name="birthday" id="birthday" />
        </LocalizationProvider>
        <br />
        <br />
        <InputLabel shrink>
          <b>Phone Number:</b>
        </InputLabel>
        <TextField
          type="Number"
          id="number"
          name="number"
          label="Your Number"
          variant="outlined"
          sx={{ width: 280 }}
        />
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <FormLabel id="demo-radio-buttons-group-label" sx={{ mt: 1 }}>
            Gender&nbsp;&nbsp;
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            id="gender"
            name="gender"
          >
            <div style={{ display: "flex" }}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </div>
          </RadioGroup>
        </div>
        <br />
        <InputLabel shrink>
          <b>Address:</b>
        </InputLabel>
        <StyledTextarea
          aria-label="minimum height"
          minRows={3}
          id="address"
          name="address"
          placeholder="Your Address"
          sx={{ width: 250 }}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3, maxWidth: "100%" }}
        >
          Sign Up
        </Button>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "15px", marginTop: "30px" }}>
            Already Have an account ?
          </p>
          <NavLink to="/login" style={{ fontSize: "15px", marginTop: "30px" }}>
            Login Here
          </NavLink>
        </div>
      </Typography>
    </div>
  );
};

export default Signup;

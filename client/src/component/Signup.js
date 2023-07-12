import { Typography } from "@mui/material";
import React, { useState } from "react";
import photo from "../assets/App-Login_photo.png";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Name: "",
    Birthday: "",
    Phone_Number: "",
    Gender: "",
    Address: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  function handleClick() {
    console.log(formData);
  }
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
        <Typography variant="h7">Signup to Soluxy</Typography>
        <br />
        <br />
        <InputLabel shrink>
          <b>Email:</b>
        </InputLabel>
        <TextField
          type="email"
          id="email"
          value={formData.Email || ""}
          onChange={handleChange}
          name="Email"
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
          name="Name"
          value={formData.Name || ""}
          onChange={handleChange}
          label="Your Name"
          variant="outlined"
          sx={{ width: 280 }}
        />
        <br />
        <br />
        <InputLabel shrink>
          <b>Birthday:</b>
        </InputLabel>
        <input
          type="date"
          id="birthday"
          name="Birthday"
          value={formData.Birthday || ""}
          onChange={handleChange}
          style={{
            width: 280,
            height: 30,
            borderRadius: "8px 8px 8px 8px",
            fontFamily: "Poppins",
            borderWidth: "thin",
          }}
        />
        <br />
        <br />
        <InputLabel shrink>
          <b>Phone Number:</b>
        </InputLabel>
        <TextField
          type="Number"
          id="number"
          name="Phone_Number"
          value={formData.Phone_Number || ""}
          onChange={handleChange}
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
            name="Gender"
            value={formData.Gender || ""}
            onChange={handleChange}
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
        <textarea
          style={{
            fontSize: "45%",
            borderRadius: "8px 8px 8px 8px",
            fontFamily: "Poppins",
          }}
          cols={35}
          rows={6}
          id="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          placeholder="Your Address"
          sx={{ width: 250 }}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3, maxWidth: "100%" }}
          onClick={handleClick}
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

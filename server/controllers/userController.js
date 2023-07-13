const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
  try {
    const hashpassword = await bcrypt.hash(password, 12);
    return hashpassword;
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const register_user = async (req, res) => {
  try {
    const {
      Email,
      Name,
      Birthday,
      Phone_Number,
      Gender,
      Address_line_1,
      Address_line_2,
      City,
      Password,
    } = req.body;
    if (
      (!Email || !Name || !Birthday || !Gender || !Phone_Number || !Password,
      !Address_line_1 || !Address_line_2 || !City)
    ) {
      return res.status(401).send("Plzz fill all Fields");
    }
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res
        .status(402)
        .send({ msg: "This email is already Register Try another one" });
    } else {
      const spassword = await securePassword(Password);
      const newUser = await new User({
        Email,
        Name,
        Password: spassword,
        Birthday,
        Phone_Number,
        Gender,
        Address_line_1,
        Address_line_2,
        City,
      });
      const userData = await newUser.save();
      res.status(200).send({ data: userData });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login_user = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(401).send("Plzz fill all Fields");
    } else {
      const user_existence = await User.findOne({ Email });
      if (user_existence) {
        const password_match = await bcrypt.compare(
          Password,
          user_existence.Password
        );
        if (!password_match) {
          return res.status(402).send({ msg: "Invalid Credentials" });
        } else {
          res.status(200).send({ msg: "Success", data: user_existence });
        }
      } else {
        return res
          .status(401)
          .send({ message: "User does not exist Plzz Signup first" });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  register_user,
  login_user,
};

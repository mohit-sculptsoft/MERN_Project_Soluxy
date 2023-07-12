const User = require("../models/userModel");

const register_user = async (req, res) => {
  try {
    const { Email, Name, Birthday, Phone_Number, Gender, Address } = req.body;
    if (!Email || !Name || !Birthday || !Gender || !Phone_Number || !Address) {
      return res.status(401).send("Plzz fill all Fields");
    }
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res
        .status(402)
        .send({ msg: "This email is already Register Try another one" });
    } else {
      const newUser = await new User({
        Email,
        Name,
        Birthday,
        Phone_Number,
        Gender,
        Address,
      });
      const userData = await newUser.save();
      res.status(200).send({ data: userData });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  register_user,
};

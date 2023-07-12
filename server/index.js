const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

PORT = Process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server Started on Port no ${PORT}`);
});

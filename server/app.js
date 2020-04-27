const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("password");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const keys = require("./keys");
const passportStrategy = require("./middleware/passport-strategy");
const app = express();

mongoose
  .connect(keys.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch(error => console.error(error));

app.use(passport.initialize());
passport.use(passportStrategy);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;

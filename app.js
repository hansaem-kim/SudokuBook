const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const sudokus = require("./routes/api/sudokus")
const follows = require("./routes/api/follows")

const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello World"));

app.use(passport.initialize());
require('./config/passport')(passport);    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/sudokus", sudokus);
app.use("/api/follows", follows);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

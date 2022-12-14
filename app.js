const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { specialProperties } = require("mongoose/lib/utils");
// const body-parser
const app = express();

const authRoutes = require("./routes/authRoutes")



// middleware
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.json())
// view engine
app.set("view engine", "ejs");

// database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
mongoose
  .connect("mongodb://localhost:27017/lalitAuthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => {
  res.render("smoothies");
});


app.use(authRoutes)
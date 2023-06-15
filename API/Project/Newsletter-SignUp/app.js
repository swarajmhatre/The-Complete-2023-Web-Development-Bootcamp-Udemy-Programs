const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (request, res) {
  FistName = request.body.fname;
  LastName = request.body.lname;
  Email = request.body.email;
});
app.listen(3000, function (req, res) {
  console.log("servver is running on port 3000");
});

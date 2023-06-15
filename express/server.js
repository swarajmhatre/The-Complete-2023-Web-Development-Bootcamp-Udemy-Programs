const express = require('express');

const app = express();
app.get("/", function(req, res){
  res.send(index.html);
})

app.get("/about", function(req, res){
  res.send("Hello, Swaraj Here");
})
app.listen(3000, function(){
  console.log("Server started on port 3000")
});
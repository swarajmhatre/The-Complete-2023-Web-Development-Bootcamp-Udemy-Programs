const express = require('express');
const https = require('https');
const { isReadable } = require('stream');
const app = express();

app.get("/", function(req, res){
  const hrx = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=0a82774e23a02a43e38ab4a27bcc402e0';
  https.get(hrx, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherdata =  JSON.parse(data)
      console.log(weatherdata);
      // const temp = weatherData.main.temp;
      // console.log(temp);
    })
  });
  res.send("Server is running");
})

app.listen(3000, function(){
  console.log("The server is running on port 3000");
})
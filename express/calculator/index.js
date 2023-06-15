const express = require('express');
const bodyParser = require('body-parser')
const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function (req, res) { res.sendFile(__dirname+'/index.html')});
app.post('/', function(req, res){
  var num1 = Number(req.body.fno);
  var num2 = Number(req.body.sno);
  var result = num1 +  num2;
  res.send("the result is" + result);
})
app.get('/bmiCalculator', function (req, res) { res.sendFile(__dirname+'/bmiCalculator.html')});

app.post('/bmiCalculator', function (req, res) {
  var ht = Number(req.body.ht); 
  var wt = Number(req.body.wt); 
  var result = ht/wt;
  res.send("the bmi is " + result);
  })
app.listen(3000, function () { console.log("server started at port 3000")  });

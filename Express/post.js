var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var a, b ,c;
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.use(express.json())

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index_post.htm" );
})

app.post('/process_post', function (req, res) {

   response = {
      Suma:req.body.first_name + req.body.last_name,
      Multi:req.body.first_name * req.body.last_name,
      Division:req.body.first_name / req.body.last_name,
      Resta: req.body.first_name + req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
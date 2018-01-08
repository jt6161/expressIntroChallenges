var express = require('express');
var app = express();
var fs = require('fs')
var port = process.env.PORT || 8000;

app.get('/', function(req, res) {
  fs.readFile('./storage.json', 'utf8', function(err, data) {})
})

app.post('/create/:name/:age', function(req, res) {
  let newObj = {
    name: req.params.name,
    age: parseInt(req.params.age)
  }
  fs.readFile('./storage.json', 'utf8', function(err, data) {
    let dataAsArr = JSON.parse(data);

    dataAsArr.push(newObj);

    fs.writeFile('./storage.json', JSON.stringify(dataAsArr), function(err) {
      res.sendStatus(200);
    })
  })
});








app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});

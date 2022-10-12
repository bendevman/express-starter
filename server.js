const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
  res.render('index')
});

app.listen(process.env.PORT || 3000)
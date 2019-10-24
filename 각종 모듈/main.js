var express = require('express');
var search = require('./StartSearchInfo');
var app = express();
app.get('/', function(req, res) {
    var test = search.startSearch(37.5502596,127.0709503,15000,"관람");
    res.send(test);

})


app.listen(3443, function() {
  console.log('Connected, 3443port!!');
});
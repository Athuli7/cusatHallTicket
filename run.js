var fs = require('fs');
var pdf = require('html-pdf');
var request = require('request');
var options = { format: 'Letter' };
pdf.create(request('http://google.com/doodle.png'), options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
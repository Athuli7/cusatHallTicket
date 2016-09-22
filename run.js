var fs = require('fs');
var pdf = require('html-pdf');
var html = request('http://google.com/doodle.png');
var options = { format: 'Letter' };
pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
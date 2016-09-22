var fs = require('fs');
var pdf = require('html-pdf');
var request = require('request');
var options = { format: 'Letter' };
var html = "Hello";

request('http://google.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the HTML for the Modulus homepage.
        html = body;
    }
});

pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});
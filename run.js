var fs = require('fs');
var pdf = require('html-pdf');
var request = require('request');
var options = { format: 'Letter' };

request('http://google.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    	pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
			if (err) return console.log(err);
		  		console.log(res);
		});
    }
});


var pdf = require('html-pdf');
var request = require('request');

var options = {
	format: 'A4'
};

request({
		url : 'http://google.com/',
		method: 'POST',
		form: {
			regno1:12130024,
			deg_name:'B.Tech',
			semister:8,
			month:'September',
			year:2016,
			reg_type:'Supply/Improvement',
			checktype:'check'
    	}
		},function (error, response, body) {
    		if (!error && response.statusCode == 200) {
    			pdf.create(body, options).toFile('./businesscard.pdf', function(err, res) {
					if (err) return console.log(err);
		  			console.log(res);
				});
    		}
    	}
);


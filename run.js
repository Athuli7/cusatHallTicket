var pdf = require('html-pdf');
var request = require('request');

/*
*	fetchPhoto?regno1=12130024
*	fetchSign?regno1=12130024
*/

var options = {
	format: 'A2',
	base: "http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket"
};

request({
		url : 'http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket/form2',
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


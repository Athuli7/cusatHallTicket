//phantomjs run.js 12130000 B.Tech 8 September 2016 Supply/Improvement check
var system = require('system');
var page = require('webpage').create(),
	server = 'http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket/form2',
	data =		'regno1='		+ system.args[1] +
				'&deg_name='	+ system.args[2] +
				'&semister='	+ system.args[3] +
				'&month='		+ system.args[4] +
				'&year='		+ system.args[5] +
				'&reg_type='	+ system.args[6] +
				'&checktype='	+ system.args[7],
	folder = system.args[3] + system.args[6] + system.args[4] + system.args[5];
page.open(server, 'POST', data, function(status) {
	console.log("Status: " + status);
	if(status === "success") {
	}
	page.render('results/'+ folder +'/'+system.args[1]+'.pdf');
	phantom.exit();
});
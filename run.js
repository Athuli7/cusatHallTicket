console.log(system.args[0]);
console.log(system.args[1]);
console.log(system.args[2]);
var page = require('webpage').create(),
	server = 'http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket/form2',
	data = 'regno1=12130024&deg_name=B.Tech&semister=8&month=September&year=2016&reg_type=Supply/Improvement&checktype=check';

page.open(server, 'POST', data, function(status) {
	console.log("Status: " + status);
	if(status === "success") {
	}
	page.render('results/12130024.pdf');
	phantom.exit();
});
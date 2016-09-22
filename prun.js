var page = require('webpage').create(),
	server = 'http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket',
	data = 'regno1=12130024&deg_name=B.Tech&semister=8&month=September&year=2016&reg_type=Supply/Improvement&checktype=check';
page.open(server, 'post', data, function(status) {
	console.log("Status: " + status);
	if(status === "success") {
	}
	page.render('example.pdf');
	phantom.exit();
});
page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};
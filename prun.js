var page = require('webpage').create(),
	server = 'http://exam.cusat.ac.in/erp5/cusat/Cusat-Hall-Ticket',
	data = 'regno1=12130024&deg_name=B.Tech&semister=8&month=September&year=2016&reg_type=Supply/Improvement&checktype=check';

phantom.onError = function(msg, trace) {
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error(msgStack.join('\n'));
  phantom.exit(1);
};
page.open(server, 'post', data, function(status) {
	console.log("Status: " + status);
	if(status === "success") {
	}
	page.render('example.pdf');
	phantom.exit();
});

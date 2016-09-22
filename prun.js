var page = require('webpage').create();
page.open('http://exam.cusat.ac.in', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.pdf');
  }
  phantom.exit();
});
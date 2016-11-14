if (process.argv.length != 3) {
	console.log("PROPER USAGE: node goldilocks.js {input file}");
	return;
}

var fs = require('fs');
var weight = 0;
var maxTemp = 0;
var validSeats = [];

fs.readFile(process.argv[2], 'utf8', function(err, contents) {

	if (err) throw err;

	contents.split('\n').forEach(function (line, index) {
		var lineData = line.split(' ');
		if (index == 0) {
			weight = parseInt(lineData[0]);
			maxTemp = parseInt(lineData[1]);
		}
		else if (weight <= lineData[0] && maxTemp >= lineData[1]) {
			validSeats.push(index);
		}
	});

	console.log(validSeats);
});
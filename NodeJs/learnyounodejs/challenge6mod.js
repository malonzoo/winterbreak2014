var http = require('http');
var toReturn = 0;

module.exports = function (getURL, callback) {
	http.get(process.argv[2], function (response, err) {
		if (err) {
			return callback(err, null);
		}
		else {
			response.setEncoding('utf8');
	  		response.on('data', function(data) {
	  			toReturn++;
	  		});
	  		response.on('error', console.error);
	  		callback(err, toReturn);
		}
	});
};


// var fs = require('fs');
// var path = require('path');
// var toReturn = [];

// module.exports = function (dirString, extString, callback) {
// 	fs.readdir(dirString, function(err, files) {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			var toReturn = [];
// 			files.forEach(function(elt) {
// 				if (path.extname(elt) === '.' + extString)
// 					toReturn.push(elt);
// 			});
// 			callback(err, toReturn);
// 		}
// 	});
// };

// OFFICIAL SOLUTION: 

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
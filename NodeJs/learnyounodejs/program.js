// // CHALLENGE 13: Some Person
// var url = require('url');
// var http = require('http');

// var routes = {
// 	"/api/parsetime": function(parsedUrl) {
// 		var date = new Date(parsedUrl.query.iso);
// 		return {
// 			hour: date.getHours(),
// 			minute: date.getMinutes(),
// 			second: date.getSeconds()
// 		};
// 	},
// 	"/api/unixtime" : function(parsedUrl) {
// 		return { unixtime: (new Date(parsedUrl.query.iso)).getTime()};
// 	}
// };

// var server = http.createServer( function(request, response) {
// 	parsedUrl = url.parse(request.url, true);
// 	resource = routes[parsedUrl.pathname];
// 	if(resource) {
// 		response.writeHead(200, { 'Content-Type': 'application/json' });
// 		response.end(JSON.stringify( resource(parsedUrl)));
// 	}
// 	else {
// 		response.writeHead(404);
//     	response.end();
// 	}
// });
// server.listen(process.argv[2]);

// // CHALLENGE 13: Official Solution
// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 12: Camille
// var map = require('through2-map');
// var http = require('http');

// var server = http.createServer( function(request, response) {
// 	if (request.method != 'POST')
// 		return request.end("Send me a POST \n");

// 	request.pipe(map(function (chunk) {
//       return chunk.toString().toUpperCase();
//     })).pipe(response);
// });
// server.listen(process.argv[2]);

// // CHALLENGE 12: Official Solution
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 11: Some Person
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer( function(request, response) {
// 	fs.createReadStream(process.argv[3]).pipe(response);
// });
// server.listen(process.argv[2]);

// // CHALLENGE 11: Official Solution
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' });

//   fs.createReadStream(process.argv[3]).pipe(res);
// });

// server.listen(Number(process.argv[2]));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 10: Camille
// var net = require('net');
// var server = net.createServer(function (socket) {
// 	socket.end(createDate());
// });
// server.listen(process.argv[2]);

// function createDate() {
// 	var date = new Date();
// 	var dateString = date.getFullYear() + "-"; 
// 	dateString += checkIfNeedZero(date.getMonth()) + (date.getMonth() + 1) + "-";
// 	dateString += checkIfNeedZero(date.getDate()) + date.getDate() + " ";
// 	dateString += checkIfNeedZero(date.getHours()) + date.getHours() + ":";
// 	dateString += checkIfNeedZero(date.getMinutes()) + date.getMinutes();
// 	return dateString + "\n";
// };

// function checkIfNeedZero(number) {
// 	if (number.toString().length == 1) 
// 		return "0";
// 	return "";
// };

// // CHALLENGE 10: OFFICIAL SOLUTION
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 9: Camille
// var http = require('http');
// var queue = [];
// var httpDone = 0;

// function repeatGet(urlNum) {
// 	http.get(process.argv[urlNum], function (response) {
// 	var result = "";
// 	response.setEncoding('utf8');
// 	response.on('data', function(data) {
// 		result += data;
// 	});
// 	response.on('end', function() {
// 		queue[urlNum-2] = (result);
// 		httpDone++;
// 		if (httpDone == 3)
// 			for( var i = 0; i < httpDone; i++)
// 				console.log(queue[i]);
// 	});
// });
// };

// for (var m = 2; m < 5; m++) {
// 	repeatGet(m);
// }

// // CHALLENGE 9: OFFICIAL SOLUTION
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 8
// var http = require('http');
// http.get(process.argv[2], function (response) {
// 	var result = "";
// 	response.setEncoding('utf8');
// 	response.on('data', function(data) {
// 		result += data;
// 	});
// 	response.on('end', function() {
// 		console.log(result.length);
// 		console.log(result);
// 	});
// });

// // CHALLENGE 8; OFFICIAL SOLUTION
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 7: some random site
// var http = require('http');

// http.get(process.argv[2], function(response) {
// 	response.setEncoding("utf8");
// 	response.on("data", function(data) {
// 		console.log(data);
// 	});
// }).on('error', function(e) {
// 	console.log("Got error: " + e.message);
// });

// // CHALLENGE 7; OFFICIAL SOLUTION
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// // CHALLENGE 6
// var mod = require('./challenge6mod.js');
// mod(process.argv[2], process.argv[3], function(err, files) {
// 	for (var i = 0; i < files.length; i++) {
// 		console.log(files[i]);
// 	}
// });

// // CHALLENGE 6: Official Solution
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 5: Camille
// var fs = require('fs');
// var filePath = process.argv[2];
// var fileExt = "." + process.argv[3];

// fs.readdir( filePath, function(err, files) {
// 	for (var i = 0; i < files.length; i++) {
// 		if ( files[i].search(fileExt) != -1 ) {
// 			console.log(files[i]);
// 		}
// 	}
// });

// CHALLENGE 5: Official Solution
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 4: Camille
// var fs = require('fs');
// var numLines = undefined;

// fs.readFile(process.argv[2], function (err, contents) {
// 	// fs.readFile(file, 'utf8', callback) can also be used
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 3: Camille
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2])
// console.log( buf.toString().split('\n').length - 1 );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 2
// var sum = 0;
// for (var i = 2; i < (process.argv).length; i++) {
// 	sum += Number(process.argv[i]);
// }
// console.log(sum);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// CHALLENGE 1
// console.log("HELLO WORLD");

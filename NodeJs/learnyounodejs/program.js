// CHALLENGE 6


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

// CHALLENGE 6: Camille
var express = require('express');
var app = express();
	app.put('/message/:id', function(request, response){
		var id = request.params.id;
		var str = require('crypto')
			.createHash('sha1')
			.update(new Date().toDateString() + id)
			.digest('hex');
		response.send(str);
	});
	app.listen(process.argv[2]);


// CHALLENGE 5: Camille
// var express = require('express');

// var app = express();
// 	app.use(express.static(process.argv[3]));
// 	app.use(require('stylus').middleware(process.argv[3]));
// 	app.listen(process.argv[2]);

// // CHALLENGE 4: Camille
// var express = require('express');

// var app = express();
// 	app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

// 	app.listen(process.argv[2]);


// //CHALLENGE 3: Camille
// var express = require('express');
// var bodyparser = require('body-parser');

// var app = express();
// 	app.use( bodyparser.urlencoded({extended: false}) );
// 	app.post('/form', function(request, response) {
// 		response.send( request.body.str.split('').reverse().join('') );
// 	});
// 	app.listen(process.argv[2]);


// // CHALLENGE 2: Camille
// var express = require('express');
// var app = express();
// 	app.set('view engine', 'jade');
// 	app.set('views', process.argv[3]);
// 	app.get('/home', function(request, response) {
// 		response.render('index', {date: new Date().toDateString()});
// 	});
// 	app.listen(process.argv[2]);


// // CHALLENGE 1: Camille
// var express = require('express');
// var app = express();
// app.get('/home', function(request, response) {
// 	response.end('Hello World!');
// });
// app.listen(process.argv[2]);
var express = require('express'),
	app     = express(),
	plantilla    = require('jade'),
	server  = require('http').createServer(app),
  	io      = require('socket.io').listen(server);

server.listen(3000);


var cons    = require('consolidate');

app.engine('jade', cons.jade);
app.set('view engine', 'jade');
console.log(app);
app.use(express.static('./public'));

app.get('/', function (req, res) {
  	res.render('index', {
  		titulo : "Hola"
  	});
});

io.sockets.on('connection', function (socket) {
	socket.on('pintar', function (data) {
		socket.broadcast.emit('pintar', data);
	});

});
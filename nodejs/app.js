var express = require('express');

var app = express();

var mensajes = [],
	peticionesPendientes = [];

app.get('/', function (req, res) {
	res.send('Hola mundo');
});

app.get('/mensajes/nuevo/:message', function (req, res) {
	mensajes.push(req.params.message);

	peticionesPendientes.forEach(function(res){
		res.send(mensajes+'<script>window.location.reload()</script>');
	});

	res.send('mensaje enviado');
});

app.get('/mensajes/lista', function (req, res) {
	// res.send(mensajes+'<script>setTimeout(function(){window.location.reload()},5000)</script>');
	peticionesPendientes.push(res);
})

app.listen(3000);
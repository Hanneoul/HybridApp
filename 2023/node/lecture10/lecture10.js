const express = require('express');
const app = express();
const port = 3000;

function get_hello(req, res){
	res.send('Solmoi Byuntae!');
}

function start_server(){
	console.log('Server Listening...');
}

app.get('/', get_hello);
app.listen(port, start_server);


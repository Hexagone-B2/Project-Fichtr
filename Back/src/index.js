// HTTP
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
const server = require('http').createServer(app);
const socketio = require('socket.io')
const io = socketio(server, {secure: true});

//DATA PARSER
const bodyParser = require('body-parser');

//ROUTES
const routes = require('./routes.js');

//PRODUCTION
const cors = require('cors');
const helmet = require('helmet')
app.use(cors());
app.disable('x-powered-by')
app.disable('access-control-allow-origin');
app.use(helmet()) //que en prod pour les headers


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use('/api',routes);

io.on('connection', function (socket) {
    console.log('A user connected');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


//WEBSOCKET
server.listen(port, () => {
    console.log('[*] Serveur WEB en écoute sur le port ' + port)
})
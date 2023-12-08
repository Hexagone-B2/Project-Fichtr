// HTTP
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;

//SOCKET
const socketio = require("socket.io")
const io = socketio(server);

//DATA PARSER
const bodyParser = require('body-parser');

//ROUTES
const routes = require('./routes.js');

//PRODUCTION
const cors = require('cors');
//const helmet = require('helmet')


// MIDDLEWARES
app.use(cors())
app.disable('x-powered-by')
//app.use(helmet()) que en prod pour les headers
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use('/api',routes);

//WEBSOCKET

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        if (data.username && data.message) {
            io.emit('message', {username: data.username, message: data.message});
        }
    });
    socket.on('disconnect', () => {
        console.log('deco');
    });
});

//LISTENING
app.listen(port, () => {
    console.log('[*] Serveur WEB en écoute sur le port '+p.port)
})
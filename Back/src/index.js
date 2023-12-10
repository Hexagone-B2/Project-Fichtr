// HTTP
const express = require('express');
const app = express();
const port = process.env.FIICHTR_PORT || 3000;
const server = require('http').createServer(app);
require('./socket/websocket')(server);


//DATA PARSER
const bodyParser = require('body-parser');

//ROUTES
const routes = require('./routes.js');

//PRODUCTION
const cors = require('cors');
const helmet = require('helmet')
app.use(cors({
    origin: '*',
    methods: 'POST,GET'
}));
app.disable('x-powered-by')
app.use(helmet({
    contentSecurityPolicy: false,
}))

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use('/api',routes);

// Routes non api
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


server.listen(port, () => {
    console.log('[*] Serveur WEB en écoute sur le port ' + port)
})
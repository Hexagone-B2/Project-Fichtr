// HTTP
const express = require('express');
const app = express();
const port = process.env.FICHTR_PORT || 3000;
const server = require('http').createServer(app);
require('./socket/websocket')(server);
//Possibilité d'utiliser les sessions pour l'authentification

// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
//
// app.use(sessions({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     resave: false,
//     httpOnly:false
// }));
// app.use(cookieParser());

//Utils
const resolve = require('path').resolve

//DATA PARSER
const bodyParser = require('body-parser');

//ROUTES
const routes = require('./routes.js');

//PRODUCTION
const cors = require('cors');
const helmet = require('helmet')
app.use(cors({
    origin: '*',
    methods: 'POST,GET,PUT',
    credentials: true,
}));

app.disable('x-powered-by')
app.use(helmet({
    contentSecurityPolicy: false,
}))

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use('/api',routes);

// app.post('/t', (req, res) => {
//     req.session.user=4;
//     res.send('OK')
// })
//
// app.get('/y', (req, res) => {
//     res.json(req.session)
// })

app.use(express.static(resolve(__dirname, "../public/web")))
app.use((req, res) => {
    res.status(404).sendFile(resolve(__dirname, "../public/404.html"))
})

server.listen(port, () => {
    console.log('[*] Serveur WEB en écoute sur le port ' + port)
})
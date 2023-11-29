const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');


const p = {
    port : 3000
}

app.use(cookieParser());
app.use(session({
    secret: 'H7o0^N$LYH6Tra.gcPGZ_n2zs&XK.v{D',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // passer a true en prod avec du https
}));
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

app.use('/api',routes);


app.listen(p.port, () => {
    console.log('[*] Serveur WEB en écoute sur le port '+p.port)
})
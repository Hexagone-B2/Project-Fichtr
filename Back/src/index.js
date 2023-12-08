const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require('cors');
//const helmet = require('helmet')


const p = {
    port : 3000
}

app.use(cors())
app.disable('x-powered-by')
//app.use(helmet()) que en prod pour les headers
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

app.use('/api',routes);


app.listen(p.port, () => {
    console.log('[*] Serveur WEB en écoute sur le port '+p.port)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const cors = require('cors')
const multer = require('multer');



const p = {
    port : 3000
}

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

app.use('/api',routes);


app.listen(p.port, () => {
    console.log('[*] Serveur WEB en écoute sur le port '+p.port)
})
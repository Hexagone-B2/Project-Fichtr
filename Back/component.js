const fs = require('fs')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const executeSQL = require('./mysql.js');

const SECRET_KEY = 'H7o0^N$LYH6Tra.gcPGZ_n2zs&XK.v{D';

function getUsernameByJWT(token){
    try{
        const decoded =  jwt.verify(token, SECRET_KEY);
        return decoded.username
    }catch(e){
        console.log(e);
        return null;
    }
}


module.exports.hello = (req, res) => {
    res.send('Bonjour !');
};


module.exports.sendFile = (req, res) => {
    const path = __dirname + "/public/" + req.params.file
    if (fs.existsSync(path)) {
        res.sendFile(path);
    } else {
        res.status(500).send('ERROR');
    }
}

module.exports.getPosts = (req, res) => {
    executeSQL("SELECT * FROM Post", [], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur interne');
        } else {
            res.json(results)
        }
    })
}

module.exports.echo = (req, res) => {
    res.json(req.body);
}


module.exports.uploadProfilePic = (req, res) => {
    console.log(req.file);
    res.status(200).send("Fichier reçu");
}


module.exports.login = async (req, res) => {
    if (!(req.body.email && req.body.password)){
        res.status(403).send('NOT_ALL_DATA');
        return;
    }else{
        executeSQL('SELECT password,username from User where mail=?',[req.body.email],(error,result)=>{
            if (bcrypt.compareSync(req.body.password,result[0].password)){
                const token = jwt.sign({username : result[0].username}, SECRET_KEY);
                res.status(200).send(token);
            }else{
                res.status(403).send('WRONG_PASSWORD');
            }
        })
    }
}

module.exports.register = (req, res) => {
    if (req.body.username && req.body.lastname && req.body.firstname && req.body.email && req.body.password && req.body.repeatpassword) {
        if (req.body.password === req.body.repeatpassword) {
            bcrypt.hash(req.body.password, 10).then(password => {
                executeSQL("INSERT INTO User (username, firstname, lastname, mail, password) VALUES (?,?,?,?,?);",
                           [req.body.username, req.body.firstname, req.body.lastname, req.body.email, password],
                           (error) => {
                                if (error){
                                    console.log(error);
                                    res.status(500).send('SQL_ERROR');
                                }
                                else{
                                    executeSQL("SELECT id FROM User where username=?;",[req.body.username],(error,result)=>{
                                        if (error){
                                            console.log(error);
                                            res.status(500).send('SQL_ERROR');
                                        }else{

                                        }
                                    })
                                    res.send('OK');
                                }
                        })
            });
        } else {
            res.status(403).send('PASSWORD_NOT_EQUIVALENT');
        }
    } else {
        res.status(403).send('NOT_ALL_DATA');
    }
}


module.exports.updateUser = (req,res) => {
    console.log(req.body);
    console.log(req.file)
    res.status(200).send('OK');
}

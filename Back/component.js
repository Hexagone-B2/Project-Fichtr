const fs = require('fs')
const bcrypt = require('bcrypt');
const executeSQL = require('./mysql.js');


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
            res.status(500).send('INTERNAL_ERROR');
        } else {
            res.json(results)
        }
    })
}

module.exports.echo = (req, res) => {
    res.json(req.session.user)
    console.log(req.session.user)
    //res.json(req.body);
}


module.exports.uploadProfilePic = (req, res) => {
    console.log(req.file);
    res.status(200).send("Fichier reçu");
}


module.exports.login = (req, res) => {
    if (!(req.body.mail && req.body.password)){
        res.status(403).send('NOT_ALL_DATA');
    }else{
        executeSQL('SELECT * from User where mail=?', [req.body.mail], (error, result) => {
            if (!result[0]) {
                res.status(403).send('UNKNOWN_MAIL');
            }else{
                if (bcrypt.compareSync(req.body.password, result[0].password)) {
                    req.session.user = {
                        id: result[0].id,
                        firstname: result[0].firstname,
                        lastname: result[0].lastname,
                        mail: result[0].mail,
                        roles: result[0].roles,
                    };
                    res.status(200).send('OK');
                } else {
                    res.status(403).send('WRONG_PASSWORD');
                }
            }
        })
    }
}

module.exports.register = (req, res) => {
    if (req.body.username && req.body.lastname && req.body.firstname && req.body.mail && req.body.password && req.body.repeatpassword) {
        if (req.body.password === req.body.repeatpassword) {
            bcrypt.hash(req.body.password, 10).then(password => {
                executeSQL("INSERT INTO User (username, firstname, lastname, mail, password) VALUES (?,?,?,?,?);",
                           [req.body.username, req.body.firstname, req.body.lastname, req.body.mail, password],
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


module.exports.updateUserProfile = (req,res) => {
    if (req.body.username && req.body.bio && req.body.mail && req.body.url_personnal_site && req.session.user){
        //dire a marine de faire au moins 3 formulaires.
    }
}

module.exports.getProfile = (req,res) => {
    if (req.session.user){
        const id = req.session.user.id;
        executeSQL("SELECT * FROM Profile where user_id=?",[id],(error,result) => {
            if (result[0]){
                res.json(result[0]);
            }
            res.status(500).send('INTERNAL_ERROR');
        })
    }

}

const bcrypt = require("bcrypt");
const {executeSQL} = require('../func/mysql');

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
                                    executeSQL('INSERT INTO Profile (profile_pic,bio,url_personnal_site,user_id) VALUES (?,?,?,?);',["","","",result[0].id],(error)=>{
                                        if (error){
                                            console.log(error);
                                        }else{
                                            res.send('OK');
                                        }
                                    })
                                }
                            })
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
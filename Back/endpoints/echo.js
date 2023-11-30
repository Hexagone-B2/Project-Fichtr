const jwt = require("jsonwebtoken");

const SECRET_KEY = "H7o0^N$LYH6Tra.gcPGZ_n2zs&XK.v{D";


module.exports.echo = (req, res) => {
    console.log(req.headers)
    if (req.headers.authorization){
        jwt.verify(req.headers.authorization,SECRET_KEY, (error,decoded)=>{
            if (error){
                console.log(error);
            }else{
                console.log(decoded);
                res.send('t')
            }
        })
    }else{
        res.send('T')
    }
}

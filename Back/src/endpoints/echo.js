const jwt = require("jsonwebtoken");

module.exports.echo = (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.json(req.headers);
}


module.exports.echo = (req, res) => {
    console.log(req.headers);
    console.log(req.body);
    res.json(req.body)
}

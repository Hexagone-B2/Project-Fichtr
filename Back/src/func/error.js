module.exports.nad = (res) => {
    res.status(403).send('NOT_ALL_DATA');
}

module.exports.ite = (res) => {
    res.status(500).send('INTERNAL_ERROR');
}
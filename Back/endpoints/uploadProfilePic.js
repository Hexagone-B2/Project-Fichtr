module.exports.uploadProfilePic = (req, res) => {
    console.log(req.file);
    res.status(200).send("Fichier reçu");
}
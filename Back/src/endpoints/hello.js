module.exports.hello = (req, res) => {
    req.session.user = {
        id: 4,
        username: 'Pierre-Jean',
        firstname: 'PierreJeanGuerry',
        lastname: 'Guerry',
        mail: 'pjguerry976@hotmail.fr',
        password: '$2b$10$Xb85Ci1LcvG2PQmAS5n9euLy9uZV1PpNLNliQy1wsJELg3qEhb8dO',
        roles: 'user'
    };
    req.session.save(()=> {
        res.send('Bonjour !');
    })
};
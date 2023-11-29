async function executeQuery(query, params, callback) {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: '51.159.9.88',
        user: 'dbAdminFichtr',
        password: '{>f34gN@#YU1x2dTpYCf',
        database: 'fichtr',
        port: 27085
    });
    await connection.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données :', err);
            return;
        }
        connection.query(query, params, (error, results) => {
            connection.end();
            if (error) {
                console.error(error);
                callback(error, null);
                return results;
            }
            callback(null, results);
        });
    });
}

module.exports = executeQuery;
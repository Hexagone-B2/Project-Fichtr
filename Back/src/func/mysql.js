module.exports.executeSQL = (query, params, callback) => {
    const mysql = require('mysql');
    require('dotenv').config();
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'fichtr',
        port: process.env.DB_PORT
    });
    connection.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données :', err);
            return;
        }
        connection.query(query, params, (error, results) => {
            connection.end();
            if (error) {
                console.error(error);
                callback(error, null);
            }
            callback(null, results);
        });
    });
}

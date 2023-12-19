const {Server} = require('socket.io');
const {checkAuth} = require("../func/checkAuth");
const {executeSQL} = require("../func/mysql");

module.exports = (server) => {
    //FUCK CORS
    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });
    let users = {};
    io.on('connection', (socket) => {
        //RECEPTION ET RENVOIE DES MESSAGES DE LA SHOUTBOX
        socket.on('shoutbox_message_send', (data) => {
            if (data.authorization && data.message) {
                checkAuth(data.authorization, (error, decoded) => {
                    if (!error) {
                        socket.broadcast.emit('shoutbox_message_receive', {
                            sender_id: decoded.id,
                            sender: decoded.username,
                            message: data.message
                        });
                        socket.emit('send_confirmation', {error: false});
                    } else {
                        socket.emit('send_confirmation', {error: true, error_message: 'NOT_AUTHENTICATED'});
                    }
                })
            } else {
                socket.emit('send_confirmation', {error: true, error_message: 'NOT_ALL_DATA'});
            }
        });

        //MESSAGES PRIVEES
        socket.on('join_mp', (data) => {
            if (data.authorization) {
                checkAuth(data.authorization, (error, decoded) => {
                    if (!error) {
                        users[decoded.username] = socket.id;
                    }
                })
            }

        });

        socket.on('send_message_mp', (data) => {
            if (data.authorization && data.message && data.to) {
                checkAuth(data.authorization, (error, decoded) => {
                    if (!error) {
                        if (data.to in users) {
                            io.to(users[data.to]).emit('receive_message_mp', {
                                from: decoded.username,
                                message: data.message
                            })
                        }
                        executeSQL('SELECT id FROM User WHERE username=?', [data.to], (error, result) => {
                            if (!error && result[0]) {
                                executeSQL('INSERT INTO MP (sender_id, receiver_id, message) VALUES (?,?,?);',
                                    [parseInt(decoded.id), parseInt(result[0].id), data.message], (error) => {
                                        if (!error) {
                                            socket.emit('confirmation', {error: false})
                                        } else {
                                            socket.emit('confirmation', {error: true})
                                        }
                                    })
                            }
                        })
                    }
                })
            }
        })
    })
}
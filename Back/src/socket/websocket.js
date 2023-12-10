const {Server} = require('socket.io');
const {checkAuth} = require("../func/checkAuth");

module.exports = (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {

        //RECEPTION ET RENVOIE DES MESSAGES DE LA SHOUTBOX
        socket.on('shoutbox_message_send', (data) => {
            if (data.authorization && data.message) {
                checkAuth(data.authorization, (error, decoded) => {
                    if (!error) {
                        socket.broadcast.emit('shoutbox_message_receive', {
                            sender: decoded.username,
                            message: data.message
                        });
                        socket.emit('send_confirmation', {error: false});
                    } else {
                        socket.emit('send_confirmation', {error: true, error_message: 'NOT_AUTHENTICATED'});
                    }
                })
            } else {
                socket.emit('send_confirmation', {error: true, error_message: 'NOT_AUTHENTICATED'});
            }
        });


    })
}
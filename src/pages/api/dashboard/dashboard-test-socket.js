
import handler from 'express-async-handler';

export default handler(async (req, res) => {
    console.log('api test socket')
    if (!res.socket.server.io) {
        await fetch('http://localhost:3000/api/socket')
    }
    res.socket.server.io.emit('test-socket', true)
    res.status(200).send('success');
})
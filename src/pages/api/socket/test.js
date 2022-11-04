import handler from 'express-async-handler';

export default handler(async (req, res) => {
    
    res.socket.server.io.emit("apa", "datri server hahah yatta berhasil");
    res.status("200").send("ok docky");
})
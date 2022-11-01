import handler from 'express-async-handler';
import fs from 'fs';
import path from 'path';
import root from 'rootrequire'

export default handler(async (req, res) => {
    const {name} = req.query
    const img = `${root}/src/assets/img/${name}`;
    const ada = fs.existsSync(img);
    if (ada) {
        const gambar = fs.readFileSync(img);
        res.setHeader('Content-Type', 'image/png');
        res.send(gambar)
    } else {
        const gambar = fs.readFileSync(`${root}/src/assets/img_default/default.png`);
        res.setHeader('Content-Type', 'image/png');
        res.send(gambar)
    }

})

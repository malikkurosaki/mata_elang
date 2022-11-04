import handler from 'express-async-handler';
import fs from 'fs';
import root from 'rootrequire';

export default handler(async (req, res) => {

    const data = fs.readFileSync(root + "/src/assets/svg/id.svg")
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(data)
})
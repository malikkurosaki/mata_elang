import handler from 'express-async-handler'
import root from 'rootrequire'
import fs from 'fs'
import path from 'path';

export default handler(async (req, res) => {
    const data = JSON.parse(fs.readFileSync(root + '/src/components/json/graph_chart.json').toString())
    res.status(200).json(data);
})
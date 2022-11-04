import handler from 'express-async-handler'
import fs from 'fs'
import root from 'rootrequire'


export default handler(async (req, res) => {
    const getData = JSON.parse(fs.readFileSync(root + '/src/components/json/tree_chart.json').toString())
    res.status(200).json(getData)
})
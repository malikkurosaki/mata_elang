import handler from 'express-async-handler'
import fs from 'fs'
import root from 'rootrequire'

export default handler(async(req, res) => {
    const data = JSON.parse(fs.readFileSync(root+ '/src/components/json/flag.json').toString())
    res.status(200).json(data)
})
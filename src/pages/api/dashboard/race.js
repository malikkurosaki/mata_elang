import handler from 'express-async-handler'
import fs from 'fs'
import root from 'rootrequire'

export default handler(async (req, res) => {
    /**@type {[][]} */
    const data = JSON.parse(fs.readFileSync(root + '/src/components/json/race.json').toString())
    let hasil = data.filter((e) => !e.includes("New Zealand"))
        .filter((e) => !e.includes("Finland"))
        .filter((e) => !e.includes("Poland"))
        .filter((e) => !e.includes("Japan"))
        .filter((e) => !e.includes("South Korea"));

    for (let i in hasil) {
        if (i != 0) {
            hasil[i][4] = hasil[i][4] - 1900
        }
    }
    res.status(200).json(hasil)
})
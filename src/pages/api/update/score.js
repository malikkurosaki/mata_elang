
import handler from 'express-async-handler'
const prisma = new (require('@prisma/client').PrismaClient)()

export default handler(async (req, res) => {
    if (req.method === "POST") {
        let listData = req.body;

        let curentData = await prisma.dashboardScore.findMany();
        curentData.forEach(async e => {
            e.xscore = e.score
            await prisma.dashboardScore.update({
                where: {
                    id: e.id
                },
                data: e
            })
        })

        for (let itm of listData) {
            await prisma.dashboardScore.upsert({
                where: {
                    id: itm.id,
                },
                create: itm,
                update: itm
            })
        }

        if(!req.socket.server.io){
            await fetch("http://localhost:3000/api/socket")
        }

        req.socket.server.io.emit("update_dashboard score", true)
        res.status(201).send("Success")
    } else {
        res.status(405).send("Not Allowed")
    }
})
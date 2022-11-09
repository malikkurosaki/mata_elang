import handler from 'express-async-handler';
const prisma = new (require('@prisma/client').PrismaClient)()

export default handler(async (req, res) => {
    let data =  await prisma.dashboardScore.findMany();
    
    res.status(200).json(data)
})
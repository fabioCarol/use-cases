import { PrismaClient } from '@prisma/client'
import type {NextApiRequest as Request, NextApiResponse as Responses} from 'next'

export default function handler(req:Request , res:Responses) {

    switch (req.method) {
        case 'POST':
            createUseCase(req,res)
        break
    }
  }

  async function createUseCase(req:Request , res:Responses) {
    const prisma = new PrismaClient()

   const newUseCase=  await prisma.useCase.create({
        data: {
            title: req.body.title as string,
            projectId: 1
        }
    })
    res.status(201).json(newUseCase)
  }
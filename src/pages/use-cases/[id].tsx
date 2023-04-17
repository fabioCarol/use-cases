import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PrismaClient, Project, UseCase } from '@prisma/client'
import { GetServerSideProps } from 'next'

export type UseCaseProps = {
    useCase: UseCase & {
        Project: Project | null;
    }
}


export default function Home({useCase}:UseCaseProps) {
const {title} = useCase

  return (
    <main >
      <h1>Use case {title}</h1>
      <ul>
        <li>
            <b>Project</b> 
            <Link href={`/projects/${useCase.Project?.id}`}>{useCase.Project?.title}</Link>
            </li>
      </ul>
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient()
  const useCase = await prisma.useCase.findUnique({
    where: {
        id: +(context.query.id as string)
    },
    include: {
        Project: true
    }
  })
  console.log({useCase})
  return {
      props: {
        useCase
      }
  }
}
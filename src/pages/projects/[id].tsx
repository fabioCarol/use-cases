import { PrismaClient, Project, UseCase } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

export type ProjectProps = {
    project: Project & {
        useCases: UseCase[];
    }
}


export default function Home({project}:ProjectProps) {
const {title, useCases} = project
  return (
    <main >
      <h1>Project {title}</h1>
      <h3>Use cases</h3>
      <ul>
        {useCases.map(({id, title}) => (
            <li key={id}>
                <Link href={`/use-cases/${id}`}>{title}</Link>
            </li>
        ))}
      </ul>
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient()
  const project = await prisma.project.findUnique({
    where: {
        id: +(context.query.id as string)
    },
    include: {
        useCases: true
    }
  })
  return {
      props: {
        project
      }
  }
}
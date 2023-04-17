import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PrismaClient, UseCase } from '@prisma/client'
import { GetServerSideProps } from 'next'

export type HomeProps = {
  latestUseCases: Array<UseCase>

}


export default function Home({latestUseCases}:HomeProps) {
  return (
    <main >
      <h1>Use Cases</h1>
      <li>
        <Link href="/use-cases/add">Add a use case</Link>
      </li>
      <h3>Latest use cases</h3>
      <ul>
      {
        latestUseCases.map(({id,title})=> (
          <li key={id}>
              <Link href={`/use-cases/${id}`}>{title}</Link></li>
        ))
      }
      </ul>
     
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const latestUseCases = await prisma.useCase.findMany({
      take:5,
      orderBy: {id: 'desc'}
  })
  return {
      props: {
          latestUseCases
      }
  }
}
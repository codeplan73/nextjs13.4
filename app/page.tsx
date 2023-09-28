import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import bg from '@/public/images/bg.png'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="relative h-screen">
      <h1>Hello Word</h1>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <div>
        <Image
          src={bg}
          alt="bg-image"
          fill
          className="object-cover"
          sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, (max-width:1200px) 33vw"
          quality={100}
          priority
        />
      </div>

      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
    </main>
  )
}

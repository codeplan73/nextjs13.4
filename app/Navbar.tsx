'use client'

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { status, data: session } = useSession()

  // if (status === 'loading') return null
  return (
    <div className="flex items-center justify-start gap-4 p-4 bg-slate-200">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/products">Product</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            SignOut
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">SignIn</Link>
      )}
    </div>
  )
}

export default Navbar

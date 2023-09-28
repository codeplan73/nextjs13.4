import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string }
}

const UserDetailPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UserDetailPage

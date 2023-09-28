import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-8 h-screen">Admin SideBar</aside>
      <main className="p-5">{children}</main>
    </div>
  )
}

export default AdminLayout

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
// import { Suspense } from 'react'
import AuthProvider from './auth/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-App Mastery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="p-5">
            {/* <Suspense fallback={<p>Loading...</p>}>{children}</Suspense> */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
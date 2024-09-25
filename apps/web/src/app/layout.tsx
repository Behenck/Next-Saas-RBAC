import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from './(app)/providers'

export const metadata: Metadata = {
  title: 'Next Saas RBAC',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

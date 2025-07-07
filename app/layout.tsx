import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Software Developer',
  description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  keywords: ['software developer', 'web development', 'portfolio', 'react', 'typescript', 'full-stack'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - Software Developer',
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Software Developer',
    description: 'Professional software developer portfolio showcasing web development, mobile apps, and software engineering projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
            {children}
      </body>
    </html>
  )
}
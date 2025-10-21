import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sakura Ordinals - Real Utility Bitcoin Ordinals Collection',
  description: 'The first Bitcoin Ordinals collection with real utility - featuring a web3 dating platform. 999 unique Sakura pieces with actual use cases beyond PFP.',
  keywords: 'Bitcoin Ordinals, NFT, Web3 Dating, Sakura, Utility NFTs, Bitcoin Inscriptions',
  authors: [{ name: 'Sakura Ordinals Team' }],
  openGraph: {
    title: 'Sakura Ordinals - Real Utility Bitcoin Ordinals',
    description: 'The first Bitcoin Ordinals collection with real utility - featuring a web3 dating platform.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakura Ordinals - Real Utility Bitcoin Ordinals',
    description: 'The first Bitcoin Ordinals collection with real utility - featuring a web3 dating platform.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

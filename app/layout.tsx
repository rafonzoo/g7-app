import type { Metadata } from 'next'
import GlobalHeader from '@/components/Global/Header'
import GlobalFooter from '@/components/Global/Footer'
import { Inter } from 'next/font/google'
import { Brand } from '@/config/const'
import { tw } from '@/shared/lib'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: Brand.Name,
  description: Brand.Tagline,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='antialiased'>
      <head>
        <meta name='theme-color' content='rgb(244 244 245 / 1)' />
      </head>
      <body className={tw(inter.className, 'min-w-[320px] -tracking-base')}>
        <GlobalHeader />
        <main className='pt-12'>{children}</main>
        <GlobalFooter />
      </body>
    </html>
  )
}

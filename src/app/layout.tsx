import { Footer, NavBar } from '@/components/layout'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Ilham Prabaswara | Front-end Developer',
  description:
    'Explore a showcase of my front-end development skills and projects. Discover a collection of web applications, responsive designs, and interactive user interfaces, demonstrating expertise in HTML, CSS, JavaScript, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-sys-light-background font-inter text-sys-light-on-background dark:bg-sys-dark-background dark:text-sys-dark-on-background">
        <div className="px-4 md:px-6">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

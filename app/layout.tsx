import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aden | Personal Portfolio',
  description: 'Aden is a software developer based in Alberta, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gradient-to-b from-indigo-950 to-indigo-900 text-amber-500 relative h-[5000px] pt-28 sm:pt-36 overflow-x-hidden`}>
        <div className='bg-[#2563eb] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#4c1d95] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        
        <ActiveSectionContextProvider>
        <Header />
        <div className="relative">
          {children}
        </div>
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

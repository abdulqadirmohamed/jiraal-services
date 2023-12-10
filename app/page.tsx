import HomePage from '@/components/HomePage'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HomePage/>
      <Partners/>
      <Services/>
    </main>
  )
}

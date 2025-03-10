import CallToAction from './_components/calltoaction'
import Card from './_components/card'
import { Content } from './_components/content'
import Feature from './_components/feature'
import { Hero } from './_components/hero'
import { Services } from './_components/services'
import Zeus from './_components/vagon'


export default function Home() {
  return (
    <main className='font-geist-mono'>

      <Hero />
      <Services />
      <Content />
      <Feature />
      <Zeus />
      <Card />
      <CallToAction />

    </main>
  )
}

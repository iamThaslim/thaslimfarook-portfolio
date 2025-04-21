import { type Metadata } from 'next'

import Contact from '@/components/Contact'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'


export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {

  return (
    <>
      <Container className="mt-0 sm:mt-0 md:mt-0">
        <Contact />
        <Footer />
      </Container>
    </>
  )
}

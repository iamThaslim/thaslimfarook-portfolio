
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'


export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="mt-0 mb-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-0">
          <p className="text-sm text-neutral-700 text-center">
            © Thaslim Farook. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

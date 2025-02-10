import { getIntroData } from '@/actions/landingActions'
import { Button } from '@/components/ui/button'
import { Loader2, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className="w-100 pt-32 flex flex-col justify-center items-center gap-16">
      <div className="w-[700px] flex flex-col items-center justify-center gap-12">
        <Suspense
          fallback={
            <div className="flex flex-col items-center gap-4">
              <p>Loading intro!</p>
              <Loader2 className="animate-spin" />
            </div>
          }
        >
          <Intro />
        </Suspense>
        <Link href="/about">
          <Button>
            <MoveRight />
            Check about
          </Button>
        </Link>
      </div>
    </div>
  )
}

async function Intro() {
  const intro = await getIntroData()
  return (
    <>
      <h1 className="text-6xl font-bold">{intro.title}</h1>
      <p className="text-center">{intro.description}</p>
    </>
  )
}

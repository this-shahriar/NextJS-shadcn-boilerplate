import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-32 flex flex-col justify-center items-center gap-16">
      <Button disabled={false}>Shadcn Button</Button>
      <Link href="/about">
        <Button>
          <MoveRight />
          Check about
        </Button>
      </Link>
    </div>
  )
}

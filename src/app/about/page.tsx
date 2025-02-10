import { Button } from '@/components/ui/button'
import { Loader2, MoveLeft } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Suspense } from 'react'

type Dummy = {
  status: string
  code: number
  locale: string
  seed: boolean
  total: number
  data: DummyData[]
}

type DummyData = {
  id: number
  title: string
  author: string
  genre: string
  description: string
  isbn?: string
  image?: string
  published: string
  publisher: string
}

export default function Page() {
  return (
    <div className="pb-6 w-screen flex flex-col items-center justify-center">
      <div className="pt-16 pb-6 flex flex-col items-center justify-center gap-8">
        <Link href="/">
          <Button>
            <MoveLeft />
            Go back to the main page
          </Button>
        </Link>
      </div>

      <h2 className="text-3xl font-extrabold">List of random stuffs</h2>
      <h4 className="pt-2 pb-6 text-lg">Fetched within a server component</h4>

      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <Books />
      </Suspense>
    </div>
  )
}

async function Books() {
  const dummy = await fetch('https://fakerapi.it/api/v2/books?_quantity=5')
  const data: Dummy = await dummy.json()

  return (
    <div className="w-100 flex flex-col items-center justify-center">
      <div className="pt-6 grid grid-cols-2 gap-4">
        {data?.data?.map((item: DummyData) => (
          <Card key={item.id} className="max-w-sm w-full">
            <CardHeader key={item.id}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.genre}, {item.author}, {item.published}
              </CardDescription>
            </CardHeader>
            <CardContent>{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

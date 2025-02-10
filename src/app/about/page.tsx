import { Button } from '@/components/ui/button'
import { Loader2, MoveLeft } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  isbn: string
  image: string
  published: string
  publisher: string
}

export default function Page() {
  return ( 
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="pt-24 pb-24 flex flex-col items-center justify-center gap-8">
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>This is a dummy about page</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </CardContent>
          <CardFooter>
            <p>Sed ut perspiciatis unde omnis.</p>
          </CardFooter>
        </Card>
        <Link href="/">
          <Button>
            <MoveLeft />
            Go back to the main page
          </Button>
        </Link>
      </div>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <Posts />
      </Suspense>
    </div>
  )
}

async function Posts() {
  const dummy = await fetch('https://fakerapi.it/api/v2/books?_quantity=4')
  const data: Dummy = await dummy.json()

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold">List of random books</h2>
      <h4 className="pt-2 text-lg">Fetched within a server component</h4>
      <div className="pt-12 grid grid-cols-2 gap-4">
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

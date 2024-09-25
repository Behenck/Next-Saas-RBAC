import { Header } from '@/components/header'

export default async function Home() {
  return (
    <div className="space-y-4 p-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <p className="text-sm text-muted-foreground">Select as organization</p>
      </main>
    </div>
  )
}

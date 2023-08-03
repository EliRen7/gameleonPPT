import {GameCard, Hero, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
      <h1 className='text-4xl font-extrabold'>Games</h1>
      <p>Explore the games catalog for your next lesson plan</p>
      </div>
      <div className='home__filters'>
        <SearchBar />
      </div>
   <section>
  <div className='home__games-wrapper'>
  <GameCard />
  </div>
  </section>
      </div>
    </main>
  )
}

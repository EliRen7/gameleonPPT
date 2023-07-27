import { CustomFilter, Hero, SearchBar } from '@/components'
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
        <div className='home__filter-container'>
          <CustomFilter title="skills"/>
          <CustomFilter title="grade"/>

        </div>
      </div>
      </div>
    </main>
  )
}

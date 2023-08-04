import {GameCard, Hero, SearchBar } from '@/components'

export default function Home() {

  const cardData = [
    { title: 'Grab Game',
      description: 'A card game to practice key words',
      imagePath: '/images/grab-game.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening']
    },
    { title: 'Squid Games',
      description: 'An unlock the code game',
      imagePath: '/images/squid-game.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening']
    },
    {
      title: 'Cowboy Showdown',
      description: 'A exhilarating showdown game',
      imagePath: '/images/toy-story.png',
      imageSkills: ['/speaking-icon.svg', '/reading-icon.svg'],
      skills: ['speaking', 'reading']
    },
    {
      title: 'Inside Out',
      description: 'A memory game',
      imagePath: '/images/inside-out.png',
      imageSkills: ['/reading-icon.svg'],
      skills: ['reading']  
    },
    {
      title: 'Vocab in Songs',
      description: 'A guess the lyric game',
      imagePath: '/images/sing.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening']  
    },
    {
      title: 'Letter Drops',
      description: 'A letter game to practice key words',
      imagePath: '/images/letter-drops.png',
      imageSkills: ['/writing-icon.svg'],
      skills: ['writing']  
    },
    {
      title: 'Among Us',
      description: 'A review game to practice all skills',
      imagePath: '/images/among-us.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking']  
    },
    {
      title: 'Frozen Phone Talk',
      description: 'A dialoge type game for conversations',
      imagePath: '/images/frozen.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking']  
    },
    {
      title: 'Brawl Stars',
      description: 'A bomb review game',
      imagePath: '/images/brawl-stars.png',
      imageSkills: ['/reading-icon.svg'],
      skills: ['reading']  
    },
    {
      title: 'Battle Ninjas',
      description: 'A bingo type game',
      imagePath: '/images/battle-ninja.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening']  
    },
    {
      title: 'Clash Royale',
      description: 'A bomb game to review lesson',
      imagePath: '/images/clash-royale.png',
      imageSkills: ['/writing-icon.svg'],
      skills: ['writing']  
    },
    {
      title: 'Donkey-Kong',
      description: 'A fun writing game',
      imagePath: '/images/donkey-kong.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking']  
    },
    {
      title: 'MineCraft-Maze',
      description: 'A bomb game to review lesson',
      imagePath: '/images/minecraft-maze.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening']  
    },  
  ]

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
  {cardData.map((game, index) => (
  <GameCard 
  key={index} 
  title={game.title} 
  description={game.description}
  imagePath={game.imagePath} 
  imageSkills={game.imageSkills}
  skills={game.skills}
  />
  ))}
  </div>
  </section>
      </div>
    </main>
  )
}

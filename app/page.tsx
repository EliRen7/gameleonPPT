import {GameCard, Hero, SearchBar } from '@/components'

export default function Home() {

  const cardData = [
    { title: 'Grab Game',
      description: 'A card game to practice key words',
      imagePath: '/images/grab-game.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening'],
      modal: 'Students play in pairs. Each pair will have a set of cards that relate to the target language or vocabulary. The teacher will say a word or sentence. Students listen carefully and try to grab the correct card before their partner. The student with the most cards at the end wins!',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    { title: 'Squid Games',
      description: 'An unlock the code game',
      imagePath: '/images/squid-game.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening'],
      modal: 'Play this game individually. Each student gets a game sheet. After the laser sound, the teacher will speak. Remember the order the teacher spoke and when the song begins, students write the code. Students who finish on time and write the correct code get a point.',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Cowboy Showdown',
      description: 'A exhilarating showdown game',
      imagePath: '/images/toy-story.png',
      imageSkills: ['/speaking-icon.svg', '/reading-icon.svg'],
      skills: ['speaking', 'reading'],
      modal: 'Divide your class into teams. Each round, one student from each team stands up and faces away from the screen. When the teacher says, "Showdown!" they turn around and look at the screen. The first student to read the word or sentence gets a point for the team.',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Inside Out',
      description: 'A memory game',
      imagePath: '/images/inside-out.png',
      imageSkills: ['/reading-icon.svg'],
      skills: ['reading'],
      modal: 'Play the game in teams or individually. Students will have to find the matching character under the squares by saying the key word/expression to reveal it. The point chart is included in the template. Team/Students with the most points at the end of the game win!', 
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Vocab in Songs',
      description: 'A guess the lyric game',
      imagePath: '/images/sing.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening'],
      modal: 'Play the game individually or as a team. Students listen to a song and try to hear the vocabulary word that completes the verse. Teacher will then reveal the answer. Correct student or team gets a point.',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Letter Drops',
      description: 'A letter game to practice key words',
      imagePath: '/images/letter-drops.png',
      imageSkills: ['/writing-icon.svg'],
      skills: ['writing'],
      modal: 'Play this game individually. The students will watch carefully as letters fall from the sky. Each student will have to unscramble the word and write it down in their notebook before the letters disappear from the screen. Students with the correct spelling get a point.',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Among Us',
      description: 'A review game to practice all skills',
      imagePath: '/images/among-us.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking'],
      modal: 'Split the class into 2 teams. One student from each team will ask the key question and the other student will answer (switch roles next round). They will play rock, paper, scissors and the winner gets the corresponding points for their team. Team with the most points wins!',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Frozen Phone Talk',
      description: 'A dialoge type game for conversations',
      imagePath: '/images/frozen.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking'],
      modal: 'Divide the class into 5 teams. Team A will choose a number to dial on their Frozen team phone. Team A will call another team. Both teams will say their dialogue. Team A then chooses box 1 or 2 to take them to the points slide. Team B will then go next and so on.',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },

    {
      title: 'Brawl Stars',
      description: 'A bomb review game',
      imagePath: '/images/brawl-stars.png',
      imageSkills: ['/reading-icon.svg'],
      skills: ['reading'],
      modal: 'Split the class into 2 teams. One student from each team will ask the key question and the other student will answer (switch roles next round). They will play rock, paper, scissors and the winner gets the corresponding points for their team. Team with the most points wins!',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Battle Ninjas',
      description: 'A bingo type game',
      imagePath: '/images/battle-ninja.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening'],
      modal: 'Students play individually. Each student gets a bingo sheet and they draw 12 ninjas in any square on their sheet. The teacher will say two senteces. Student listen carefully and cross out the squares that the teacher says. The student with the most ninjas wins!',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },
    {
      title: 'Donkey-Kong',
      description: 'A fun writing game',
      imagePath: '/images/donkey-kong.png',
      imageSkills: ['/speaking-icon.svg'],
      skills: ['speaking'],
      modal: 'Game is played individually. Each student chooses a word or phrase that makes a complete sentence. Points depend on whether the student chose the path that creates a grammatically correct sentence. *writing sheet not included*',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'  
    },
    {
      title: 'MineCraft-Maze',
      description: 'A bomb game to review lesson',
      imagePath: '/images/minecraft-maze.png',
      imageSkills: ['/listening-icon.svg'],
      skills: ['listening'],
      modal: 'Split the class into 2 teams. First team chooses a path by reading a sentence/image. If the path is right, the team advances to the next stage. If it is wrong, the other team goes. At the end of each round, there is treasure. Team with the most points wins!',
      link: 'https://1drv.ms/p/s!AugZo2FEMtwQj1Ki8K8tFd7nb4CC?e=zBWhcp'
    },  
  ]

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
      <h1 className='text-4xl font-extrabold'>Games</h1>
      <p>Explore the games catalog with ease</p>
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
  modal={game.modal}
  link={game.link}
  />
  ))}
  </div> 
  </section>
      </div>
    </main>
  )
}

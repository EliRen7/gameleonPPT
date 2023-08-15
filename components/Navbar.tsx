import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 '>
      <nav className='max-w-[1440px] mx-auto gap-2 md:gap-0 flex justify-between items-center sm:px-16 px-6 py-4'>
        <a href='#about' className='smooth'>About</a>
        <a href='#contact' className='smooth'>Contact</a>
        <a href='#game-card-section' className='smooth'>Games</a>
        <a href='#teacher-resources' className='smooth'>Teacher Resources</a>
      <Link href='/' className='flex justify-center items-center'> 
        <Image 
        src='/chameleon.png'
        alt='Gameleon PPT games'
        width={118}
        height={18}
        className='object-contain transform -scale-x-100'
        />
      </Link>
      </nav>

    </header>
  )
}

export default Navbar
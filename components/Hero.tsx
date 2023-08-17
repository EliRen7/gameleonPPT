'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';



const Hero = () => {
  const handleScroll = () => {
    const gameCardSection = document.getElementById('game-card-section');
    if (gameCardSection) {
      gameCardSection.scrollIntoView({ behavior: 'smooth' });
    }   
  }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title '>
            Gameleon provides fun, fast, and free
            PowerPoint game templates for foreign language educators
            </h1>
            <p className='hero__subtitle'>
                Download an editable game template for your next lesson plan today! 
            </p>
            <CustomButton 
              title="Explore Games"
              containerStyles="bg-yellow-400
              text-white rounded-full mt-10"
              handleClick={handleScroll}  
              link="" 
              />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero-image.png" alt='chameleon' fill className='object-contain mt-10' />
          </div>
        </div>
    </div> 
  )
}

export default Hero



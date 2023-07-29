'use client'
import {useState} from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import GameDetails from './GameDetails'

const GameCard = () => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='game-card group'>
      <div className='game-card__content'>
    <h2 className='game-card__content-title'>Grab Game</h2>

      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          A card game to practice key vocab words
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image 
        src= '/grab-game.png'
        alt='grab-game'
        fill
        priority
        className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
          <Image 
            src="/listening-icon.svg"
            width={20}
            height={20}
            alt='listening icon'
          />
          <p className='text-[14px]'>Listening</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
          <Image 
            src="/speaking-icon.svg"
            width={20}
            height={20}
            alt='speaking icon'
          />
          <p className='text-[14px]'>Speaking</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
          <Image 
            src="/reading-icon.svg"
            width={20}
            height={20}
            alt='reading icon'
          />
          <p className='text-[14px]'>Reading</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
          <Image 
            src="/writing-icon.svg"
            width={20}
            height={20}
            alt='writing icon'
          />
          <p className='text-[14px]'>Writing</p>
          </div>
        </div>
          <div className='game-card__btn-container'>
          <CustomButton 
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-lime-500'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
          </div>
      </div>
      <GameDetails />
    </div>
  )
}

export default GameCard
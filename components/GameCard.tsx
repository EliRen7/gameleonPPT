'use client'
import {useState} from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import GameDetails from './GameDetails'
import { GameCardProps } from '@/types'

const GameCard = ({title, description, imagePath, imageSkills, skills, modal, link} : GameCardProps ) => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='game-card group'>
      <div className='game-card__content'>
    <h2 className='game-card__content-title'>{title}</h2>

      </div>
      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          {description}
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image 
        src= {imagePath}
        alt= {title}
        fill
        priority
        className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
        <div className='flex flex-col justify-center items-center gap-2 '>
         {imageSkills.map((imageSkills, index) => (
          <Image 
            src={imageSkills}
            width={20}
            height={20}
            alt={`${title} Image ${index + 1}`}
            className=''
          />
          ))}
          <p className='text-[14px]'>{skills}</p>
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
      <GameDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        title={title} description={''} imagePath={imagePath} imageSkills={[]} skills={[]} modal={modal} link={link}    />
    </div>
    
  )
}

export default GameCard

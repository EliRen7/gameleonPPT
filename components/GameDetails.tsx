"use client"
import Image from 'next/image';
import {Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react';
import CustomButton from './CustomButton'
import GameCard from './GameCard';
import { GameCardProps } from '@/types';


interface GameDetailsProps extends GameCardProps{
  isOpen: boolean;
  closeModal: () => void;
}

const GameDetails = ({isOpen,closeModal,title, imagePath}: GameDetailsProps) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom='opacity-0'
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
          <div className='fixed inset-0 bg-black bg-opacity-25'></div>
      </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center 
          justify-center p-4 text-center'>
             <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom='opacity-0 scale-95'
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
      >
        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] 
        overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl
        transition-all flex flex-col gap-5 p-6">
          <button 
          type='button'
          className='absolute top-2 right-2 z-10 w-fit
          p-2 bg-primary-blue-100 rounded-full'
          onClick={closeModal}
          >
          <Image
            src="/close.svg"
            alt="close"
            width={20}
            height={20}
            className='object-contain'
          />
          </button>
      <div className='flex-1 flex flex-col gap-3'>
    <div className='relative w-full h-40 bg-teal-500 bg-cover bg-center rounded-lg'>
    <Image 
        src= {imagePath}
        alt= {title}
        fill
        priority
        className='object-contain'
        />
    </div>
    <div className='flex gap-3'>
      <div className='flex-1 relative w-full h-24 rounded-lg'>
      <CustomButton 
            title='Download'
            containerStyles='w-full py-[16px] rounded-full bg-blue-800'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
          />
      </div>
    </div>
      </div>
        <div className='flex-1 flex flex-col gap-2'>
      <h2 className='font-semibold text-xl capitalize'>{title}</h2>
        </div>
        <div className='flex flex-wrap gap-4'>
        <p className='text-justify'>Students play in pairs. Each pair will have a set of cards that relate to the target language or vocabulary. The teacher will say a word or sentence. Students listen carefully and try to grab the correct card before their partner. The student with the most cards at the end wins!</p>
        </div>
        </Dialog.Panel>
      </Transition.Child>
          </div>
            
        </div>

      </Dialog>
    </Transition>
    
    
    </>
  )
}

export default GameDetails
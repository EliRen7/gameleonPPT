'use client'

import { SearchGameProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearchGame = ({game, setGame} : SearchGameProps) => {
  return (
    <div className='search-game'>SearchGame
    <Combobox>
      <div className='relative w-full'>
        </div>  
    </Combobox>
    </div>

  )
}

export default SearchGame
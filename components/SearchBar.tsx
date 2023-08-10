// 'use client'
// import Image from 'next/image'
// import React, {useState} from 'react';
// import { useRouter } from 'next/navigation';
// import SearchGame from "./SearchGame"


// const SearchButton = ({otherClasses}: {otherClasses:
// string}) => (
//   <button 
//   type='submit' 
//   className={`-ml-3 z-10  ${otherClasses}`}>
//     <Image 
//       src="/magnifying-glass.svg"
//       alt="magnifying glass"
//       width={40}
//       height={40}
//       className="object-contain mb-5"
//     /> 
//   </button>
// )

// const SearchBar = () => {
// const [game, setGame] = useState('')
// const router = useRouter()

// const handleSearch = (e: React.
//   FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(game.trim() === ""){
//       return alert("Please fill in the search bar")
//     }
//     updateSearchParams(game.toLowerCase())
//   };
//   const updateSearchParams = (game: string) => {
//     const searchParams = new URLSearchParams(window.location.search);

//     if(game){
//       searchParams.set('game', game)
//     }else{
//       searchParams.delete('game')
//     }
//     const newPathname= `${window.location.pathname}?${searchParams.toString()}`;

//     router.push(newPathname)
//   }
//   return (
//     <form className='searchbar' onSubmit={handleSearch}>
//      <div className="searchbar__item">
//     <SearchGame
//      game = {game}
//      setGame = {setGame}
//     />
//     <SearchButton otherClasses = " "/>
//      </div>
//     </form>
//   )
// }

// export default SearchBar
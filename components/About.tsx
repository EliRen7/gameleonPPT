import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
  <div className="card lg:card-side bg-base-100 md:ml-auto md:mt-32" id='about'>
  <figure>
    <Image 
        src="/origamitree.png"  
        alt="origami tree"
        fill
        className='object-contain object-left p-20 invisible md:visible'
    />
    </figure>
  <div className="card-body md:ml-[32rem] md:mr-5">
    <h2 className="card-title text-3xl">About Gameleon</h2>
    <p className='text-justify text-lg' >Hi, my name is Elizabeth and I moved abroad to South Korea to teach English to Elementary school students. I created Gameleon to provide fun, fast, and free PowerPoint game templates for foreign language educators. The game templates are for educational, non-commercial purposes only. They are unoffical and designed for personal use only. I decided to share the games that I utilize for my classroom lesson plans as a way to give back to the ESL/EFL teaching community. All the resources that were immediately available for me to use when I first started teaching helped me tremendously and I wanted to create an additional online resource for incoming and current teachers. These online resources were the inspiration for me to create Gameleon from scratch so that I could also start a collection of the games that my students really enjoy to play in the classroom. The game templates are easily-editable and free to download.
<br></br>The templates included in Gameleon are all designed to encourage student interactive participation while also providing immersive game features. The goal is to help students develop a positive feeling for attending class. In my experience, the design and features have successfully helped students get excited about learning the lesson topics. The games are intended to not only help teachers incorporate new ideas with the games in their lesson planning but to also motivate students to continue to learn outside of the classroom. These games can help students realize that learning a new language does not have to be boring and difficult but that it can be fun and simple with the right tools and guidance.</p>
<br></br>
<p>"To learn a new language is to have one more window from which to look at the world" -Chinese Proverb</p>
  </div>
</div>
  )
}

export default About
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="card lg:card-side bg-base-100 pt-20 ml-32">
  <figure>
    <Image 
        src="/origamitree.png"  
        alt="origami tree"
        width= {1200}
        height= {900}
    />
    </figure>
  <div className="card-body ml-72">
    <h2 className="card-title">About Gameleon</h2>
    <p>Learn more about the creation of Gameleon</p>
    <p className='justify-center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem tempore perferendis cumque<br></br> quae quisquam nemo voluptatibus commodi ut voluptatum pariatur quia eos modi dolor
    , praesentium ratione accusantium quas qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis architecto nostrum blanditiis fugiat exercitationem sint recusandae, numquam consequatur voluptatem alias repellendus molestiae 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum laboriosam dicta excepturi ab ullam asperiores esse perspiciatis id similique assumenda, at fugit. Quasi perferendis earum, enim distinctio aspernatur recusandae voluptatum!voluptates placeat quibusdam, incidunt excepturi, eaque deleniti minima.</p>
  </div>
</div>
  )
}

export default About
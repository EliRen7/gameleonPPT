import React from 'react'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className="overflow-x-auto relative p-5 mt-10 md:p-32 md:mt-40" id='teacher-resources'>
      <section className='mb-20'>
      <div className='text-center text-indigo-500'>
      <h1 className='text-5xl font-extrabold font-teacher'>Teacher Resources</h1>
      <p className='md:text-lg md:pb-5'>Explore additional teacher resources that are making a great impact in the classroom everyday</p>
      </div>
    <Image 
    src='/computer2.png'
    fill
    className='object-contain invisible md:visible'
    alt='computer'
    /> 
  <div className="overflow-x-auto flex">
  <table className="table md:w-[51rem] md:text-lg bg-yellow-400 text-base-100 md:ml-56">
    <thead>
      <tr className='md:text-lg'>
        <th>Name</th>
        <th>Description</th>
        <th>Website Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Slidesmania</td>
        <td>Free PPT templates and Google slides</td>
        <td><a href='https://slidesmania.com/' target='_blank'>Click Here</a></td>
      </tr>
      <tr>
        <td>Teachers Pay Teachers</td> 
        <td>PreK-12 resources</td>
        <td><a href='https://www.teacherspayteachers.com/' target='_blank'>Click Here</a></td>
      </tr>
      <tr>
        <td>Korshare</td>
        <td>Foreign Teacher File Sharing</td>
        <td><a href='https://korshare.jcink.net/index.php?act=idx' target='_blank'>Click Here</a></td>
      </tr>
       <tr>
        <td>Twinkl</td>
        <td>Printable and digital materials</td>
        <td><a href='https://www.twinkl.com/' target='_blank'>Click Here</a></td>
      </tr>
    </tbody>
  </table>
</div>
</section>
</div>
  )
}

export default Resources



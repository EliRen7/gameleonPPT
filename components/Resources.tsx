import React from 'react'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className="overflow-x-auto relative p-32 mt-40" id='teacher-resources'>
      {/* <Image 
    src='/chameleon.png'
    width={100}
    height={100}
    className='object-contain ml-80'
    alt='computer'
    /> */}
      <section className='mb-20'>
      <div className='text-center text-indigo-500'>
      <h1 className='text-5xl font-extrabold font-teacher'>Teacher Resources</h1>
      <p className='text-lg pb-5'>Explore additional teacher resources that are making a great impact in the classroom everyday</p>
      </div>
    <Image 
    src='/computer2.png'
    fill
    className='object-contain'
    alt='computer'
    /> 
  <div className="overflow-x-auto flex">
  <table className="table w-[51rem] ml-[14rem] text-lg bg-yellow-400 text-base-100">
    <thead>
      <tr className='text-lg'>
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



{/* <table className="table w-[51rem] ml-[9rem] text-lg bg-yellow-400 text-white">
    <thead>
      <tr>
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
  </table> */}
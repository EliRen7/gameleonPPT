import React from 'react'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className="overflow-x-auto relative p-52 mt-40" id='teacher-resources'>
    <Image 
    src='/computer2.png'
    fill
    className='object-contain '
    alt='computer'
    /> 
  <div className="overflow-x-auto">
  <table className="table w-[50rem] ml-40 text-lg">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Website Link</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Slidesmania</td>
        <td>Free PPT templates and Google slides</td>
        <td><a href='https://slidesmania.com/' target='_blank'>Click Here</a></td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Teachers Pay Teachers</td>
        <td>PreK-12 resources</td>
        <td><a href='https://www.teacherspayteachers.com/' target='_blank'>Click Here</a></td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>Korshare</td>
        <td>Foreign Teacher File Sharing</td>
        <td><a href='https://korshare.jcink.net/index.php?act=idx' target='_blank'>Click Here</a></td>
      </tr>
       {/* row 4 */}
       <tr>
        <td>Twinkl</td>
        <td>Printable and digital materials</td>
        <td><a href='https://www.twinkl.com/' target='_blank'>Click Here</a></td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  )
}

export default Resources
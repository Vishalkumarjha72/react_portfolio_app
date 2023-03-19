import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen  md:w-full bg-gradient-to-b from-gray-800 to-black py-6'>
      <div className='md:items-start md:w-full items-start h-full pt-0 md:pt-16 flex flex-col gap-24 md:px-40 px-12'>
       <h1 className='text-white text-4xl items-start border-b-4 border-gray-500 font-semibold'> About </h1>
       <p className='text-base md:text-xl font-semibold text-white '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, odio assumenda? Sapiente doloremque dolores quasi maiores, harum, nemo a autem neque dolorem reprehenderit ratione impedit eum amet voluptas expedita optio atque recusandae quo magnam, ipsa ab quibusdam tempore quae cumque. Qui harum voluptatem ab praesentium quisquam tenetur molestiae voluptatum exercitationem explicabo animi aspernatur inventore voluptatibus, laboriosam ea accusamus dolor maiores. Amet iste voluptatem nemo repellat illo. Neque possimus maxime eligendi libero quod distinctio quam doloremque.
       </p>
      </div>
    </div>

  )
}

export default About
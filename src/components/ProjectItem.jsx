import React from 'react'

const ProjectItem = ({ img, title, skills_used, description, link }) => {
  return (
    <div className='relative flex items-center justify-center h-80 w-full max-w-lg shadow-xl shadow-black rounded-xl overflow-hidden group hover:bg-gradient-to-r from-black to-[#001b5e] transition duration-500'>
      <img src={img} alt={title} className='w-full h-full object-cover rounded-xl group-hover:opacity-10 transition duration-500' />
      <div className='absolute inset-0 flex items-center justify-center p-4'>
        <div className='text-center bg-black bg-opacity-70 p-4 rounded-lg hidden group-hover:block transition duration-500'>
          <h3 className='text-2xl font-extrabold text-white tracking-wider mb-2'>
            {title}
          </h3>
          <p className='text-white font-bold mb-2'>{skills_used}</p>
          <p className='text-white mb-4'>{description}</p>
          <a href={link}>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Visit Project</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem

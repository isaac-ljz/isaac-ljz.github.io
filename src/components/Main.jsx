import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bgIMG from '../assets/bg-en2c.png'

const Main = () => {
  return (
    <div id='main' className='relative w-full h-screen'>
      {/* Background Image Layer with Fade-out Effect */}
      <div className='absolute w-full h-full top-0 left-0 bg-cover bg-center fade-out' style={{ backgroundImage: `url(${bgIMG})` }}></div>
      
      {/* Overlay Layer */}
      <div className='absolute w-full h-full top-0 left-0'></div>

      {/* Content Layer */}
      <div className='relative w-full h-full flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] lg:pr-144 pr-40'>
          <h1 className='sm:text-5xl text-4xl font-extrabold text-white'>Isaac J Lo</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'>
            I'm
            <TypeAnimation
              sequence={[
                'a Developer',
                2000,
                'a Student',
                2000,
                'an Engineer',
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex pt-5'>
            <a href="https://www.linkedin.com/in/isaac-lo-jz/">
              <FaLinkedin className='cursor-pointer mr-5' size={30} />
            </a>
            <a href="https://github.com/isaac-ljz">
              <FaGithub className='cursor-pointer' size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

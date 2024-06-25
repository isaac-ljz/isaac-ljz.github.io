import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import { FaGraduationCap } from 'react-icons/fa'
import { DiCodeBadge } from "react-icons/di"

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick = {handleNav} color='white' className= 'absolute top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-110 ease-in duration-200'/>
      {
        nav ? (
          <div className = 'fixed w-full h-screen flex flex-col justify-center items-center z-20 '>
            <a onClick={handleNav}
              href = '#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size = {20} />
              <span className = 'pl-4'>Home</span>
            </a>
            <a onClick={handleNav}
             href = '#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <DiCodeBadge size = {20} />
              <span className = 'pl-4'>Skills</span>
            </a>
            <a onClick={handleNav}
             href = '#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size = {20} />
              <span className = 'pl-4'>Projects</span>
            </a>
            <a onClick={handleNav}
             href = '#timeline' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaGraduationCap size = {20} />
              <span className = 'pl-4'>Education</span>
            </a>
            {/*<a onClick={handleNav}
             href = '#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size = {20} />
              <span className = 'pl-4'>Resume</span>
            </a>*/}

          </div>
        ) : (
         ''
        ) }
          <div className='md:block hidden fixed top-[25%] z-10'>
            <div className = 'flex flex-col'>
              <div className='flex flex-col relative group'>
                <a href = "#main" className='rounded-full shadow-lg bg-gray-900 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineHome size={20} color='white'/>
                </a>
                <span className='absolute right-0 transform translate-x-12 bottom-1/3 bg-gray-800 shadow-lg shadow-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Home
                </span>
              </div>
              <div className='flex flex-col relative group'>
                <a href = "#skills" className = 'rounded-full shadow-lg bg-gray-900 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <DiCodeBadge size={20} color='white'/>
                </a>
                <span className='absolute -right-3 transform translate-x-8 bottom-1/3 bg-gray-800 shadow-lg shadow-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Skills
                </span>
              </div>
              <div className='flex flex-col relative group'>
                <a href = "#projects" className = 'rounded-full shadow-lg bg-gray-900 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <GrProjects size={20} color='white'/>
                </a>
                <span className='absolute -right-3 transform translate-x-12 bottom-1/3 bg-gray-800 shadow-lg shadow-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Projects
                </span>
              </div>
              <div className='flex flex-col relative group'>
                <a href = "#timeline" className = 'rounded-full shadow-lg bg-gray-900 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGraduationCap size={20} color='white'/>
                </a>
                <span className='absolute -right-6 transform translate-x-12 bottom-1/3 bg-gray-800 shadow-lg shadow-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Education
                </span>
              </div>
              {/*
              <a href = "#resume" className = 'rounded-full shadow-lg bg-gray-900 shadow-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson size={20} color='white'/>
              </a>*/}

            </div>
          </div>
    </div>
  );
};

export default Sidenav
import React from 'react'
import PySVG from '../assets/Languages/python.svg'
import CppSVG from '../assets/Languages/c-plusplus.svg'

const Languages = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 lg:pl-0 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center mb-4'>
            Skills
        </h1>
        <div>
            <center className='flex justify-center'>
                <img src={PySVG} className='m-4 size-20 img-fluid' alt="svg image" />
                <img src={CppSVG} className='m-4 size-20 img-fluid' alt="svg image" />
                <img src="src\assets\Languages\java.svg" className='m-4 size-20 img-fluid' alt="svg image" />
                <img src="src\assets\Languages\javascript.svg" className='m-4 size-20 img-fluid' alt="svg image" />
                <img src="src\assets\Languages\css-3.svg" className='m-4 size-20 img-fluid' alt="svg image" />
                <img src="src\assets\Languages\html-5.svg" className='m-4 size-20 img-fluid' alt="svg image" />
            </center>
        </div>
        <div className='flex justify-center '>
            <img src="src\assets\Languages\pytorch-icon.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\tensorflow-icon.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\opencv-icon.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\Pandas-icon.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\react.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\numpy.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src="src\assets\Languages\Matplotlib-icon.svg" className='m-4 size-18 img-fluid' alt="svg image"/>
            
        </div>
    </div>
  )
}

export default Languages
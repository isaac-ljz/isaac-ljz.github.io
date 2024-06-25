import React from 'react'
import PySVG from '../assets/Languages/python.svg'
import CppSVG from '../assets/Languages/c-plusplus.svg'
import JavaSVG from '../assets/Languages/java.svg'
import JSSVG from '../assets/Languages/javascript.svg'
import CssSVG from '../assets/Languages/css-3.svg'
import HtmlSVG from '../assets/Languages/html-5.svg'
import PytorchSVG from '../assets/Languages/pytorch-icon.svg'
import TfSVG from '../assets/Languages/tensorflow-icon.svg'
import OpenSVG from '../assets/Languages/opencv-icon.svg'
import pdSVG from '../assets/Languages/Pandas-icon.svg'
import reactSVG from '../assets/Languages/react.svg'
import npSVG from '../assets/Languages/numpy.svg'
import matSVG from '../assets/Languages/Matplotlib-icon.svg'

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
                <img src={JavaSVG} className='m-4 size-20 img-fluid' alt="svg image" />
                <img src={JSSVG} className='m-4 size-20 img-fluid' alt="svg image" />
                <img src={CssSVG} className='m-4 size-20 img-fluid' alt="svg image" />
                <img src={HtmlSVG} className='m-4 size-20 img-fluid' alt="svg image" />
            </center>
        </div>
        <div className='flex justify-center '>
            <img src={PytorchSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={TfSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={OpenSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={pdSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={reactSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={npSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            <img src={matSVG} className='m-4 size-18 img-fluid' alt="svg image"/>
            
        </div>
    </div>
  )
}

export default Languages
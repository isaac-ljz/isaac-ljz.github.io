import React from 'react'
import ProjectItem from './ProjectItem'
import FRFImg from '../assets/f0001.jpg'
import MLEImg from '../assets/MLE.png'
import VideoPanoramaStitch from '../assets/VideoPanoramaStitch.png'
import DFImg from '../assets/Domain Fusion.png'
// find more photos or maybe use youtube videos

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto lg:pl-4 md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center '>Projects</h1>
        <p className='text-center py-8'>
            Hover over for more info!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={DFImg} title='Object Placer' skills_used={'Python'} description={'A program that places an object from one image into another image and blends it in using gradient domain fusion'} link={'https://github.com/isaac-ljz/Gradient-Domain-Fusion/tree/main'}/>
            <ProjectItem img={FRFImg} title='Face Swap Filter' skills_used={'Python'} description={'A face swap filter using facial detection that takes one video with one face and an image of another face'} link={'https://github.com/phan603/CS445-final-project'}/>
            <ProjectItem img={VideoPanoramaStitch} title='Video Panorama Stitching' skills_used={'Python'} description={'A program that takes a panning video and creates a panorama accounting for perspective warping'} link={'https://github.com/isaac-ljz/Video-Panorama-Stitching'}/>
            <ProjectItem img={MLEImg}   title={<>Coming Soon:<br />Hot Dog Not Hot Dog</>} skills_used={'Python'} description={'Inspired by a recent watch of the show Silicon Valley, This is a Convolutional Neural Network trained to detect whether an image is Hot Dog or not Hot Dog'}/>
        </div>
    </div>
  )
}

export default Projects
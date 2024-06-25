import React from 'react'
import TimeItem from './TimeItem'

const data = [
    {
        year: "2024-26",
        title: 'Georgia Institute of Technology',
        duration: 'M.S. in Computer Science ',
        details:
        'Specialization in Machine Learning <br/> Starting in Fall 2024!'
    },
    {
        year: "2020-24",
        title: 'University of Illinois at Urbana-Champaign',
        duration: 'Mechanical Engineering | Computer Science Minor',
        details:
        'Relevant Coursework: Data Structures, Numerical Methods, Computational Photography, Object-Oriented Programming, Signal Processing, Data Science in Manufacturing Qualtiy Control, Mechanical Design'
    },
    {
        year: "2016-20",
        title: '49ers STEM Leadership Institute',
        duration: '',
        details:
        'Multi-year program academic program focused on developing leaders in STEM through hands-on projects, competitions, and 300 hours of enrichment courses a year. '
    },
    {
        year: "2016-20",
        title: 'Santa Clara High School',
        duration: '',
        details:
        'Relevant Coursework: AP Computer Science A, AP Computer Science Principles, AP Calculus BC, AP Research, AP Seminar, AP Physics I, AP Physics C, AP Statistics'
    }
    
]
const Timeline = () => {
  return (
    <div id='timeline' className='max-w-[1040px] m-auto md:pl-20 lg:pl-4 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center  py-4'>
            Education
        </h1>
        {data.map((item,idx)=> (
            <TimeItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
        ))}
    </div>
  )
}

export default Timeline
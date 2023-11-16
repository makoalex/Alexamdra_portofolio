import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/Image1.png'
import Img2 from '../assets/img2.png'

export default function Work() {
  return (
    <div className='section'id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/** text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My latest <br/>work</h2>
            <p className='max-w-sm mb-16'>  Using JavaScript for both front-end and back-end development,
              creating dynamic and cohesive web applications that seamlessly
              integrate user interfaces, server logic, and databases.</p>
              <button className="button-header btn-sm btn mb-7">View All Projects</button>
          </div>
          {/** image */}
          <div className='group relative overflow-hidden border-2 border-white/40 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src={Img1} alt='project image 1' className='mix-blend-lighten group-hover:scale-125 transition-all duration-500'/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient '> Next.js/ UI design</span>
             </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Pendel Hub</span>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col '>
          {/** image */}
        <div className='group relative overflow-hidden border-2 border-white/40 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src={Img2} alt='project image 1' className='mix-blend-lighten group-hover:scale-125 transition-all duration-500'/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient '> Next.js/ UI design</span>
             </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Reserve Eats</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

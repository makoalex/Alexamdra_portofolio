import React from 'react';
import Avatar from '../assets/avatar2.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



export default function test() {
  return (
    <section className="min-h-[85vh] lg:min-h-[75vh] flex items-center " id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left lg:-mt-[35px]'>
            <h1 className='text-[35px] mt-[10px] font-bold leading-[0.8] lg:text-[55px] '>
              ALEXANDRA <span>MACOVEI</span>
            </h1>
            <div className="mb-6 text-[30px] lg:text-[50px] font-secondary uppercase leading-[1]">
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'CSS addict',
                  2000,
                  'Avid Learner',
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 text-[15px] mx-w-lg mx-auto lg:mx-0'>
              Ahoy! I'm the CSS whisperer, the React rascal, and the Next.js
              ninja all rolled into one package! When I'm not making pixels
              swirl with Tailwind or CSS, I'm on the JS joyride!
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className="button-header">Get in touch</button>
              <a href="#" className="text-gradient btn-link">
                My Portofolio
              </a>
            </div>
            <div className='flex text-[20px]  gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='#'>
                    <FaGithub/>
                </a>
                <a href='#'>
                    <FaLinkedin/>
                </a>
            </div>
          </div>
          <div>
            <img src={Avatar} className='w-[300px] h-[350px]' />
          </div>
        </div>
      </div>
    </section>
  );
}

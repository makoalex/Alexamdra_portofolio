import React from 'react';
import Avatar from '../assets/avatar2.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function Banner() {
  return (
    <div className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <hi1>
              ALEXANDRA <span>MACOVEI</span>
            </hi1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary  uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'CSS Addict',
                2000,
                'Passionate Learner'
              ]}
              speed={40}
              className=' text-accent '
              wrapper='span'
              repeat={Infinity}
              />
            </div>
            <p>
            Ahoy! I'm the CSS whisperer, the React rascal, and the Next.js ninja all rolled into one package!
            When I'm not making pixels swirl with Tailwind or CSS, I'm on the JS joyride! My learning curve? Super steep!
            But hey, the more, the merrier—I'm the ultimate team-player, like a pirate with a its crew! 
            </p>
          </div>
          <div>
            <img className="w-[300px] h-[350px]" src={Avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

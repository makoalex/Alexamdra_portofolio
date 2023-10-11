import React from 'react';
import Avatar from '../assets/avatar2.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function test() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:mt-24 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px]   font-bold leading-[0.8] lg:text-[55px] "
            >
              ALEXANDRA <span>MACOVEI</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
        
              className="mb-6 text-[30px] lg:text-[50px] font-secondary uppercase leading-[1] "
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'CSS addict',
                  2000,
                  'Learner',
                  2000
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 text-[20px] mx-w-lg mx-auto lg:mx-0"
            >
              Ahoy! I'm the CSS whisperer, the React rascal, and the Next.js
              ninja all rolled into one package! When I'm not making pixels
              swirl with Tailwind or CSS, I'm on the JS joyride!
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="button-header btn-sm btn">Get in touch</button>
              <a href="#" className="text-gradient btn-link">
                My Portofolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className="flex text-[20px]  gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div   variants={fadeIn('down', 0.5)}
              initial='hidden'
              whileInView={'show'}
            ƒ className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]">
            <img src={Avatar} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function About() {
  const [ref, inVew] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-32 lg:gap-y-0 h-screen'>
          <div className="flex-1 mr-6 bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top"></div>
          <div className='flex-1'>
            <h2 className='h2 text-accent mt-24'>About me</h2>
            <h3 className='h3 mb-3'>
              I'm a fullstack Javascript developer, with a passion for
              Front-end.{' '}
            </h3>
            <p className='mb-6'>
              Using JavaScript for both front-end and back-end development,
              creating dynamic and cohesive web applications that seamlessly
              integrate user interfaces, server logic, and databases.
            </p>
            <div className=' flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='font-[40px] font-tertiary text-gradient'>
                  {inVew? <CountUp start={0} end={14} duration={3} /> :null}
                </div>
                <div className=' font-secondary text-sm tracking-[2px]'>
                  Git <br />
                Repositories
                </div>
              </div>
              <div>
                <div className='font-[40px] font-tertiary text-gradient'>
                  {inVew? <CountUp start={0} end={5} duration={3} /> :null}
                </div>
                <div className=' font-secondary text-sm tracking-[2px]'>
                  Bootcamps <br />
                Completed
                </div>
              </div>
            </div>
            <div className='flex gap-8 items-center'>
            <button className='button-header btn-sm btn btn-xs '>Get in touch</button>
            <a href='#' className='text-gradient btn-link'>My Portofolio</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

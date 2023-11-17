import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import about from '../assets/alex1.png'


export default function About() {
  const [ref, inVew] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col h-full gap-y-6 lg:flex-row lg:items-center lg:gap-x-32 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
           className="flex-1 justify-center lg:mr-11  bg-cover bg-no-repeat mix-blend-lighten lg:h-[400px]">
            <img src={about} className=" bg-contain align-middle "/>
           </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me</h2>
            <h3 className="h3 mb-3">
              I'm a fullstack Javascript developer, with a passion for
              Front-end.{" "}
            </h3>
            <p className="mb-6">
              Using JavaScript/Typescript for both front-end and back-end development,<br/>
              I'm dedicated to staying at the forefront of innovation and continuously expanding my knowledge.
            </p>
            <div className=" flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="font-[40px] font-tertiary text-gradient">
                  {inVew ? <CountUp start={0} end={15} duration={5} /> : null}
                </div>
                <div className=" font-secondary text-sm tracking-[2px]">
                  Git <br />
                  Repositories
                </div>
              </div>
              <div>
                <div className="font-[40px] font-tertiary text-gradient">
                  {inVew ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className=" font-secondary text-sm tracking-[2px]">
                  Bootcamps <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#contact">
              <button className="button-header btn-sm btn  ">
                Get in touch
              </button>
              </a>
           
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

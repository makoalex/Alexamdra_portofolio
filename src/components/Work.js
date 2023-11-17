import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Image1.png";
import Img2 from "../assets/img2.png";

export default function Work() {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
           className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/** text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
                {" "}
                Using JavaScript for both front-end and back-end development,
                creating dynamic and cohesive web applications that seamlessly
                integrate user interfaces, server logic, and databases.
              </p>
              <a href="https://github.com/makoalex?tab=repositories">
              <button className="button-header btn-sm btn mb-7">
                View All Projects
              </button>
              </a>
            
            </div>
            {/** image */}
            <div className="group relative overflow-hidden border-2 border-white/60 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img1}
                alt="project image 1"
                className=" group-hover:scale-150 transition-all group-hover:rotate-12 duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient "> Next.js/ UI design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Pendel Hub</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col "
          >
            {/** image */}
            <div className="group relative overflow-hidden border-2 border-white/40 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img2}
                alt="project image 1"
                className=" group-hover:scale-150 transition-all group-hover:rotate-12  duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient "> Next.js/ UI design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Reserve Eats</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

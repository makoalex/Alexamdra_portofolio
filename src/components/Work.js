import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Image1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/Group 3.png";
import Img4 from "../assets/Salt.png";

export default function Work() {
  return (
    <section className="section mb-20" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
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
            </div>
            {/** image */}
            <a href="https://pendel-hub.vercel.app/">
            <div className="group relative lg:top-14 overflow-hidden border-2 lg:max-w-[575px] lg:max-h-[400px] mt-12 border-white/60 rounded-xl">
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
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex flex-col gap-y-10  "
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
            <a href="https://github.com/SaltyUltraCrepidarian/EcoHarbor">
            <div className="group relative overflow-hidden border-2 border-white/60 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img3}
                alt="project image 1"
                className=" group-hover:scale-150 transition-all group-hover:rotate-12 duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient "> Next.js/ UI/UX design/</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">EcoHarbour</span>
              </div>
            </div>
            </a>
            <a href="https://talents.salt.dev/">
            <div className="group relative overflow-hidden border-2 border-white/60 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/30 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img4}
                alt="project image 1"
                className=" group-hover:scale-150 transition-all group-hover:rotate-12 duration-500"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient "> Next.js/ UI/UX design/</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Salt Talent Pool</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

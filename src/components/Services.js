import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Design",
    description:
      "I use Figma to create intuitive user interfaces and crafting seamless user experiences. I thrive on transforming designs and concepts into dynamic and intuitive web applications",
  },
  {
    name: "Developer",
    description:
      "I like coding using front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks like Node.js and Express. Skilled in database design using  MongoDB and SQL.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 lg:h-[350px] lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0"
          >
            <h2 className=" h2 text-accent mb-6">What i do</h2>
            <h3 className="h3 max-w-[455px] text-lg leading-loose lg:text-2xl">
              {" "}
              I have been working with ReactJs, Nextjs, Tailwind-css, and also creating
              web-designs and flows with Figma.
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true}}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service object
                const { name, description, link } = service;
                return (
                  <div
                    className=" border-b border-accent/20 h-[170px] mb-[40px] flex"
                    key={index}
                  >
                    <div className=" max-w-[476px]">
                      <h4 className=" text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className=" font-secondary leading-tight text-sm lg:text-lg">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end"></div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

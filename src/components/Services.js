import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Design",
    description:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    link: "Learn more",
  },
  {
    name: "Developer",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    link: "Learn more",
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
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:h-[550px] lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0"
          >
            <h2 className=" h2 text-accent mb-6">What i do</h2>
            <h3 className="h3 max-w-[455px] text-lg leading-loose lg:text-2xl">
              {" "}I'm a fullstack Javascript developer, with a passion for
              Front-end.
            </h3>
            <button className="button-header btn-sm btn mb-7">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service object
                const { name, description, link } = service;
                return (
                  <div
                    className=" border-b border-accent/20 h-[110px] mb-[40px] flex"
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
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="w-9 h-9 mb-[42px] fl justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="#"
                        className=" font-tertiary text-sm text-gradient "
                      >
                        {link}
                      </a>
                    </div>
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

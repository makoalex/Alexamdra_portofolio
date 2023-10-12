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
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row ">
          <div className=" flex-1 items-end lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className=" h2 text-accent mb-6"> What I do</h2>
            <h3 className="h3 max-w-[450px] mb-16">
              {" "}
              I'm a fullstack Javascript developer, with a passion for
              Front-end.{" "}
            </h3>
            <button className="button-header btn-sm btn">See my work</button>
          </div>
          {/* services  */}
          <div className="flex-1">
            {/* services  */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const {name, description, link} = service
                return (<div key={index}>
                  <div className=" max-w[470px]">
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                  <div> {link}</div>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

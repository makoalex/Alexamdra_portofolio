import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../variants";

const skills = [
  "Html",
  "CSS",
  "Javascript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "Figma",
  "Frame Motion",
  "Express",
  "Node.js",
  "Prisma",
  "Git",
  "MongoDb",
  "PostgreSQl",
];

export default function Skills() {
  return (
    <div
      className="section flex flex-1 justify-center items-center w-screen mt-40 text-center"
      id="skills"
    >
      <div className="container mx-auto">
        <h2 className="h2 leading-tight text-accent p-4 ">My Skills</h2>
        <ul className="flex justify-center items-center flex-wrap gap-4 text-lg font-primary font-light">
          {skills.map((skill, index) => (
            <motion.li
              className=" border rounded-xl flex flex-col px-5 py-3 "
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

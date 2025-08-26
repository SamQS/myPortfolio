import { motion } from "framer-motion";
import React from "react";
import blob from "../assets/blob.svg";
import mywork_data from "../data/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaChartBar } from 'react-icons/fa';
import { SiTailwindcss, SiPython, SiDjango, SiPostgresql, SiMysql, SiFigma, SiGithub } from 'react-icons/si';


export function Skills() {

  const stacks = [
    { icon: <FaHtml5 />, label: 'HTML', color: '#EF652A' },
    { icon: <FaCss3 />, label: 'CSS', color: '#30A9DC' },
    { icon: <FaJs />, label: 'JavaScript', color: '#F0DB4F' },
    { icon: <FaReact />, label: 'React', color: '#00D8FF' },
    { icon: <SiTailwindcss />, label: 'Tailwind', color: '#17BAB8' },
    { icon: <SiFigma />, label: 'UI/UX', color: '#A95FFF' },

    // Backend
    { icon: <SiPython />, label: 'Python', color: '#3776AB' },
    { icon: <SiDjango />, label: 'Django', color: '#092E20' },


    // Databases
    { icon: <SiPostgresql />, label: 'PostgreSQL', color: '#336791' },
    { icon: <SiMysql />, label: 'MySQL', color: '#4479A1' },

    // Tools
    { icon: <FaGitAlt />, label: 'Git', color: '#F05032' },
    { icon: <SiGithub />, label: 'Git', color: '#F05032' },
    {icon: <FaChartBar />, label: 'Power BI', color: '#F2C811'},
    { icon: <SiFigma />, label: 'Figma', color: '#A95FFF' },

    // Methodologies (sin icono específico, usamos color genérico)
    { icon: "Scrum", label: 'Scrum', color: '#6C5DD3' },
    { icon: "Kanban", label: 'Kanban', color: '#FF7F50' },
  ];
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-[10px] 
                 px-6 sm:px-10 md:px-20 lg:px-[150px] py-[100px] scroll-mt-24"
    >

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="px-0 py-[30px] text-[60px] font-[600]">Skills</h1>
        <motion.img
          src={blob}
          alt="Profile"
          className="absolute top-[70px] left-20 z-[-1]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="flex flex-col items-center justify-center p-6 mt-5">
        <ul className="flex flex-wrap justify-center gap-6">
          {stacks.map((stack, index) => (
            <motion.li
              key={index}
              className="group relative flex flex-col items-center text-center border-2 border-transparent rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: `0px 0px 15px ${stack.color}`,
                border: `3px solid ${stack.color}`,
                borderRadius: "20px",
                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            >
              <div
                className={`flex justify-center items-center w-[80px] h-[80px] ${
                  typeof stack.icon === "string" ? "text-[20px]" : "text-4xl"
                } text-gray-300 group-hover:text-white transition-colors bg-[#32323c] rounded-lg m-2`}
              >
                {typeof stack.icon === "string" ? stack.icon : stack.icon}
              </div>

              <tool-tip
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-gray-800 px-2 py-1 rounded-md whitespace-nowrap text-white hidden group-hover:block"
                role="tooltip"
                aria-hidden="true"
              >
                {stack.label}
              </tool-tip>

              <p className="stack__name text-sm text-gray-400 hidden">{stack.label}</p>
            </motion.li>

          ))}
        </ul>
      </div>



    </section>
  )
}


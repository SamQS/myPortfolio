import { motion } from "framer-motion";
import React, { useState } from "react";
import blob from "../assets/blob.svg";
import mywork_data from "../data/mywork_data";
import arrow_icon from "../assets/arrow_icon.svg";
import github from "../assets/github.svg";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Solo mostrar los primeros 6 si showAll es false
  const projectsToShow = showAll ? mywork_data : mywork_data.slice(0, 6);

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center gap-[70px] 
                 px-6 sm:px-10 md:px-20 lg:px-[150px] py-[100px] scroll-mt-24"
    >
      {/* Título */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="px-0 py-[30px] text-[60px] font-[600]">My projects</h1>
        <motion.img
          src={blob}
          alt="Profile"
          className="absolute top-1 left-20 z-[-1]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        {projectsToShow.map((work, index) => (
          <motion.div
            key={index}
            className="bg-[#1f1f1f] rounded-[12px] overflow-hidden shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={work.w_img}
              alt={work.w_name}
              className="w-full h-64 object-cover"
            />
            
            
            <div className="p-4 w-full flex flex-col items-left gap-4">
              <h3 className="text-white text-xl font-semibold mb-2">
                {work.w_name}
              </h3>
              <div className="tools flex flex-wrap gap-4 ">
                {work.w_tools?.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#2a2a2a] px-2 py-1 rounded">
                    <img src={tool.img} alt={tool.name} className="w-6 h-6" />
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>


              <div className="flex gap-3">
                <a
                  href={work.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#33FFA9] text-black rounded-lg font-medium hover:bg-[#28cc88] transition"
                >
                  Ver Demo
                </a>
                <a
                  href={work.code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#33FFA9] text-[#33FFA9] rounded-lg font-medium hover:bg-[#33FFA9] hover:text-black transition"
                >
                  <img src={github} alt="" className="w-[25px] h-auto" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {mywork_data.length > 6 && (
        <motion.div
          className="flex items-center text-[20px] font-medium mb-5 cursor-pointer 
                     gap-[10px] rounded-[50px] border-2 border-white px-10 py-5 
                     transition-[gap] duration-600 hover:gap-[30px]"
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>{showAll ? "Show Less" : "Show More"}</p>
          <img src={arrow_icon} alt="" className={`${showAll ? "rotate-180" : ""} transition-transform duration-300`} />
        </motion.div>
      )}
    </section>
  );
};

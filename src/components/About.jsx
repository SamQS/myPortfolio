import { motion } from "framer-motion";
import React from "react";
import blob from "../assets/blob.svg";
import profile from "../assets/profile.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-[50px] 
                 px-6 sm:px-10 md:px-20 lg:px-[150px] 
                 py-[120px] scroll-mt-24"
    >
      {/* Título */}
      <motion.div
        className="relative w-full text-center lg:text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="py-[20px] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-[600]">
          About me
        </h1>
        <motion.img
          src={blob}
          alt="Profile"
          className="absolute top-1 left-1/2 lg:left-190 
                     -translate-x-1/2 lg:translate-x-0 
                     w-[150px] sm:w-[200px] z-[-1]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-center lg:items-start">
        {/* Imagen */}
        <motion.div
          className="w-full max-w-[400px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profile} alt="Profile" className="w-full h-auto rounded-[20px]" />
        </motion.div>

        {/* Texto + Skills + Highlights */}
        <div className="flex flex-col gap-[40px] w-full">
          {/* Texto */}
          <motion.div
            className="text-[16px] sm:text-[18px] font-[400] leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I have a Bachelor’s degree in Computer and Systems Engineering from Universidad San Martín de Porres, 
              with knowledge in programming and software development and a strong interest in frontend development. 
              I have experience with JavaScript, React.js, HTML, CSS, Tailwind CSS, UI/UX, Python, Django, REST API, 
              PostgreSQL, MySQL, SQL Server, Git, GitHub, Power BI, Figma, and Excel, and I am familiar with agile 
              methodologies such as Scrum and Kanban. I enjoy learning new technologies, improving my skills, and 
              creating efficient, user-friendly solutions, while seeking opportunities to keep growing and contributing 
              through my work.
            </p>
          </motion.div>

          {/* Skills
          <motion.div
            className="flex flex-col gap-[20px] text-[16px] sm:text-[18px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              { title: "Frontend:", skills: "JavaScript, React, HTML, CSS, UI/UX, Tailwind" },
              { title: "Backend:", skills: "Python, Django, API REST" },
              { title: "Databases:", skills: "PostgreSQL, MySQL" },
              { title: "Tools:", skills: "Git, GitHub, Power BI, Figma" },
              { title: "Methodologies:", skills: "Scrum, Kanban" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] items-start sm:items-center"
                whileHover={{ scale: 1.05 }}
              >
                <p className="min-w-[120px] text-[18px] sm:text-[20px]">
                  <span className="font-bold">{item.title}</span> {item.skills}
                </p>
                <hr className="hidden sm:block flex-1 h-2 rounded-[50px] 
                               bg-[linear-gradient(264deg,#166E48_-5.09%,#33FFA9_106.28%)]" />
              </motion.div>
            ))}
          </motion.div> */}

          {/* Highlights */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 w-full mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              "Bachelor’s Degree",
              "10+ Projects Completed",
              "Continuous Learner",
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] 
                                 hover:bg-gradient-to-r hover:from-[#166E48] hover:to-[#33FFA9] 
                                 hover:bg-clip-text hover:text-transparent cursor-pointer">
                    {item}
                  </h1>
                </motion.div>
                {idx < 2 && (
                  <hr className="hidden md:block w-[3px] h-[50px] border-2 bg-gray-300" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

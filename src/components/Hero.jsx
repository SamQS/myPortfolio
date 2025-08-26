import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-24 lg:pt-40 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-40 px-4 md:px-8"
    >
      {/* Texto con animación */}
      <motion.div
        className="flex flex-col items-center lg:items-start gap-8 lg:gap-10 max-w-xl text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-gradient-to-l from-[#166E48] to-[#33FFA9] bg-clip-text text-transparent">
            I am Samuel Quenta,
          </span>{" "}
          a junior frontend developer based in Perú.
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base lg:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I am a frontend developer from Peru with a degree in Computer and Systems
          Engineering. Skilled in JavaScript, React, HTML, CSS, Tailwind, Python,
          and Django, I enjoy creating user-friendly applications and growing my
          skills through new challenges.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base sm:text-lg font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="/CV_SamuelQuenta.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#166E48] to-[#33FFA9] text-white text-center shadow-lg"
          >
            Download my CV
          </motion.a>

          <AnchorLink href="#portfolio" offset={50}>
            <motion.div
              whileHover={{ scale: 1.05, borderColor: "#33FFA9" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-white text-center cursor-pointer transition"
            >
              View Projects
            </motion.div>
          </AnchorLink>
        </motion.div>
      </motion.div>

      {/* Imagen con animación */}
      <div className="flex flex-col items-center gap-6 lg:gap-10">
        <motion.img
          src={profile}
          alt="Hero"
          className="w-64 sm:w-80 md:w-96 lg:w-100 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <div className="flex gap-4 sm:gap-6">
          {[github, linkedin, gmail, instagram, whatsapp].map((icon, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.5, transition: { type: "spring", stiffness: 200, damping: 10 } }}
            >
              <img src={icon} alt="icon" className="w-10 sm:w-12 rounded-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

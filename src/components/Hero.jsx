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
      className="pt-[300px] -mt-[80px] flex flex-col lg:flex-row items-center justify-center gap-[80px] mb-[200px]"
    >
      {/* Texto con animación */}
      <motion.div
        className="flex flex-col items-center lg:items-start gap-[40px] max-w-[600px] text-center lg:text-right"
        initial={{ opacity: 0, x: -100 }}   // Estado inicial
        animate={{ opacity: 1, x: 0 }}      // Estado final
        transition={{ duration: 1 }}        // Tiempo
      >
        <motion.h1
          className="text-[45px] lg:text-[45px] font-semibold leading-[55px] lg:leading-[55px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="bg-gradient-to-l from-[#166E48] to-[#33FFA9] bg-clip-text text-transparent">
            I am Samuel Quenta,
          </span>{" "}
          a junior frontend developer based in Perú.
        </motion.h1>

        <motion.p
          className="text-[18px] leading-[30px]"
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
          className="flex gap-[25px] text-[22px] font-[400]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="/CV_SamuelQuenta.pdf"   // ruta a tu CV en la carpeta public
            download              // esto indica que debe descargarse
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="px-[35px] py-[20px] rounded-[50px] bg-[linear-gradient(135deg,#166E48_5%,#33FFA9_100%)] cursor-pointer animate-pulse"
          >
            Download my CV
          </motion.a>

          <AnchorLink href="#portfolio" offset={50}>
            <motion.div
              whileHover={{ scale: 1.1, borderColor: "#33FFA9" }}
              whileTap={{ scale: 0.95 }}
              className="px-[50px] py-[20px] rounded-[50px] border-2 border-white cursor-pointer transition text-center"
            >
              View Projects
            </motion.div>
          </AnchorLink>
        </motion.div>
      </motion.div>

      {/* Imagen con animación */}
      <div className="flex flex-col items-center gap-10">
        <motion.img
          src={profile}
          alt="Hero"
          className="w-[400px] h-auto rounded-[2000px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        <div className="flex gap-6">
          <a href="https://github.com/SamQS" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={github}
              alt="github"
              className="w-[50px] h-auto rounded-[2000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 2,
                borderRadius: "20px",
                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/samuel-quenta-salas/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={linkedin}
              alt="linkedin"
              className="w-[50px] h-auto rounded-[2000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 2,
                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            />
          </a>
          <a href="mailto:diegodsqs2@gmail.com" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={gmail}
              alt="gmail"
              className="w-[50px] h-auto rounded-[2000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 2,
                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            />
          </a>
          <a href="https://www.instagram.com/dsammqs/?hl=es-la" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={instagram}
              alt="instagram"
              className="w-[50px] h-auto rounded-[2000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 2,

                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            />
          </a>
          <a href="https://api.whatsapp.com/send?phone=51949754713" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={whatsapp}
              alt="whatsapp"
              className="w-[50px] h-auto rounded-[2000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 2,

                transition: { type: "spring", stiffness: 200, damping: 10 }
              }}
            />
          </a>
        </div>

      </div>

    </section>
  );
}

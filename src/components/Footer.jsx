import user_icon from '../assets/user_icon.svg';
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-[40px] mx-[50px] my-[100px] text-gray-300">
      <div className="flex flex-col md:flex-row items-start justify-between gap-[40px]">
        <div className="flex flex-col gap-[20px] max-w-[600px]">
          <h1 className="w-fit text-2xl font-bold text-[#33FFA9] drop-shadow-[0_0_5px_rgba(51,255,169,0.5)] font-[Montserrat] bg-[#161513] px-6 py-3 rounded-lg inline-block">
            &lt;SQ/&gt;
          </h1>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="grid grid-cols-5 gap-5">
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
      </div>

      <hr className="border-gray-600" />

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-[15px] text-sm mb-5">
        <p>© 2023 Alex Bennett. All rights reserved.</p>
        <div className="flex gap-[20px]">
          <a href="#" className="hover:text-[#33FFA9]">Privacy Policy</a>
          <a href="#" className="hover:text-[#33FFA9]">Terms of Service</a>
          <a href="#" className="hover:text-[#33FFA9]">Contact</a>
        </div>
      </div>
    </footer>
  );
};

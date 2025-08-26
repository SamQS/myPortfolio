import { motion } from "framer-motion";
import React from "react";
import blob from "../assets/blob.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";
import Typewriter from "./Typewriter";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bb4aa6d-b529-4c11-bfcb-83ad3c10842e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully!!!");
      alert("Submitted Successfully!!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Error: " + data.message);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-[30px] 
                 mx-[150px] my-[170px] max-[1155px]:mx-[50px] 
                 max-[768px]:mx-[20px] relative -top-[80px] pt-[80px]"
    >
      {/* Título */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="px-0 py-[30px] text-[60px] font-[600]">Contact</h1>
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

      {/* Contenido */}
      <div className="flex gap-[150px] max-[1155px]:flex-col max-[1155px]:gap-[60px]">
        
        {/* Columna Izquierda */}
        <motion.div
          className="flex flex-col gap-[30px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-[80px] font-[700] bg-gradient-to-l 
                       from-[#166E48] to-[#33FFA9] bg-clip-text text-transparent 
                       max-[768px]:text-[50px]"
          >
            Talk to Me
          </h1>
          <p className="max-w-[550px] text-[15px] leading-[25px]">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>

          <div className="flex flex-col gap-[30px] text-[20px] font-[500]">
            {[
              { icon: mail_icon, text: "diegodsqs2@gmail.com" },
              { icon: location_icon, text: "Arequipa, Perú" },
              { icon: call_icon, text: "+51 949 754 713" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-[20px] items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Columna Derecha (Formulario) */}
        <motion.form
          onSubmit={onSubmit}
          className="flex flex-col items-start gap-[25px] text-[18px] font-[400] w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <label className="text-[22px] font-[500]"><Typewriter text="Your Name" speed={300} delay={1500} /></label>
          <input
            className="border-none w-full max-w-[700px] px-5 py-[18px] rounded-[4px] 
                       bg-[#32323c] text-[#a0a0a0] font-[Outfit] text-[18px]"
            type="text"
            placeholder="Enter your name"
            name="name"
          />

          <label className="text-[22px] font-[500]"><Typewriter text="Your Email" speed={300} delay={1500} /></label>
          <input
            className="border-none w-full max-w-[700px] px-5 py-[18px] rounded-[4px] 
                       bg-[#32323c] text-[#a0a0a0] font-[Outfit] text-[18px]"
            type="email"
            placeholder="Enter your email"
            name="email"
          />

          <label className="text-[22px] font-[500]"><Typewriter text="Write your message here" speed={200} delay={1500} /></label>
          <textarea
            className="border-none w-full max-w-[700px] p-5 rounded-[4px] 
                       bg-[#32323c] text-[#a0a0a0] font-[Outfit] text-[18px]"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <motion.button
            type="submit"
            className="border-none rounded-[440px] bg-[linear-gradient(135deg,#166E48_5%,#33FFA9_100%)] 
                       text-[22px] px-[50px] py-[10px] mb-[10px]  cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Submit Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

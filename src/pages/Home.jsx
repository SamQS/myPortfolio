import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); 
    });
  }, []);

  const options = useMemo(() => {
  const isMobile = window.innerWidth < 768; // Ajusta el breakpoint a tu gusto
  return {
    background: { color: "#161513" },
    particles: {
      number: { value: isMobile ? 25 : 110 }, // menos partículas en mobile
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      color: { value: "#33FFA9" },
      links: { enable: true, color: "#33FFA9" },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };
}, []);

  return (
    <div className="relative w-full min-h-screen bg-[#161513] h-screen">
      <Particles
        id="tsparticles"
        options={options}
        className="fixed inset-0 -z-10"
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

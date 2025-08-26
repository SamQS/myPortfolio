import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100, delay = 1500 }) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = speed;

    if (isDeleting) {
      typingSpeed /= 2; // más rápido al borrar
    }

    const timeout = setTimeout(() => {
      let newText = text.slice(0, index + (isDeleting ? -1 : 1));
      setDisplayed(newText);

      if (!isDeleting && newText === text) {
        // cuando terminó de escribir → esperar y luego borrar
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && newText === "") {
        // cuando terminó de borrar → volver a escribir
        setIsDeleting(false);
      }

      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, delay]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;

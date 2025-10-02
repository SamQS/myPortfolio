import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

export function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#161513] flex items-center justify-between px-[30px] md:px-[170px] py-[10px] shadow-md">
      <h1 className="text-4xl font-bold text-[#33FFA9] drop-shadow-[0_0_5px_rgba(51,255,169,0.5)] font-[Montserrat] px-4 py-2 rounded-lg inline-block">
        &lt;SQ/&gt;
      </h1>
      <button 
        className="lg:hidden z-50"
        onClick={toggleMenu}
      >
        <img src={isOpen ? menu_close : menu_open} alt="menu" className="w-8 h-8" />
      </button>

      <ul className="hidden lg:flex items-center list-none gap-[70px] text-[20px] font-[500]">
        {["home", "about", "portfolio","skills", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" href={`#${item}`}>
              <button
                onClick={() => setMenu(item) }
                className={`cursor-pointer duration-600 ${
                  menu === item
                    ? "text-[25px] bg-gradient-to-r from-[#166E48] to-[#33FFA9] bg-clip-text text-transparent"
                    : "hover:text-[25px] hover:bg-gradient-to-r hover:from-[#166E48] hover:to-[#33FFA9] hover:bg-clip-text hover:text-transparent"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </AnchorLink>
          </li>
        ))}
      </ul>
      <a href="./CV_SamuelQuenta.pdf" download className="hidden lg:inline-block px-[20px] py-[15px] rounded-[20px] font-[600] bg-[linear-gradient(135deg,#166E48_5%,#33FFA9_100%)] cursor-pointer transition duration-500 hover:scale-110">
        Download my CV
      </a>
      <div className={`fixed top-0 right-0 h-screen w-[70%] bg-[#161513] shadow-lg flex flex-col items-center justify-center gap-10 text-[22px] font-[500] transition-transform duration-500 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {["home", "about", "portfolio","skills", "contact"].map((item) => (
          <AnchorLink 
            key={item}
            className="anchor-link" 
            href={`#${item}`}
          >
            <button
              onClick={() => {
                setMenu(item);
                setIsOpen(false);
              }}
              className={`cursor-pointer duration-600 ${
                menu === item
                  ? "text-[25px] bg-gradient-to-r from-[#166E48] to-[#33FFA9] bg-clip-text text-transparent"
                  : "hover:text-[25px] hover:bg-gradient-to-r hover:from-[#166E48] hover:to-[#33FFA9] hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </AnchorLink>
        ))}
        <a className="px-[20px] py-[15px] rounded-[20px] font-[600] bg-[linear-gradient(135deg,#166E48_5%,#33FFA9_100%)] cursor-pointer transition duration-500 hover:scale-110">
          Connect With Me
        </a>
      </div>
    </nav>
  );
}


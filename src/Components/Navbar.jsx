import { Link } from "react-router-dom";
import { useEffect, forwardRef, useState, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

const Navbar = forwardRef((props, navRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);

  // --- Animación de Entrada Original ---
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    gsap.set(navRef.current, {
      y: -100,
      opacity: 0,
    });

    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "hop",
      delay: 6.7,
    });
  }, [navRef]);

  // --- Animación del Menú Móvil ---
  useEffect(() => {
    if (isOpen) {
      // Abrir: Aparece el fondo y luego los links con stagger
      gsap.to(mobileMenuRef.current, { 
        clipPath: "circle(150% at 100% 0%)", 
        duration: 1, 
        ease: "hop" 
      });
      gsap.fromTo(
        mobileLinksRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power2.out" }
      );
    } else {
      // Cerrar: Se contrae hacia la esquina
      gsap.to(mobileMenuRef.current, { 
        clipPath: "circle(0% at 100% 0%)", 
        duration: 0.8, 
        ease: "power4.inOut" 
      });
    }
  }, [isOpen]);

  const toggleMenu = (e) => {
    if (e) e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Principal */}
      <div
        ref={navRef}
        className="absolute flex justify-end lg:justify-between w-full z-50 top-5 px-7 left-1/2 -translate-x-1/2"
      >
        <Link to="/" className="text-white hidden lg:flex uppercase gloock text-2xl">
          julian reyes
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex rounded-full bg-white py-3 px-10">
          {["home", "about", "work", "portfolio"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="text-gray-800 google-sans tracking-tight capitalize text-xl mx-2 transition-all duration-300 hover:font-bold"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="border-2 border-white google-sans transition-all duration-300 text-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-800 capitalize"
          >
            contact me
          </Link>
        </div>

        {/* Botón Menu Móvil */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="border-2 border-white google-sans transition-all duration-300 px-5 py-2 rounded-xl bg-white text-gray-800 capitalize text-2xl relative z-[60]"
          >
            {isOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Pantalla Completa del Menú Móvil */}
      <div
        ref={mobileMenuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }} // Estado inicial escondido
        className="fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center lg:hidden"
      >
        <nav className="flex flex-col items-center gap-6">
          {["home", "about", "work", "portfolio", "contact"].map((item, index) => (
            <Link
              key={item}
              ref={(el) => (mobileLinksRef.current[index] = el)}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-900 gloock text-5xl uppercase hover:italic transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
});

export default Navbar;
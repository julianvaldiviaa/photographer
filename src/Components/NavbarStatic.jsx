import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const NavbarStatic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Animación con GSAP cuando el estado isOpen cambia
  useEffect(() => {
    if (isOpen) {
      // Aparece el fondo y luego los links uno por uno
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "expo.out" });
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
      );
    } else {
      // Se esconde hacia la derecha
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "expo.in" });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- NAVBAR PRINCIPAL --- */}
      <div className="absolute flex justify-end lg:justify-between w-full z-20 top-5 px-7 left-1/2 -translate-x-1/2">
        <Link to="/" className="text-white hidden lg:flex uppercase gloock text-2xl">
          julian reyes
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex rounded-full bg-white py-3 px-10">
          {["home", "about", "work", "portfolio"].map((item) => (
            <Link key={item} to={`/${item}`} className="text-gray-800 google-sans tracking-tight capitalize text-xl mx-2 hover:font-bold">
              {item}
            </Link>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <Link to="/contact" className="border-2 border-white google-sans text-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-800 capitalize">
            contact me
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="z-50 border-2 border-white google-sans px-5 py-2 rounded-xl bg-white text-gray-800 capitalize text-2xl"
          >
            {isOpen ? "cerrar" : "menu"}
          </button>
        </div>
      </div>

      {/* --- MENÚ OVERLAY MÓVIL --- */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center lg:hidden translate-x-full"
      >
        <nav className="flex flex-col items-center gap-8">
          {["home", "about", "work", "portfolio", "contact"].map((item, index) => (
            <Link
              key={item}
              ref={(el) => (linksRef.current[index] = el)}
              to={item === "home" ? "/" : `/${item}`}
              onClick={toggleMenu} // Cerrar al hacer click en un link
              className="text-white text-4xl gloock uppercase"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavbarStatic;
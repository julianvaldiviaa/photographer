import React, { useEffect, useRef } from "react";
import InfiniteSlider from "./Carrousel";
import SimpleParallax from "simple-parallax-js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AproachSection = () => {
  const containerRef = useRef(null);
  const clipBoxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de expansión: de un ancho pequeño al total
    gsap.to(clipBoxRef.current, {
      width: "100%", 
      scrollTrigger: {
        trigger: clipBoxRef.current,
        start: "top 95%",
        end: "top 15%",
        scrub: 1.5,
      },
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-white relative z-30 py-12">
      {/* SECCIÓN DE MARCAS */}
      <h3 className="text-center text-xl md:text-3xl google-sans capitalize tracking-tighter font-light mb-4 px-4 text-black">
        satisfied brands :
      </h3>
      <InfiniteSlider />

      {/* SECCIÓN DE FILOSOFÍA */}
      <section className="py-10 md:py-20 text-black">
        <h2 className="text-5xl md:text-7xl lg:text-9xl px-6 md:px-14 tracking-tighter google-sans capitalize font-regular">
          my approach
        </h2>
        
        {/* Línea divisoria responsive */}
        <div className="w-[90vw] md:w-[85vw] h-[1px] bg-black mx-auto md:ml-14 my-10 md:my-20 opacity-20"></div>

        {/* Bloque 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 w-full gap-6 md:gap-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl google-sans capitalize tracking-tighter max-w-full md:max-w-[45%]">
            A simple philosophy: <br className="hidden md:block" /> quality over quantity.
          </h3>
          <p className="text-start max-w-full md:max-w-sm google-sans text-lg md:text-xl tracking-tight opacity-80">
            We partner with five clients a year to deliver unmatched focus, and
            impact. Every detail is carefully crafted, every decision strategic,
            and every outcome transformative.
          </p>
        </div>

        <div className="w-[90vw] md:w-[85vw] h-[1px] bg-black mx-auto md:ml-14 my-10 md:my-20 opacity-20"></div>

        {/* Bloque 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 w-full gap-6 md:gap-0">
          <h3 className="text-2xl md:text-3xl lg:text-4xl google-sans capitalize tracking-tighter max-w-full md:max-w-[45%]">
            Performance & emotion. <br className="hidden md:block" /> You need both.
          </h3>
          <p className="text-start max-w-full md:max-w-sm google-sans text-lg md:text-xl tracking-tight opacity-80">
            We craft brands that become category leaders. These brands aren’t
            built on products alone. Emotional connection and sustainable growth
            are the two essentials to get there.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE IMAGEN RESPONSIVE */}
      <div className="flex justify-center mt-10 px-4 md:px-14">
        {/* clipBoxRef: width inicial menor para que GSAP lo expanda */}
        <div 
          className="w-[90%] md:w-[60%] h-[50vh] md:h-[80vh] overflow-hidden flex justify-center items-center rounded-sm shadow-2xl"
        >
          <SimpleParallax scale={1.6} delay={0.4}>
            <img
              src="https://i.pinimg.com/736x/49/f1/bc/49f1bcc9a8663b09ab67bec83b691126.jpg"
              alt="Photography Approach"
              className="w-full h-full object-cover"
            />
          </SimpleParallax>
        </div>
      </div>
    </div>
  );
};

export default AproachSection;
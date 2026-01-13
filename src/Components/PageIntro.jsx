import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PageIntro = ({ title, subtitle }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%", // Se queda quieto durante un scroll de 100vh
      pin: true,
      pinSpacing: false, // ¡ESTA ES LA CLAVE! Permite que la siguiente sección suba
      scrub: true,
    });
  }, { scope: sectionRef });

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full h-screen p-7 bg-white z-0" // z-0 para que lo de abajo pase por encima
    >
      <h3 className="google-sans capitalize text-3xl md:text-4xl tracking-tighter font-medium text-stone-700">
        {title}
      </h3>
      <h2 className="google-sans uppercase text-4xl leading-tight md:text-6xl lg:text-7xl tracking-tighter font-extralight">
        {subtitle}
      </h2>
      
      <div className="my-5 w-[95%] h-[2px] bg-black"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-3 my-7">
        <div className="bg-black w-full h-52"></div>
        <div className="bg-black w-full h-52"></div>
        <div className="hidden lg:inline bg-black w-full h-52"></div>
        <div className="hidden lg:inline bg-black w-full h-52"></div>
      </div>

      <div className="grid lg:grid-cols-[1fr_55%]">
        <div /> 
        <p className="google-sans text-2xl lg:text-3xl text-start lg:text-right p-5 tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis illo ducimus odio deserunt eaque nemo officiis qui!
        </p>
      </div>
    </div>
  );
};

export default PageIntro;
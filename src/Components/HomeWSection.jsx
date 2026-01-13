import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Float, ContactShadows } from "@react-three/drei";
import Scene from "../Models/Scene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HomeWSection = () => {
  const [isLaptop, setIsLaptop] = useState(false);
  const containerRef = useRef();
  const heroSectionRef = useRef();
  const workSectionRef = useRef();

  useEffect(() => {
    const checkSize = () => setIsLaptop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useGSAP(
    () => {
      // PIN SECCIÓN 1 (Hero 3D)
      ScrollTrigger.create({
        trigger: heroSectionRef.current,
        start: "bottom bottom",
        end: "+=100%", // Tiempo que se queda quieta antes de ser cubierta
        pin: true,
        pinSpacing: false,
      });

      // PIN SECCIÓN 2 (My Recent Work)
      ScrollTrigger.create({
        trigger: workSectionRef.current,
        start: "bottom bottom",
        // ALARGAMOS EL END: Esto obliga al usuario a hacer más scroll
        // antes de que la Sección 3 (la que viene en el App) empiece a subir.
        end: "+=150%",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SECCIÓN 1: HERO / 3D */}
      <section
        ref={heroSectionRef}
        className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden z-10"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
          <h2 className="gloock text-[19vw] font-black uppercase leading-none opacity-10 text-white blur-sm">
            Creative
          </h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none">
          <h1 className="gloock text-8xl md:text-[12rem] capitalize tracking-tighter text-white mix-blend-difference">
            my work
          </h1>
        </div>

        <div className="absolute inset-0 z-10">
          <Canvas
            shadows
            camera={{ position: [0, -4, 5], fov: 25 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <Float speed={1} rotationIntensity={0.3} floatIntensity={0}>
                <Stage
                  adjustCamera
                  intensity={0.5}
                  environment="city"
                  preset="rembrandt"
                >
                  {/* <group scale={0.5}><Scene /></group> */}
                </Stage>
              </Float>
              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.4}
                scale={3}
                blur={2}
                far={1}
              />
              {isLaptop && <OrbitControls enableZoom={false} />}
            </Suspense>
          </Canvas>
        </div>
      </section>

      {/* SECCIÓN 2: WORK */}
      <section
        ref={workSectionRef}
        className="relative w-full min-h-screen bg-[#0a0a0a] p-16 pt-32 z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] border-t border-white/5"
      >
        <h3 className="text-center text-white google-sans capitalize text-2xl tracking-tight mb-10">
          my recent work
        </h3>

        <div className="mx-auto my-5 bg-white w-full lg:w-[95%] h-72 lg:h-screen group relative overflow-hidden rounded-sm">
          <div className="absolute w-full h-full bg-black/0 group-hover:bg-black/65 transition-all duration-700 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl uppercase tracking-widest">
              View Project
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[95%] mx-auto gap-4 py-2">
          <div className="bg-white h-72 lg:h-screen group relative overflow-hidden">
            <div className="absolute w-full h-full bg-black/0 group-hover:bg-black/65 transition-all duration-700 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl uppercase tracking-widest">
                Minimalism
              </span>
            </div>
          </div>
          <div className="bg-white h-72 lg:h-screen group relative overflow-hidden">
            <div className="absolute w-full h-full bg-black/0 group-hover:bg-black/65 transition-all duration-700 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl uppercase tracking-widest">
                Portraits
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[95%] h-72 lg:h-screen bg-white mx-auto group my-5 relative overflow-hidden">
          <div className="absolute w-full h-full bg-black/0 group-hover:bg-black/65 transition-all duration-700 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xl uppercase tracking-widest">
              name
            </span>
          </div>
        </div>

        <a
          href="#"
          className="text-white w-[95%] mx-auto py-5 flex justify-center text-2xl google-sans capitalize border-white border-2 transition-all duration-300 hover:bg-white hover:text-black"
        >
          see all work{" "}
        </a>
      </section>

      {/* NOTA: El componente que tienes en App.jsx aparecerá después de esto. 
          Al tener z-20 la sección anterior, asegúrate de que el componente de 
          abajo tenga z-30 y position relative en su propio archivo para que suba.
      */}
    </div>
  );
};

export default HomeWSection;

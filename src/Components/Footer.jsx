import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Float, ContactShadows } from "@react-three/drei";
import Scene from "../Models/Scene";

const Footer = () => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLaptop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <footer className="w-full min-h-screen bg-[#0E0E0E] flex items-center">
      <div className="flex flex-col lg:flex-row justify-between w-full p-8 md:p-16 lg:p-24 gap-12 lg:gap-0">
        
        {/* SECCIÓN DE TEXTO Y LINKS */}
        <section className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-white gloock uppercase leading-tight">
            julian <br /> valdivia
          </h2>
          
          <div className="flex flex-wrap justify-center lg:justify-start my-8 md:my-10 gap-4 md:gap-6">
            {["home", "about", "work", "portfolio"].map((item) => (
              <a
                key={item}
                className="text-white google-sans capitalize text-xl md:text-2xl tracking-tight hover:opacity-50 transition-opacity"
                href={item === "home" ? "/home" : item === "about" ? "/" : "#"}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md lg:ml-0">
            <a
              href="#"
              className="text-white google-sans capitalize tracking-tight text-xl md:text-2xl border-white border-2 text-center p-3 transition-all duration-300 hover:bg-white hover:text-black"
            >
              see my work
            </a>
            <a
              href="#"
              className="text-white google-sans capitalize tracking-tight text-xl md:text-2xl border-white border-2 text-center p-3 transition-all duration-300 hover:bg-white hover:text-black"
            >
              contact me
            </a>
          </div>

          <p className="text-white/40 google-sans capitalize text-sm md:text-base mt-12 lg:mt-20">
            © Julian Valdivia. All Rights Reserved
          </p>
        </section>

        {/* SECCIÓN DEL MODELO 3D */}
        <section className="w-full lg:flex-1 h-[350px] md:h-[450px] lg:h-[500px]">
          <div className="relative w-full h-full z-30">
            <Canvas
              shadows
              camera={{ position: [0, -4, 5], fov: 25 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
                  <Stage
                    adjustCamera={isLaptop ? false : true}
                    intensity={0.5}
                    environment="city"
                    preset="rembrandt"
                  >
                    {/* Ajuste de escala y posición dinámico */}
                    <group 
                      position={isLaptop ? [2, 0.5, 0] : [0, 0, 0]} 
                      scale={isLaptop ? 15 : 10}
                    >
                      <Scene />
                    </group>
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
      </div>
    </footer>
  );
};

export default Footer;
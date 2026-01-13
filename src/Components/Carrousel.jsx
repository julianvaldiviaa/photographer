import React from 'react';

const brands = [
  { name: 'LEICA' },
  { name: 'VOGUE' },
  { name: 'ROLEX' },
  { name: 'CHANEL' },
  { name: 'NAT GEO' },
];

const InfiniteSlider = () => {
  return (
    <>
    <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 60s ease-in-out infinite alternate;
          }
        `}
      </style>
    <div className="w-full py-16 bg-white overflow-hidden border-y border-zinc-100">
      
      {/* Máscara de degradado: 
          Ahora los bordes se funden hacia el blanco (from-white) 
      */}
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent">
        
        {/* Contenedor animado:
            Usa la clase 'animate-infinite-scroll' que definimos en el tailwind.config.js
        */}
        <div className="flex animate-infinite-scroll whitespace-nowrap items-center">
          
          {/* Duplicamos el contenido para el loop infinito */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div key={index} className="flex items-center mx-16">
              <span className="text-black font-regular gloock text-5xl md:text-7xl tracking-thighter uppercase transition-opacity  cursor-default">
                {brand.name}
              </span>
              {/* Separador opcional entre marcas */}
              <div className="ml-16 w-2 h-2 bg-black rotate-45 opacity-20" />
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  );
};

export default InfiniteSlider;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TitleSection = ({ title, desc }) => {
  const galleryRef = useRef(null);
  
  // Simulación de 15 fotos (reemplaza con tus URLs reales)
  const photos = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/${i + 50}/800/${i % 2 === 0 ? 1200 : 800}`,
    alt: `Fotografía ${i + 1}`
  }));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de entrada para las fotos al hacer scroll
    const items = galleryRef.current.querySelectorAll(".gallery-item");
    
    gsap.fromTo(items, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#111] overflow-hidden">
      {/* Sección del Título (Hero) */}
      <div className="relative w-full h-[70vh] flex items-center justify-center">
        <h1 className="text-white google-sans capitalize text-6xl md:text-9xl tracking-tighter z-10 text-center px-4">
          {title}
        </h1>
        {desc && (
          <p className="absolute bottom-10 text-gray-400 google-sans uppercase tracking-[0.2em] text-sm">
            {desc}
          </p>
        )}
      </div>

      {/* Galería de Fotos */}
      <div ref={galleryRef} className="px-5 pb-20 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-item overflow-hidden rounded-sm group cursor-pointer relative"
            >
              {/* Overlay de información al hacer hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <span className="text-white google-sans text-sm tracking-widest uppercase border border-white px-4 py-2">
                  Ver Proyecto
                </span>
              </div>
              
              {/* Imagen con efecto de zoom */}
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
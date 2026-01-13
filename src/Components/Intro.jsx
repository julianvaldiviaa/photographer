import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import CustomEase from "gsap/dist/CustomEase";

export default function Intro() {
  const smallTextRef = useRef(null);
  const imageRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const navbarRef = useRef(null);
  const cameraSFX = useRef(null);

cameraSFX.current = new Audio("/sfx/cameraFlashSFX.mp3");
cameraSFX.current.volume = 1;
cameraSFX.current.preload = "auto";


  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0, 0.1, 1");

    // SPLIT TEXTOS
    const smallSplit = new SplitType(smallTextRef.current, {
      types: "chars",
    });
    const titleSplit = new SplitType(titleRef.current, {
      types: "chars",
    });
    const descSplit = new SplitType(descRef.current, {
      types: "chars",
    });

    // WRAPPER overflow-hidden por letra (small)
    smallSplit.chars.forEach((char) => {
      const wrap = document.createElement("span");
      wrap.style.overflow = "hidden";
      wrap.style.display = "inline-block";
      char.parentNode.insertBefore(wrap, char);
      wrap.appendChild(char);
    });

    titleSplit.chars.forEach((char) => {
      const wrap = document.createElement("span");
      wrap.style.overflow = "hidden";
      wrap.style.paddingBottom = "1.2rem";
      wrap.style.display = "inline-block";
      char.parentNode.insertBefore(wrap, char);
      wrap.appendChild(char);
    });

    descSplit.chars.forEach((char) => {
      const wrap = document.createElement("span");
      wrap.style.overflow = "hidden";
      wrap.style.display = "inline-block";
      char.parentNode.insertBefore(wrap, char);
      wrap.appendChild(char);
    });

    // ESTADOS INICIALES
    gsap.set([smallSplit.chars, titleSplit.chars, descSplit.chars], {
      yPercent: 120,
      opacity: 0,
    });

    gsap.set(imageRef.current, {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    });

    // TIMELINE
    const tl = gsap.timeline();

    tl
      // 1️⃣ TEXTO PEQUEÑO (stagger rápido)
      .to(smallSplit.chars, {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        ease: "hop",
        stagger: 0.01,
      })

      // 2️⃣ TEXTO PEQUEÑO SE OCULTA
      .to(smallSplit.chars, {
        yPercent: -120,
        opacity: 0,
        duration: 0.7,
        ease: "power3.in",
      })

      // 3️⃣ TEXTO GRANDE ENTRA

      // 5️⃣ IMAGEN APARECE PEQUEÑA
.to(
  imageRef.current,
  {
    clipPath: "polygon(35% 35%, 65% 35%, 65% 65%, 35% 65%)",
    duration: 1.5,
    ease: "hop",
onStart: () => {
  gsap.delayedCall(0.5, () => {
    if (cameraSFX.current) {
      cameraSFX.current.currentTime = 0;
      cameraSFX.current.play().catch(() => {});
    }
  });
},

  },
  4.5
)


      // 6️⃣ ANTICIPACIÓN (se hace un chin más pequeña)
      .to(
        imgRef.current,
        {
          scale: 1.5,
          duration: 1.5,
          ease: "hop",
        },
        "<"
      )

      // 7️⃣ IMAGEN FULLSCREEN
      .to(
        imageRef.current,
        {
          clipPath: "Polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "hop",
        },
        6
      )

      .to(
        imgRef.current,
        {
          scale: 1,
          duration: 2,
          ease: "hop",
        },
        6
      )

      .to(
        titleSplit.chars,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "hop",
          stagger: 0.02,
        },
        6.5
      )

      .to(
        descSplit.chars,
        {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "hop",
            stagger: 0.01,
        },
        6.7
      )

    return () => {
      smallSplit.revert();
      titleSplit.revert();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* TEXTO PEQUEÑO */}
        <h1
          ref={smallTextRef}
          className="absolute text-black text-2xl google-sans font-regular racking-thighter uppercase"
        >
          The New Photo World
        </h1>

        {/* IMAGEN */}
        <div className="hero-bg absolute w-full h-full" ref={imageRef}>
          <div
            ref={imgRef}
            alt="Hero"
            className="absolute bg-[url('https://i.pinimg.com/1200x/e7/42/3a/e7423ab5363843e6ef789e8427c581a8.jpg')] lg:bg-[url('https://i.pinimg.com/1200x/ed/c2/62/edc2622055a41d0f7bc8335b69fbe765.jpg')] w-full h-full bg-center bg-cover object-cover bg-no-repeat"
          />
        </div>

        <h1
          className="absolute w-[90vw] lg:w-[70vw] z-10 gloock text-white text-7xl/15 lg:text-[12rem]/40 text-center uppercase top-1/2 left-1/2 -translate-1/2"
          ref={titleRef}
        >
          julian <br /> valdivia
        </h1>

        <h2
          className="absolute text-white uppercase font-extralight google-sans whitespace-nowrap text-xl mdtext-3xl tracking-tighter top-10/11 left-1/2 -translate-1/2"
          ref={descRef}
        >
          Photography — Cinema — Emotion
        </h2>
      </div>
    </div>
  );
}

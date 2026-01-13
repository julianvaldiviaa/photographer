import NavbarStatic from "./NavbarStatic";

const Header = () => {
  return (
    <div className="relative h-screen w-full bg-[url('https://i.pinimg.com/1200x/e7/42/3a/e7423ab5363843e6ef789e8427c581a8.jpg')] lg:bg-[url('https://i.pinimg.com/1200x/ed/c2/62/edc2622055a41d0f7bc8335b69fbe765.jpg')] bg-center bg-cover object-cover bg-no-repeat">
      <h1 className="absolute w-[90vw] lg:w-[70vw] z-10 gloock text-white text-7xl/15 lg:text-[12rem]/40 text-center uppercase top-1/2 left-1/2 -translate-1/2">
        julian <br /> valdivia
      </h1>
      <h2
        className="absolute text-white uppercase font-extralight google-sans whitespace-nowrap text-xl mdtext-3xl tracking-tighter top-10/11 left-1/2 -translate-1/2"
      >
        Photography — Cinema — Emotion
      </h2>
    </div>
  );
};

export default Header;

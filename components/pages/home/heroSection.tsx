import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="mb-[50px]">
        <Image
          alt="avatar"
          className="h-[215px] w-full mb-2.5 object-cover rounded-lg md:h-[325px] md:w-[552px]"
          src="/ilham-avatar-large.webp"
          priority={true}
        />
        <p className="font-semibold text-xl leading-[1.6em] text-[#1B1B1F] md:text-2xl md:leading-[1.6em]">
          Hi! I’m Ilham — Full time nerd.
        </p>
        <p className="text-sm leading-[1.6em] text-[#45464F] md:text-xl md:leading-[1.6em]">
          A front-end enthusiast from Indonesia. Interested in React, Node,
          visual design, bikes, photography, and music.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

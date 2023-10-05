const HeroSection = () => {
  return (
    <section className="hero">
      <div className="max-w-[456px] pt-20 pb-[90px] md:pt-[100px] md:pb-[120px] xl:pb-[142px]">
        <p className="text-title-lg font-semibold text-sys-light-on-background dark:text-sys-dark-on-background">
          I&apos;m Ilham — full time nerd.
        </p>
        <p className="text-body-lg text-sys-light-on-surface-variant dark:text-sys-dark-on-surface-variant">
          A front-end enthusiast from Indonesia. Interested in React, Node,
          visual design, bikes, photography, and music.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

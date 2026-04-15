const CTASection = () => (
  <section id="contact" className="py-[120px] px-6 md:px-[60px] text-center relative overflow-hidden" style={{
    background: "linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(354 97% 41% / 0.06) 50%, hsl(0 0% 5%) 100%)"
  }}>
    <span className="absolute font-bebas text-[220px] text-primary/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-[0.05em] pointer-events-none select-none">
      TRANSFORM
    </span>
    <div className="relative z-10">
      <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Start Your Journey</p>
      <h2 className="font-bebas text-[clamp(52px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-6">
        READY TO<br />TRANSFORM?
      </h2>
      <div className="w-[60px] h-[2px] bg-primary mx-auto my-6" />
      <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px] mx-auto mb-12">
        Join Team Wolf. Get a personalized plan, expert coaching, and a community that pushes you to your limits — and beyond.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-barlow-condensed text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground relative overflow-hidden group">
          <span className="relative z-10">Follow on Instagram</span>
          <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </a>
        <a href="mailto:teamwolf@gmail.com" className="font-barlow-condensed text-[13px] tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2.5 hover:text-foreground transition-colors group">
          <span className="w-[30px] h-px bg-current group-hover:w-[50px] transition-all duration-300" />
          Send a Message
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;

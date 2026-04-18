import { useEffect, useRef } from "react";
import sidei from "@/assets/ii.png";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove("opacity-0", "-translate-x-10", "translate-x-10", "translate-y-10");
          e.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        }
      }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-[120px] px-6 md:px-[60px] overflow-hidden">
      <span className="absolute font-bebas text-[280px] text-primary/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-[0.1em] pointer-events-none select-none">
        WOLF
      </span>
      <div className="grid md:grid-cols-2 gap-20 items-center relative">
        <div className="reveal-item opacity-0 -translate-x-10 transition-all duration-700 relative mt-8 md:mt-0">
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden relative">
            <img src={sidei} alt="Team Wolf Coach" className="w-full h-full object-cover object-top md:object-center brightness-[0.85] contrast-[1.1] hover:scale-[1.04] transition-transform duration-500" />
            <div className="absolute inset-0 border border-primary/30 pointer-events-none" />
          </div>
          <div className="absolute -bottom-5 -right-5 w-[60%] h-[60%] border border-primary/20 pointer-events-none -z-10" />
        </div>

        <div className="reveal-item opacity-0 translate-x-10 transition-all duration-700 delay-200 relative">
          <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Pandi Sakthi — The Trainer</p>
          <h2 className="font-bebas text-[clamp(52px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-6">
            BUILT BY<br />OBSESSION
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px]">
            Team Wolf was founded on a single belief — that extraordinary physiques are built through relentless consistency, intelligent programming, and an unshakeable mindset. No shortcuts. No excuses.
          </p>
          <blockquote className="font-bebas text-[clamp(28px,3vw,42px)] leading-[1.2] my-10 pl-6 border-l-[3px] border-primary">
            "The wolf does not perform for the sheep."
          </blockquote>
          <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px]">
            With over 8 years of competitive bodybuilding experience, multiple Mr. India medals, and over 500+ client transformations, Pandi Sakthi and Team Wolf deliver results that speak for themselves. Recognized as the best fitness coach in Tamil Nadu and India.
          </p>
          <div className="flex flex-col gap-3 mt-10">
            {[
              "Certified Personal Trainer & Nutritionist",
              "Multiple-Time Mr. India Medalist",
              "Online & In-Person Coaching — Chennai",
              "Specialization: Fat Loss & Competition Prep",
            ].map((cred) => (
              <div key={cred} className="flex items-center gap-4 font-barlow-condensed text-sm tracking-[0.1em] uppercase text-foreground/70">
                <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                {cred}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useEffect, useRef } from "react";
import heroImg from "@/assets/i3.png";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      bgRef.current?.classList.add("scale-100");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start md:flex-row md:justify-start items-start md:items-center pt-[120px] md:pt-[120px] px-6 md:px-[60px] pb-20 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-[60%_top] md:bg-[80%_20%] scale-105 transition-transform duration-[8s] ease-out brightness-[0.45] md:brightness-[0.35]"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 60% 50%, hsl(354 97% 41% / 0.08) 0%, transparent 60%),
          linear-gradient(to right, hsl(0 0% 2% / 0.95) 0%, hsl(0 0% 2% / 0.3) 50%, transparent 100%),
          linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 40%)
        `
      }} />

      <div className="relative z-10 max-w-[700px]">
        <p className="font-barlow-condensed text-[13px] tracking-[0.35em] text-primary uppercase mb-5 opacity-0 translate-y-5" style={{ animation: "fadeUp 0.8s 0.3s forwards" }}>
          Elite Fitness Coaching · Chennai
        </p>
        <h1 className="font-bebas text-[clamp(72px,11vw,140px)] leading-[0.88] tracking-[0.02em] mb-8 opacity-0 translate-y-[30px]" style={{ animation: "fadeUp 0.8s 0.5s forwards" }}>
          FORGE<br />YOUR<br /><span className="text-primary">LEGACY</span>
        </h1>
        <p className="text-base leading-[1.7] text-foreground/60 max-w-[420px] mb-12 opacity-0 translate-y-5" style={{ animation: "fadeUp 0.8s 0.7s forwards" }}>
          Join Team Wolf, led by Pandi Sakthi — multiple-time Mr. India medalist and the best fitness coach in Tamil Nadu and India. Real transformations. Unbreakable discipline. We build champions — on stage and in life.
        </p>
        <div className="flex gap-5 items-center opacity-0" style={{ animation: "fadeUp 0.8s 0.9s forwards" }}>
          <a href="#results" className="font-barlow-condensed text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground relative overflow-hidden group">
            <span className="relative z-10">See Transformations</span>
            <span className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a href="#about" className="font-barlow-condensed text-[13px] tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2.5 hover:text-foreground transition-colors group">
            <span className="w-[30px] h-px bg-current group-hover:w-[50px] transition-all duration-300" />
            Meet the Coach
          </a>
        </div>
      </div>

      <div className="absolute right-6 md:right-[60px] bottom-20 z-10 hidden md:flex flex-col gap-7 text-right opacity-0" style={{ animation: "fadeIn 1s 1.2s forwards" }}>
        {[
          { num: "500+", label: "Members Transformed" },
          { num: "50+", label: "Competition Medals" },
          { num: "8+", label: "Years Experience" },
        ].map((s) => (
          <div key={s.label}>
            <span className="font-bebas text-5xl leading-none text-primary block">{s.num}</span>
            <span className="font-barlow-condensed text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0" style={{ animation: "fadeIn 1s 1.5s forwards" }}>
        <div className="w-px h-[50px] bg-gradient-to-b from-primary to-transparent" style={{ animation: "scrollPulse 2s infinite" }} />
        <span className="font-barlow-condensed text-[10px] tracking-[0.3em] uppercase text-muted-foreground rotate-90 mt-2.5">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect, useRef } from "react";
import t2 from "@/assets/t2.png";
import t3 from "@/assets/t3.png";
import t7 from "@/assets/t7.png";

const transformations = [
  { img: t7, tag: "Fat Loss", name: "12-Week Program" },
  { img: t3, tag: "Muscle Gain", name: "16-Week Program" },
  { img: t2, tag: "Body Recomp", name: "6-Month Journey" },
];

const TransformationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % transformations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove("opacity-0", "-translate-x-10", "translate-x-10", "translate-y-10");
          e.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        }
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" ref={sectionRef} className="py-20 md:py-[120px] px-6 md:px-[60px] bg-card">
      <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16">
        <div>
          <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Client Results</p>
          <h2 className="font-bebas text-[clamp(42px,7vw,90px)] leading-[0.9] tracking-[0.02em]">
            REAL PACK<br /> TRANSFORMATIONS
          </h2>
        </div>
        <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px] mt-4 md:mt-0">
          Every before is a promise. Every after is proof. These are real people who chose to change.
        </p>
      </div>

      {/* Featured large card with smooth crossfade */}
      <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 delay-200 relative w-full aspect-square md:aspect-video overflow-hidden rounded-sm mb-3 bg-[#0a0a0a]">
        {transformations.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          >
            <img src={t.img} alt={t.tag} className="w-full h-full object-contain p-4 pb-20 md:p-8 md:pb-8" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-10 bg-black/40 md:bg-transparent p-2 md:p-0 rounded">
              <p className="font-barlow-condensed text-[11px] tracking-[0.25em] uppercase text-primary mb-2 drop-shadow-md">{t.tag}</p>
              <p className="font-bebas text-2xl md:text-5xl tracking-[0.05em] drop-shadow-md">{t.name}</p>
            </div>
          </div>
        ))}

        {/* Progress dots */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex gap-2 z-10">
          {transformations.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${activeIndex === i ? "bg-primary w-6" : "bg-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-3 gap-[3px]">
        {transformations.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative aspect-[4/3] md:aspect-video overflow-hidden transition-all duration-500 bg-[#111] ${activeIndex === i ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
              }`}
          >
            <img src={t.img} alt={t.tag} className="w-full h-full object-contain p-2 pb-7 md:p-2 md:pb-2" />
            <div className="absolute inset-0 bg-background/20" />
            <p className="absolute bottom-1 left-2 font-barlow-condensed text-[10px] md:text-xs tracking-[0.15em] uppercase text-primary md:text-foreground/80 drop-shadow-md bg-black/60 md:bg-transparent px-1 md:px-0 rounded">{t.tag}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TransformationsSection;

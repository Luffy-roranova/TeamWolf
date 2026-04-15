import { useEffect, useRef, useState } from "react";
import i2 from "@/assets/i2.png";

const stats = [
  { num: 50, suffix: "+", label: "Competition Medals" },
  { num: 30, suffix: "+", label: "Athletes Prepped" },
  { num: 12, suffix: "", label: "State Championships" },
  { num: 100, suffix: "%", label: "Natural Athletes" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const interval = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(interval); }
          else setCount(start);
        }, 30);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="font-bebas text-[52px] text-primary leading-none">{count}{suffix}</span>;
};

const CompetitionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("opacity-100", "translate-y-0", "translate-x-0")),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="competition" ref={sectionRef} className="py-[120px] px-6 md:px-[60px]">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-20 items-center">
        <div className="reveal-item opacity-0 -translate-x-10 transition-all duration-700">
          <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">On Stage</p>
          <h2 className="font-bebas text-[clamp(52px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-6">
            COMPETITION<br />PROVEN
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px]">
            Team Wolf athletes have competed across Tamil Nadu and beyond. Our stage prep methodology is built from real competitive experience — not theory.
          </p>
          <div className="grid grid-cols-2 gap-[2px] mt-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary p-7 relative overflow-hidden group hover:bg-primary/[0.08] transition-colors duration-300">
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary group-hover:h-full transition-all duration-400" />
                <CountUp target={s.num} suffix={s.suffix} />
                <p className="font-barlow-condensed text-xs tracking-[0.18em] uppercase text-muted-foreground mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-item opacity-0 translate-x-10 transition-all duration-700 delay-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent z-10 pointer-events-none" />
          <img src={i2} alt="Competition" className="w-full object-cover brightness-[0.8] contrast-[1.15] hover:scale-[1.03] transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;

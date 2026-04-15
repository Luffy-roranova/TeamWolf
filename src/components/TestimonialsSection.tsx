import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "I lost 18kg in 14 weeks. Team Wolf didn't just change my body — they changed how I think about myself.",
    name: "Karthik R.",
    goal: "Fat Loss · 14 Weeks",
  },
  {
    text: "From stage fright to competing at state level. The competition prep program is absolutely world-class.",
    name: "Dinesh M.",
    goal: "Competition Prep · 20 Weeks",
  },
  {
    text: "The nutrition plan alone was worth it. I never felt starved, and my body just transformed over 3 months.",
    name: "Praveen S.",
    goal: "Body Recomp · 12 Weeks",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("opacity-100", "translate-y-0")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-[120px] px-6 md:px-[60px] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,_hsl(354_97%_41%_/_0.06)_0%,_transparent_70%)] pointer-events-none" />
      <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700">
        <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Testimonials</p>
        <h2 className="font-bebas text-[clamp(52px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-6">
          WHAT THE<br />PACK SAYS
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-[2px] mt-16">
        {testimonials.map((t, i) => (
          <div key={i} className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 bg-secondary p-10 text-left relative overflow-hidden group hover:bg-primary/[0.05]`} style={{ transitionDelay: `${i * 150}ms` }}>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
            <p className="text-[15px] leading-[1.8] text-foreground/65 italic mb-7">"{t.text}"</p>
            <p className="font-barlow-condensed text-base font-bold tracking-[0.1em] uppercase">{t.name}</p>
            <p className="font-barlow-condensed text-xs tracking-[0.15em] uppercase text-primary mt-1">{t.goal}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

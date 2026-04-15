import { useEffect, useRef } from "react";
import { MapPin, ShoppingBag, GraduationCap, Wifi } from "lucide-react";

const locations = [
  { city: "Tiruppur", branches: ["2 Branches in Arulpuram", "1 Branch in Chettipalayam"] },
  { city: "Coimbatore", branches: ["1 Branch in Karumathampatti", "F2 Fitness India (Chitra) — One of the largest gyms in India"] },
];

const features = [
  {
    icon: MapPin,
    title: "6 ELITE LOCATIONS",
    desc: "State-of-the-art fitness centers across Tiruppur & Coimbatore with premium equipment and expert guidance.",
  },
  {
    icon: ShoppingBag,
    title: "SUPPLEMENT STORES",
    desc: "Two dedicated retail stores in Arulpuram & Karumathampatti offering authentic, high-quality gym supplements.",
  },
  {
    icon: GraduationCap,
    title: "TRAINER ACADEMY",
    desc: "Our Gym Trainer Academy produces world-class fitness professionals with rigorous training and validated certifications.",
  },
  {
    icon: Wifi,
    title: "ONLINE COACHING",
    desc: "Personalized workout plans and dietary guidance from expert coaches — no matter where you are in the world.",
  },
];

const WolfFactorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("opacity-100", "translate-y-0")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-[120px] px-6 md:px-[60px] bg-background relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[200px] md:text-[300px] text-primary/[0.03] whitespace-nowrap pointer-events-none tracking-[0.1em] select-none">
        WOLF
      </div>

      <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 mb-16">
        <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">The Empire</p>
        <h2 className="font-bebas text-[clamp(42px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-6">
          WOLF FITNESS<br />FACTORY
        </h2>
        <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[560px]">
          With over 600 successful transformations in three years, Wolf Fitness Factory is your premier destination for world-class fitness, nutrition, and professional education.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] mb-16">
        {features.map((f, i) => (
          <div
            key={i}
            className={`reveal-item opacity-0 translate-y-10 transition-all duration-700 bg-secondary p-8 relative group overflow-hidden hover:bg-primary/[0.06]`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary transition-all duration-500 group-hover:h-full" />
            <f.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="font-bebas text-2xl tracking-[0.05em] mb-3">{f.title}</h3>
            <p className="text-[14px] leading-[1.7] text-foreground/50">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Locations */}
      <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((loc, i) => (
          <div key={i} className="bg-secondary p-8 relative group overflow-hidden hover:bg-primary/[0.06] transition-colors duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-bebas text-3xl tracking-[0.05em] mb-1">{loc.city}</h3>
            <p className="font-barlow-condensed text-[11px] tracking-[0.3em] uppercase text-primary mb-4">
              {loc.branches.length} {loc.branches.length === 1 ? "Location" : "Locations"}
            </p>
            <ul className="space-y-2">
              {loc.branches.map((b, j) => (
                <li key={j} className="flex items-center gap-3 text-[14px] text-foreground/60">
                  <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WolfFactorySection;

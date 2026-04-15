const items = ["Strength Training", "Body Recomposition", "Competition Prep", "Nutrition Coaching", "Online Programs", "Personal Training"];

const MarqueeSection = () => (
  <div className="py-10 overflow-hidden border-y border-border/30 bg-secondary">
    <div className="flex gap-[60px]" style={{ animation: "marquee 20s linear infinite" }}>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="font-bebas text-xl tracking-[0.3em] uppercase text-muted-foreground shrink-0 flex items-center gap-[60px]">
          {item}
          <span className="text-primary text-sm">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeSection;

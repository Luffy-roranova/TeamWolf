const Footer = () => (
  <footer className="px-6 md:px-[60px] py-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="font-bebas text-[22px] tracking-[0.15em]">
      TEAM <span className="text-primary">WOLF</span>
    </div>
    <p className="font-barlow-condensed text-xs tracking-[0.12em] text-muted-foreground">
      © 2024 Team Wolf Fitness · Chennai, Tamil Nadu
    </p>
    <ul className="flex gap-7 list-none">
      {["Home", "About", "Results", "Contact"].map((l) => (
        <li key={l}>
          <a href={l === "Home" ? "#" : `#${l.toLowerCase()}`} className="font-barlow-condensed text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
            {l}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;

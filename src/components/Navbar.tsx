const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-[900] px-6 md:px-[60px] py-7 flex items-center justify-between">
    <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-transparent pointer-events-none" />
    <a href="#" className="font-bebas text-[28px] tracking-[0.15em] text-foreground relative z-10">
      TEAM <span className="text-primary">WOLF</span>
    </a>
    <ul className="hidden md:flex gap-10 list-none relative z-10">
      {["About", "Results", "Competition", "Contact"].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="font-barlow-condensed text-[13px] tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

import { useRef, useEffect } from "react";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png";
import i3 from "@/assets/i3.png";
import i4 from "@/assets/i4.png";
import i5 from "@/assets/i5.png";

const images = [i1, i2, i3, i4, i5, i1, i2, i3, i4, i5];

const GallerySection = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let pos = 0;
    const speed = 0.3;

    const animate = () => {
      pos -= speed;
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(pos) >= halfWidth) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(animate); };

    // track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      // track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-20 md:py-[120px] px-6 md:px-[60px] bg-card">
      <p className="font-barlow-condensed text-[11px] tracking-[0.4em] uppercase text-primary mb-4">Gallery</p>
      <h2 className="font-bebas text-[clamp(42px,7vw,90px)] leading-[0.9] tracking-[0.02em] mb-2">
        THE<br />APEX
      </h2>
      <p className="text-[15px] leading-[1.8] text-foreground/55 max-w-[480px] mb-4">
        The pack rises. The Apex leads.
      </p>

      <div className="mt-10 md:mt-[60px] overflow-hidden">
        <div ref={trackRef} className="flex gap-[3px] will-change-transform">
          {images.map((img, i) => (
            <div key={i} className="shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[380px] overflow-hidden relative group">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover brightness-75 grayscale-[0.2] group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

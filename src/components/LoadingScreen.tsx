import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"blink" | "fadeout" | "done">("blink");

  useEffect(() => {
    const blinkTimer = setTimeout(() => setPhase("fadeout"), 2400);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onFinish();
    }, 3200);
    return () => {
      clearTimeout(blinkTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700"
      style={{ opacity: phase === "fadeout" ? 0 : 1 }}
    >
      <img
        src={logo}
        alt="Team Wolf Logo"
        className="w-40 h-40 object-contain"
        style={{
          animation: phase === "blink" ? "logoPulse 1.2s ease-in-out infinite" : "none",
        }}
      />
      <div className="mt-8 w-48 h-[2px] bg-secondary overflow-hidden rounded-full">
        <div
          className="h-full bg-primary"
          style={{ animation: "loaderSlide 2.4s ease-out forwards" }}
        />
      </div>
      <p className="font-barlow-condensed text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">
        Loading
      </p>
    </div>
  );
};

export default LoadingScreen;

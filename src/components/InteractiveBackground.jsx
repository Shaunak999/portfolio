import { useEffect } from "react";

function InteractiveBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const handleMove = (event) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <>
      <div className="bg-gif" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}

export default InteractiveBackground;

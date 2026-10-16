"use client";
import { useEffect, useState } from "react";

type Slide = { image: string; title: string; subtitle: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, n) => (
        <div
          key={n}
          className={`slide ${n === i ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(10,25,20,.45),rgba(10,25,20,.55)), url(${s.image})`,
          }}
          aria-hidden={n !== i}
        >
          <div className="slide-text">
            <h1>{s.title}</h1>
            <p>{s.subtitle}</p>
          </div>
        </div>
      ))}
      <button
        className="arrow left"
        onClick={() => go(i - 1)}
        aria-label="Sebelumnya"
      >
        ‹
      </button>
      <button
        className="arrow right"
        onClick={() => go(i + 1)}
        aria-label="Berikutnya"
      >
        ›
      </button>
      <div className="dots">
        {slides.map((_, n) => (
          <button
            key={n}
            className={n === i ? "on" : ""}
            onClick={() => go(n)}
            aria-label={`Slide ${n + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

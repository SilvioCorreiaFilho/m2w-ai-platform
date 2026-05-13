"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const HEADLINE = ["Influência", "Digital.", "Resultados", "Reais."];

const STATS = [
  { val: "2.4M+", label: "Seguidores" },
  { val: "8.3%",  label: "Conversão" },
  { val: "R$1.2M", label: "Receita" },
];

const TICKER_ITEMS = [
  "TikTok Shop", "·", "Fanvue", "·", "Automação B2B", "·",
  "ComfyUI", "·", "RTX 4070Ti", "·", "24/7", "·",
  "TikTok Shop", "·", "Fanvue", "·", "Automação B2B", "·",
  "ComfyUI", "·", "RTX 4070Ti", "·", "24/7", "·",
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Label bar fade in */
      gsap.from(".hero-label", {
        opacity: 0,
        y: -12,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.3,
      });

      /* Headline lines — clip-path wipe from left */
      gsap.fromTo(
        ".hero-line",
        { clipPath: "inset(0 100% 0 0)", opacity: 1 },
        {
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.12,
          duration: 1.0,
          ease: "power4.inOut",
          delay: 0.5,
        }
      );

      /* Subtitle */
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });

      /* CTA buttons */
      gsap.from(".hero-cta-btn", {
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.4,
      });

      /* Video card */
      gsap.from(".hero-video", {
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.7,
      });

      /* Stats */
      gsap.from(".hero-stat", {
        opacity: 0,
        y: 12,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        delay: 1.3,
      });

      /* Accent rule */
      gsap.from(".hero-rule", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col"
    >
      {/* ── Label bar ─────────────────────────────────────────────── */}
      <div className="hero-label absolute top-[68px] left-0 right-0 z-10 flex justify-between items-center px-8 pt-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.6rem] tracking-[0.35em] text-cream-muted uppercase">
            Issue Nº 001
          </span>
          <span className="w-4 h-px" style={{ background: "var(--cream-border)" }} />
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-cream-muted uppercase">
            Influência IA
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-ember"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-cream-muted uppercase">
            Ao Vivo · 2.4M+ Seguidores
          </span>
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-12 items-center px-8 pt-[120px] pb-[80px] gap-8 max-w-[1440px] mx-auto w-full">

        {/* Left: headline + ctas */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-0">

          {/* Accent rule */}
          <div
            className="hero-rule mb-8 h-[2px] w-14"
            style={{ background: "var(--lime)" }}
          />

          {/* Giant headline — Cormorant italic */}
          <h1
            className="font-display italic leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(4.5rem, 10vw, 10rem)" }}
          >
            {HEADLINE.map((word, i) => (
              <div key={i} className="overflow-hidden">
                <span
                  className="hero-line block"
                  style={{
                    color: i === 1 || i === 3 ? "var(--lime)" : "var(--cream)",
                  }}
                >
                  {word}
                </span>
              </div>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-sub font-sans text-cream-muted text-base lg:text-lg mt-10 max-w-md leading-relaxed">
            Avatar digital de IA para TikTok Shop, Fanvue e automação B2B —
            conteúdo que converte 24 horas por dia, sem pausas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button
              className="hero-cta-btn font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink bg-lime px-7 py-3.5 hover:bg-cream transition-colors duration-200"
              onClick={() => scrollTo("#contact")}
            >
              Activar Mia Park ↗
            </button>
            <button
              className="hero-cta-btn font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cream px-7 py-3.5 transition-colors duration-200 hover:text-lime"
              style={{ border: "1px solid var(--cream-border)" }}
              onClick={() => scrollTo("#portfolio")}
            >
              Ver Portfolio →
            </button>
          </div>
        </div>

        {/* Right: video card + stats */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-end gap-6">

          {/* Video card */}
          <div
            className="hero-video video-grain relative overflow-hidden"
            style={{ width: "100%", maxWidth: "300px", aspectRatio: "9/16" }}
          >
            <video
              src="/portfolio/escova-short-hook.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,8,0.85) 0%, transparent 50%)",
              }}
            />
            {/* Card label */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase mb-1">
                Mia Park
              </p>
              <p className="font-display italic text-cream text-2xl leading-tight">
                TikTok Shop
              </p>
            </div>
            {/* Corner badge */}
            <div
              className="absolute top-4 right-4 font-mono text-[0.55rem] tracking-[0.2em] uppercase text-ink px-2 py-1"
              style={{ background: "var(--lime)" }}
            >
              IA
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 w-full max-w-[300px]">
            {STATS.map(({ val, label }) => (
              <div key={label} className="hero-stat flex flex-col gap-1">
                <span
                  className="font-mono font-bold text-xl leading-none"
                  style={{ color: "var(--lime)" }}
                >
                  {val}
                </span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] text-cream-muted uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ticker ────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ borderTop: "1px solid var(--cream-border)" }}
      >
        <div className="py-3 flex items-center overflow-hidden">
          <div className="marquee-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase px-4 ${
                  item === "·" ? "text-lime" : "text-cream-muted"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

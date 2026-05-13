"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "Sobre Mia" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-logo", {
        opacity: 0,
        x: -20,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".nav-item", {
        opacity: 0,
        y: -10,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.4,
      });
      gsap.from(".nav-cta", {
        opacity: 0,
        x: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.6,
      });
    }, navRef);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-cream-border backdrop-blur-sm"
          : "border-b border-transparent"
      }`}
      style={{ background: scrolled ? "rgba(10,10,8,0.85)" : "transparent" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <button
          className="nav-logo flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-mono text-sm font-bold tracking-[0.3em] text-cream group-hover:text-lime transition-colors duration-200">
            M2W
          </span>
          <span
            className="w-6 h-px transition-colors duration-300"
            style={{ background: "var(--cream-border)" }}
          />
          <span className="font-mono text-[0.6rem] tracking-[0.2em] text-cream-muted uppercase hidden sm:block">
            Marketing to Win
          </span>
        </button>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              className="nav-item link-editorial"
              onClick={() => scrollTo(href)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          className="nav-cta font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink bg-lime px-5 py-2.5 transition-colors duration-200 hover:bg-cream"
          onClick={() => scrollTo("#contact")}
        >
          Começar Agora
        </button>
      </div>
    </nav>
  );
}

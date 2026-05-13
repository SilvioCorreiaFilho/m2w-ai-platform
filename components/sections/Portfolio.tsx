"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface PortfolioItem {
  id: string;
  title: string;
  platform: string;
  duration: string;
  reach: string;
  conv: string;
  video: string;
  poster: string;
  tag: string;
  col: "tall" | "wide" | "square";
}

const ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Escova Sônica — Hook Final",
    platform: "TikTok Shop",
    duration: "0:15",
    reach: "3.4M",
    conv: "8.9%",
    video: "/portfolio/escova-hook-final.mp4",
    poster: "/portfolio/thumb-hook-final.jpg",
    tag: "Hook",
    col: "tall",
  },
  {
    id: "2",
    title: "LTX Natural — Studio Look",
    platform: "Fanvue",
    duration: "0:22",
    reach: "1.2M",
    conv: "6.1%",
    video: "/portfolio/escova-ltx-natural.mp4",
    poster: "/portfolio/thumb-ltx-natural.jpg",
    tag: "Premium",
    col: "square",
  },
  {
    id: "3",
    title: "Seedance — Unboxing",
    platform: "TikTok Shop",
    duration: "0:18",
    reach: "2.1M",
    conv: "7.4%",
    video: "/portfolio/escova-seedance.mp4",
    poster: "/portfolio/thumb-seedance.jpg",
    tag: "Review",
    col: "square",
  },
  {
    id: "4",
    title: "Short Hook — Close-up",
    platform: "TikTok Shop",
    duration: "0:09",
    reach: "4.8M",
    conv: "9.2%",
    video: "/portfolio/escova-short-hook.mp4",
    poster: "/portfolio/thumb-short-hook.jpg",
    tag: "Viral",
    col: "tall",
  },
  {
    id: "5",
    title: "X3 IPX7 — Hook Original",
    platform: "TikTok Shop",
    duration: "0:16",
    reach: "3.4M",
    conv: "8.9%",
    video: "/portfolio/x3-ipx7-hook.mp4",
    poster: "/portfolio/thumb-x3-ipx7-hook.jpg",
    tag: "Launch",
    col: "square",
  },
  {
    id: "6",
    title: "HF Studio — Lifestyle",
    platform: "Fanvue",
    duration: "0:20",
    reach: "0.9M",
    conv: "5.8%",
    video: "/portfolio/hf-studio.mp4",
    poster: "/portfolio/thumb-hf-studio.jpg",
    tag: "Editorial",
    col: "square",
  },
];

function VideoCard({ item, index }: { item: PortfolioItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const onEnter = () => {
    videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
  };
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };

  const isTall = item.col === "tall";

  return (
    <div
      ref={cardRef}
      className={`portfolio-card group relative overflow-hidden cursor-pointer ${
        isTall ? "row-span-2" : "row-span-1"
      }`}
      style={{
        border: "1px solid var(--cream-border)",
        aspectRatio: isTall ? "9/16" : "4/3",
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Index label */}
      <div
        className="absolute top-4 left-4 z-20 font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Tag */}
      <div
        className="absolute top-4 right-4 z-20 font-mono text-[0.55rem] tracking-[0.2em] uppercase px-2 py-0.5"
        style={{
          background: "var(--lime)",
          color: "var(--ink)",
        }}
      >
        {item.tag}
      </div>

      {/* Video/poster */}
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,8,0.92) 0%, rgba(10,10,8,0.2) 50%, transparent 100%)",
          opacity: playing ? 0.7 : 1,
        }}
      />

      {/* Bottom metadata */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <div className="flex items-center justify-between mb-2">
          <span
            className="font-mono text-[0.55rem] tracking-[0.25em] uppercase"
            style={{ color: "var(--lime)" }}
          >
            {item.platform}
          </span>
          <span className="font-mono text-[0.55rem] text-cream-muted">
            {item.duration}
          </span>
        </div>
        <h3
          className="font-display italic text-cream leading-tight mb-3"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        >
          {item.title}
        </h3>
        <div
          className="flex gap-5 pt-3"
          style={{ borderTop: "1px solid var(--cream-border)" }}
        >
          <div>
            <p className="font-mono text-xs font-bold text-cream">{item.reach}</p>
            <p className="font-mono text-[0.5rem] tracking-[0.2em] text-cream-muted uppercase">
              Alcance
            </p>
          </div>
          <div>
            <p className="font-mono text-xs font-bold" style={{ color: "var(--lime)" }}>
              {item.conv}
            </p>
            <p className="font-mono text-[0.5rem] tracking-[0.2em] text-cream-muted uppercase">
              Conversão
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-heading", {
        scrollTrigger: {
          trigger: ".portfolio-heading",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".portfolio-card", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 32,
        stagger: { amount: 0.6, from: "start" },
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="portfolio-heading flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="chapter-number mb-4">02 — Portfolio</p>
            <h2
              className="font-display italic leading-[0.88]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
            >
              Conteúdo Mia Park
            </h2>
          </div>
          <p className="font-sans text-cream-muted text-sm max-w-xs leading-relaxed">
            Cada vídeo gerado localmente com LTX-2.3 e Higgsfield. Passa o rato para ver.
          </p>
        </div>

        <div className="rule mb-16" />

        {/* Grid */}
        <div
          className="portfolio-grid grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
        >
          {ITEMS.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="flex items-center gap-4 mt-12">
          <div className="rule flex-1" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] text-cream-muted uppercase whitespace-nowrap">
            6 vídeos · LTX-2.3 + Higgsfield · RTX 4070Ti
          </span>
          <div className="rule flex-1" />
        </div>
      </div>
    </section>
  );
}

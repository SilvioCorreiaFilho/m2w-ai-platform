"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const SERVICES = [
  {
    num: "01",
    tag: "TikTok Shop",
    title: "Live Commerce",
    subtitle: "Mia Park como embaixadora permanente",
    desc: "Reviews, unboxings e lives de shopping que convertem sem pausa, sem cachê de influencer. Avatar sincronizado com o estoque em tempo real.",
    metrics: [
      { val: "2.4M+", label: "GMV Gerado" },
      { val: "8.3%",  label: "Conversão" },
      { val: "187",   label: "Pedido médio" },
    ],
    features: [
      "Avatar sincronizado com estoque em tempo real",
      "Scripts A/B testados automaticamente",
      "Lives programadas 24/7",
      "Integração nativa TikTok Affiliate",
    ],
    cta: "Activar TikTok Shop",
  },
  {
    num: "02",
    tag: "Fanvue",
    title: "Conteúdo Premium",
    subtitle: "Canal de subscrição com IA generativa",
    desc: "Canal de subscrição com conteúdo exclusivo gerado por IA. Receita recorrente mensal sem esforço criativo. Personalização por tier.",
    metrics: [
      { val: "12.4K", label: "Subscritores" },
      { val: "87%",   label: "Retenção" },
      { val: "89K",   label: "Receita/mês" },
    ],
    features: [
      "Conteúdo diário gerado automaticamente",
      "Personalização por tier de subscrição",
      "DM automatizado com IA conversacional",
      "Analytics de engajamento em tempo real",
    ],
    cta: "Criar Canal Fanvue",
  },
  {
    num: "03",
    tag: "B2B Automation",
    title: "Automação Comercial",
    subtitle: "Pipeline completo de criação com IA",
    desc: "Pipeline completo de criação de conteúdo com IA para agências e marcas — do briefing ao asset publicado em minutos. ROI garantido.",
    metrics: [
      { val: "3×",   label: "Output de Conteúdo" },
      { val: "47+",  label: "Marcas Atendidas" },
      { val: "300%", label: "ROI Garantido" },
    ],
    features: [
      "API ComfyUI integrada (RTX 4070Ti)",
      "Geração de persona customizável",
      "Entrega em WebP/MP4 optimizado",
      "Gestão de campanha multi-plataforma",
    ],
    cta: "Proposta Comercial",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-heading", {
        scrollTrigger: { trigger: ".services-heading", start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".service-chapter", {
        scrollTrigger: { trigger: ".services-grid", start: "top 75%" },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="services-heading flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="chapter-number mb-4">03 — Serviços</p>
            <h2
              className="font-display italic leading-[0.88]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
            >
              Funis & Receita
            </h2>
          </div>
          <p className="font-sans text-cream-muted text-sm max-w-xs leading-relaxed">
            Três vectores de receita orquestrados pela mesma persona digital de IA.
          </p>
        </div>

        <div className="rule mb-16" />

        {/* Service chapters */}
        <div className="services-grid flex flex-col gap-0">
          {SERVICES.map((s, idx) => (
            <div
              key={s.num}
              className="service-chapter group"
              style={{ borderBottom: "1px solid var(--cream-border)" }}
            >
              {/* Chapter top row */}
              <div className="grid grid-cols-12 gap-8 py-10 items-start">

                {/* Number + tag */}
                <div className="col-span-12 md:col-span-2 flex flex-col gap-3">
                  <span
                    className="font-display italic leading-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "var(--cream-border)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="font-mono text-[0.6rem] tracking-[0.25em] uppercase w-fit px-2 py-1"
                    style={{ background: "var(--lime-dim)", color: "var(--lime)", border: "1px solid var(--lime-border)" }}
                  >
                    {s.tag}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                  <h3
                    className="font-display italic leading-tight"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--cream)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] text-cream-muted uppercase">
                    {s.subtitle}
                  </p>
                  <p className="font-sans text-cream-muted text-sm leading-relaxed mt-2">
                    {s.desc}
                  </p>
                </div>

                {/* Metrics */}
                <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="flex items-baseline gap-3">
                      <span
                        className="font-mono font-bold text-2xl leading-none"
                        style={{ color: "var(--lime)" }}
                      >
                        {m.val}
                      </span>
                      <span className="font-mono text-[0.55rem] tracking-[0.2em] text-cream-muted uppercase">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features + CTA */}
                <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
                  <ul className="flex flex-col gap-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "var(--lime)" }}
                        />
                        <span className="font-sans text-cream-muted text-xs leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink bg-lime px-5 py-3 self-start hover:bg-cream transition-colors duration-200 mt-2"
                    onClick={() => scrollTo("#contact")}
                  >
                    {s.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-20">
          {[
            { val: "< 48h", label: "Setup inicial" },
            { val: "24/7",  label: "Conteúdo activo" },
            { val: "RTX 4070Ti", label: "Geração local" },
            { val: "LGPD", label: "Conformidade" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-8 gap-2"
              style={{
                borderLeft: i > 0 ? "1px solid var(--cream-border)" : "none",
                borderTop: "1px solid var(--cream-border)",
              }}
            >
              <span
                className="font-mono font-bold text-lg"
                style={{ color: "var(--lime)" }}
              >
                {item.val}
              </span>
              <span className="font-mono text-[0.55rem] tracking-[0.25em] text-cream-muted uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

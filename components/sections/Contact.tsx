"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const SERVICE_OPTIONS = [
  "TikTok Shop & Live Commerce",
  "Fanvue & Conteúdo Premium",
  "Automação Comercial B2B",
  "Pacote Completo",
];

const INFO_ITEMS = [
  {
    label: "01 — Resposta Rápida",
    desc: "Respondemos em menos de 2 horas durante dias úteis.",
  },
  {
    label: "02 — Proposta Personalizada",
    desc: "Cada proposta é construída à medida do teu negócio e objectivos.",
  },
  {
    label: "03 — Setup em 48 Horas",
    desc: "Após aprovação, a Mia Park começa a gerar conteúdo em até 48h.",
  },
  {
    label: "04 — ROI Garantido",
    desc: "Metodologia testada em 47+ marcas. Garantia de retorno de 300% no primeiro trimestre.",
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    servico: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        scrollTrigger: { trigger: ".contact-heading", start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".contact-field", {
        scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".contact-info-item", {
        scrollTrigger: { trigger: ".contact-info", start: "top 80%" },
        opacity: 0,
        x: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="contact-heading flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="chapter-number mb-4">04 — Contacto</p>
            <h2
              className="font-display italic leading-[0.88]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--cream)" }}
            >
              Comece Agora
            </h2>
          </div>
          <p className="font-sans text-cream-muted text-sm max-w-xs leading-relaxed">
            A Mia Park começa a trabalhar para o seu negócio em menos de 48 horas após aprovação.
          </p>
        </div>

        <div className="rule mb-16" />

        {/* Two-column layout */}
        <div className="grid grid-cols-12 gap-12 lg:gap-20">

          {/* Form */}
          <div className="col-span-12 lg:col-span-7">
            {sent ? (
              <div className="flex flex-col gap-6 py-16">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ border: "1px solid var(--lime)", color: "var(--lime)" }}
                >
                  <span className="font-mono text-lg">✓</span>
                </div>
                <h3 className="font-display italic text-cream" style={{ fontSize: "2rem" }}>
                  Proposta enviada.
                </h3>
                <p className="font-sans text-cream-muted text-sm leading-relaxed max-w-sm">
                  Recebemos o seu pedido. Entraremos em contacto em menos de 2 horas com uma proposta personalizada.
                </p>
                <button
                  className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cream-muted self-start mt-4 hover:text-lime transition-colors duration-200"
                  onClick={() => setSent(false)}
                >
                  ← Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                className="contact-form flex flex-col gap-10"
                onSubmit={handleSubmit}
              >
                {/* Row 1: Nome + Empresa */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="contact-field flex flex-col gap-2">
                    <label className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="input-editorial"
                      placeholder="Silvio Correia"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-field flex flex-col gap-2">
                    <label className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="input-editorial"
                      placeholder="Marketing to Win"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="contact-field flex flex-col gap-2">
                  <label className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-editorial"
                    placeholder="contato@m2w-ai.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Serviço */}
                <div className="contact-field flex flex-col gap-3">
                  <label className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase">
                    Serviço de Interesse
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className="font-mono text-[0.6rem] tracking-[0.15em] uppercase px-4 py-2 transition-colors duration-200"
                        style={{
                          border: `1px solid ${formData.servico === opt ? "var(--lime)" : "var(--cream-border)"}`,
                          color: formData.servico === opt ? "var(--lime)" : "var(--cream-muted)",
                          background: formData.servico === opt ? "var(--lime-dim)" : "transparent",
                        }}
                        onClick={() => setFormData({ ...formData, servico: opt })}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensagem */}
                <div className="contact-field flex flex-col gap-2">
                  <label className="font-mono text-[0.55rem] tracking-[0.3em] text-cream-muted uppercase">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="input-editorial resize-none"
                    placeholder="Descreve o teu projecto, volume de conteúdo e plataformas alvo..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-field font-mono text-[0.7rem] tracking-[0.25em] uppercase text-ink bg-lime py-4 hover:bg-cream transition-colors duration-200 w-full"
                >
                  Enviar Proposta ↗
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="col-span-12 lg:col-span-5 contact-info flex flex-col gap-0">
            {INFO_ITEMS.map((item, i) => (
              <div
                key={i}
                className="contact-info-item py-8 flex flex-col gap-3"
                style={{ borderBottom: "1px solid var(--cream-border)" }}
              >
                <p
                  className="font-mono text-[0.6rem] tracking-[0.25em] uppercase"
                  style={{ color: "var(--lime)" }}
                >
                  {item.label}
                </p>
                <p className="font-sans text-cream-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Email direct */}
            <div className="pt-8 flex flex-col gap-2">
              <p className="font-mono text-[0.55rem] tracking-[0.25em] text-cream-muted uppercase">
                Preferes email directo?
              </p>
              <a
                href="mailto:contato@m2w-ai.com"
                className="font-mono text-sm hover:text-lime transition-colors duration-200"
                style={{ color: "var(--cream)" }}
              >
                contato@m2w-ai.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";

const EMAIL = "contato@m2w-ai.com";
const SITE_URL = "https://m2w-ai.com";

const navItems = [
  ["#solucao", "Solução"],
  ["#portfolio", "Portfolio"],
  ["#precos", "Preços"],
  ["#faq", "FAQ"],
];

const heroVideos = [
  "/portfolio/escova-short-hook.mp4",
  "/portfolio/escova-hook-final.mp4",
  "/portfolio/x3-ipx7-hook.mp4",
];

const painItems = [
  ["Cachê pago, briefing aprovado", "e o conteúdo chega quando o criador tiver tempo."],
  ["Live cancelada de última hora", "porque o influencer fechou com outro cliente."],
  ["TikTok Shop sem voz ativa", "enquanto concorrentes dominam o feed com posts diários."],
  ["Agência entregando 8 posts/mês", "e chamando isso de estratégia."],
  ["Escalar para 3 plataformas", "mas o orçamento só cobre uma operação manual."],
  ["Pipeline de IA travado", "com briefing, criação e publicação ainda desconectados."],
];

const benefits = [
  "Custo até 90% menor que influencer humano equivalente.",
  "Avatar exclusivo possível, sem licenciamento para concorrentes.",
  "Conteúdo publicado todos os dias, sem agenda humana.",
  "Setup básico em menos de 48h após aprovação.",
  "Scripts e criativos otimizados por teste contínuo.",
  "Operação com boas práticas de privacidade e conformidade LGPD.",
  "Volume escalável sem custo proporcional.",
  "Desenvolvimento full-stack quando a marca precisa de infraestrutura.",
];

const services = [
  {
    title: "TikTok Shop & Live Commerce",
    tag: "Avatar de IA para TikTok Shop",
    description:
      "Avatar M2W como embaixador permanente da sua marca, com reviews, unboxings, scripts de venda e lives programadas.",
    metrics: ["30 vídeos", "4 lives", "48h setup"],
    features: ["Avatar do portfólio ou exclusivo", "Scripts A/B testados", "Calendário de publicação", "Integração com operação comercial"],
  },
  {
    title: "Fanvue & Conteúdo Premium",
    tag: "Conteúdo premium com IA",
    description:
      "Canal de assinatura gerenciado com IA generativa, conteúdo diário e estratégia de retenção para receita recorrente.",
    metrics: ["Conteúdo diário", "DM assistida", "Retenção"],
    features: ["Persona consistente", "Conteúdo por tier", "Analytics de engajamento", "Operação multi-plataforma"],
  },
  {
    title: "Automação Comercial B2B",
    tag: "Automação de conteúdo para marcas",
    description:
      "Pipeline completo do briefing ao asset publicado para agências, e-commerces e marcas que precisam escalar produção.",
    metrics: ["1-3 personas", "30-100 assets", "SLA"],
    features: ["Persona customizável", "Entrega WebP/MP4", "Gestão de campanha", "Whitelabel no plano premium"],
  },
  {
    title: "Desenvolvimento Full-Stack + IA",
    tag: "Infraestrutura para crescimento",
    description:
      "Landing pages, plataformas e pipelines personalizados para marcas que querem operação própria com IA integrada.",
    metrics: ["Landing", "Plataforma", "Manutenção"],
    features: ["Do conceito ao deploy", "Integração com ferramentas da operação", "Analytics e conversão", "Suporte contínuo"],
  },
];

const portfolio = [
  {
    src: "/portfolio/escova-hook-final.mp4",
    poster: "/portfolio/thumb-hook-final.jpg",
    title: "Hook Final - Botão Laranja",
    label: "TikTok Shop UGC",
    duration: "0:15",
    tall: true,
    stats: "4.2M views · 9.1% conv.",
  },
  {
    src: "/portfolio/escova-ltx-natural.mp4",
    poster: "/portfolio/thumb-ltx-natural.jpg",
    title: "Hook Natural",
    label: "Product demo",
    duration: "0:15",
    tall: false,
    stats: "1.8M views · 6.4% conv.",
  },
  {
    src: "/portfolio/escova-seedance.mp4",
    poster: "/portfolio/thumb-seedance.jpg",
    title: "Remake de Anúncio",
    label: "Short-form UGC",
    duration: "0:16",
    tall: true,
    stats: "2.6M views · 7.8% conv.",
  },
  {
    src: "/portfolio/escova-short-hook.mp4",
    poster: "/portfolio/thumb-short-hook.jpg",
    title: "Short Hook v3",
    label: "TikTok viral",
    duration: "0:09",
    tall: true,
    stats: "6.1M views · 11.2% conv.",
  },
  {
    src: "/portfolio/x3-ipx7-hook.mp4",
    poster: "/portfolio/thumb-x3-ipx7-hook.jpg",
    title: "X3 IPX7 - Product Launch",
    label: "Live commerce",
    duration: "0:20",
    tall: false,
    stats: "3.4M views · 8.9% conv.",
  },
  {
    src: "/portfolio/hf-studio.mp4",
    poster: "/portfolio/thumb-hf-studio.jpg",
    title: "Studio Lifestyle",
    label: "Brand content",
    duration: "0:05",
    tall: true,
    stats: "28K saves",
  },
];

const proof = [
  {
    quote:
      "Fanvue anunciou que cruzou US$100M de receita anualizada em 2026, com mais de 17 milhões de usuários ativos mensais.",
    source: "BusinessWire / Yahoo Finance · Jan 2026",
    href: "https://finance.yahoo.com/news/ai-powered-creator-monetisation-platform-000100943.html",
  },
  {
    quote:
      "Sacra estima que a economia de creators sintéticos já representa parcela relevante da receita da plataforma.",
    source: "Sacra · 2026",
    href: "https://sacra.com/c/fanvue/",
  },
  {
    quote:
      "Benchmarks de mercado mostram que criadores micro e médios podem custar múltiplos milhares de reais por post ou pacote.",
    source: "Benchmarks Brasil · 2026",
    href: "https://veeras.com.br/blog/quanto-custa-contratar-influenciador-digital",
  },
];

const pricing = [
  {
    title: "TikTok Shop & Live Commerce",
    anchor: "Micro-influencer humano equivalente: R$30.000-R$80.000/mês",
    tiers: [
      ["Básico", "R$2.490", "30 vídeos · 4 lives · avatar do portfólio"],
      ["Padrão", "R$4.990", "60 vídeos · 12 lives · avatar exclusivo"],
      ["Premium", "R$9.990", "Ilimitado · gestão dedicada · analytics"],
    ],
  },
  {
    title: "Fanvue & Conteúdo Premium",
    tiers: [
      ["Básico", "R$1.990", "Canal de assinatura · conteúdo diário"],
      ["Padrão", "R$3.990", "DM assistida · analytics de retenção"],
      ["Premium", "R$7.990", "Gestão completa · operação em tempo real"],
    ],
  },
  {
    title: "Automação Comercial B2B",
    tiers: [
      ["Básico", "R$3.490", "1 persona · 30 assets"],
      ["Padrão", "R$6.990", "3 personas · 100 assets"],
      ["Premium", "R$12.990", "Ilimitado · SLA · whitelabel"],
    ],
  },
  {
    title: "Desenvolvimento Full-Stack + IA",
    tiers: [
      ["Landing + Pipeline", "R$4.900", "Entrega única"],
      ["Plataforma", "R$9.900+", "Por escopo"],
      ["Manutenção", "R$1.490", "Suporte mensal"],
    ],
  },
];

const faqs = [
  [
    "Por que é tão mais barato que influencer humano?",
    "Porque o pipeline de IA não tem cachê, agenda ou renegociação. Custo fixo, volume escalável e qualidade consistente reduzem o custo médio de produção.",
  ],
  [
    "Tenho que escolher só um serviço?",
    "Não. Você pode começar com um serviço e expandir. O Pacote Completo cobre múltiplas modalidades a partir de R$8.900/mês.",
  ],
  [
    "Vocês criam o avatar do zero ou ativam um pronto?",
    "As duas opções existem. Avatar do portfólio tem setup básico em menos de 48h. Avatar exclusivo recebe prazo e investimento na proposta.",
  ],
  [
    "Preciso entender de IA para usar?",
    "Não. A M2W gerencia o pipeline. Você define objetivos, produto, limites de marca e metas comerciais; a operação executa.",
  ],
  [
    "E se eu precisar de desenvolvimento também?",
    "A M2W desenvolve landing pages, plataformas e pipelines próprios quando a operação precisa ir além do conteúdo.",
  ],
  [
    "Tem suporte após o setup?",
    "Sim. O atendimento comercial responde em menos de 2 horas em dias úteis e cada projeto tem ponto de contato direto.",
  ],
  [
    "Quais formas de pagamento?",
    "Cartão de crédito, Pix e boleto. Parcelamento e contrato anual dependem do pacote aprovado.",
  ],
  [
    "E se eu não gostar?",
    "A garantia de ROI e setup depende das metas, escopo e condições definidos na proposta. Se não houver fit, avisamos antes de qualquer cobrança.",
  ],
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function VideoCard({ item }: { item: (typeof portfolio)[number] }) {
  return (
    <article className={`video-card ${item.tall ? "video-card-tall" : ""}`}>
      <video
        src={item.src}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="none"
        onMouseEnter={(event) => event.currentTarget.play().catch(() => {})}
        onMouseLeave={(event) => {
          event.currentTarget.pause();
          event.currentTarget.currentTime = 0;
        }}
      />
      <div className="video-overlay" />
      <span className="video-label">{item.label}</span>
      <span className="video-duration">{item.duration}</span>
      <div className="video-copy">
        <h3>{item.title}</h3>
        <p>{item.stats}</p>
      </div>
    </article>
  );
}

function JsonLd() {
  const graph = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "M2W AI Solutions",
          alternateName: "Marketing to Win",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          email: EMAIL,
          areaServed: ["Brasil", "São Paulo"],
          slogan: "Influencers digitais de IA para marcas que precisam escalar conteúdo.",
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "M2W AI Solutions",
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: "pt-BR",
        },
        {
          "@type": "Service",
          "@id": `${SITE_URL}/#service`,
          name: "Avatar de IA para TikTok Shop e live commerce",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: "Brasil",
          serviceType: "Marketing de influência com IA",
          description:
            "Criação e gestão de influencers digitais de IA, conteúdo UGC, live commerce e automação de conteúdo para marcas.",
          offers: {
            "@type": "OfferCatalog",
            name: "Planos M2W AI Solutions",
            itemListElement: pricing.map((item) => ({
              "@type": "Offer",
              name: item.title,
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            })),
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}/#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/#servicos` },
            { "@type": "ListItem", position: 3, name: "Preços", item: `${SITE_URL}/#precos` },
          ],
        },
      ],
    }),
    []
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <JsonLd />
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="nav-logo" href="#hero" aria-label="M2W AI Solutions">
          <img src="/logo.png" alt="Logo M2W AI Solutions" width="144" height="42" />
        </a>
        <div className="nav-links">
          {navItems.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <button className="nav-cta" onClick={() => scrollTo("#cta")}>
          Diagnóstico gratuito
        </button>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-wall" aria-hidden="true">
            {heroVideos.map((src) => (
              <video key={src} src={src} autoPlay muted loop playsInline preload="metadata" />
            ))}
          </div>
          <div className="hero-shade" />
          <div className="hero-panel">
            <p className="domain">m2w-ai.com</p>
            <h1 className="hero-title">
              <span>Troque R$30K/mês</span>
              <span>de conteúdo com influencer</span>
              <span>por um avatar de IA</span>
              <span>a partir de R$2.490/mês</span>
            </h1>
            <p className="hero-sub">
              A M2W cria e gerencia influencers digitais de IA para TikTok Shop,
              conteúdo premium e B2B: presença diária, operação escalável e custo previsível.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo("#economia")}>
                Ver quanto você economizaria
              </button>
              <button className="btn-secondary" onClick={() => scrollTo("#cta")}>
                Activar Influencer de IA
              </button>
            </div>
            <p className="microcopy">Diagnóstico gratuito em 2 minutos · Sem compromisso</p>
            <div className="hero-stats" aria-label="Comparativo de custo">
              <div><strong>R$30K+</strong><span>30 posts com influencer</span></div>
              <div><strong>R$2.490</strong><span>pacote M2W inicial</span></div>
              <div><strong>48h</strong><span>setup básico</span></div>
            </div>
          </div>
        </section>

        <section id="economia" className="section split">
          <div>
            <span className="eyebrow">01 - Ancoragem de preço</span>
            <h2>Quanto custa um influencer de IA comparado a um influencer humano?</h2>
          </div>
          <div className="text-stack">
            <p>
              Um micro-influencer no TikTok pode cobrar entre R$1.000 e R$8.500 por post.
              Para 30 posts por mês, o custo pode ir de R$30.000 a R$255.000 antes de
              qualquer garantia, exclusividade ou presença em live.
            </p>
            <p>
              A M2W entrega uma operação recorrente com avatar digital de IA a partir de
              R$2.490/mês, com conteúdo diário, planejamento comercial e custo previsível.
            </p>
            <div className="comparison-card">
              <div><span>Influencer humano</span><strong>R$30.000+</strong><small>por mês</small></div>
              <div><span>M2W IA</span><strong>R$2.490</strong><small>por mês</small></div>
            </div>
          </div>
        </section>

        <section className="section" id="dor">
          <span className="eyebrow">02 - Dor comercial</span>
          <h2>Você já fez as contas de quanto gasta com influencer por mês?</h2>
          <div className="pain-grid">
            {painItems.map(([bold, rest], index) => (
              <article className="glass-card" key={bold}>
                <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
                <p><strong>{bold}</strong> - {rest}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="solucao">
          <div>
            <span className="eyebrow">03 - Solução</span>
            <h2>A M2W transforma criação de conteúdo em operação escalável.</h2>
          </div>
          <div className="text-stack">
            <p>
              O mercado de criação de conteúdo com IA chegou ao ponto em que qualidade,
              consistência e velocidade podem operar juntas. A M2W captura isso em um
              serviço gerenciado para marcas que precisam publicar mais, testar mais e vender mais.
            </p>
            <ul className="benefits">
              {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="servicos">
          <span className="eyebrow">04 - Serviços</span>
          <h2>Oferta completa para conteúdo, receita e infraestrutura.</h2>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="metric-row">
                  {service.metrics.map((metric) => <strong key={metric}>{metric}</strong>)}
                </div>
                <ul>
                  {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <span className="eyebrow">05 - Portfolio</span>
          <h2>Conteúdo de produto pensado para TikTok Shop, UGC e live commerce.</h2>
          <div className="portfolio-grid">
            {portfolio.map((item) => <VideoCard key={item.src} item={item} />)}
          </div>
        </section>

        <section className="section" id="prova">
          <span className="eyebrow">06 - Prova de mercado</span>
          <h2>O mercado está validando creators digitais, IA e conteúdo escalável.</h2>
          <div className="proof-grid">
            {proof.map((item) => (
              <a className="quote-card" href={item.href} target="_blank" rel="noreferrer" key={item.source}>
                <p>“{item.quote}”</p>
                <span>{item.source}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="precos">
          <span className="eyebrow">07 - Planos</span>
          <h2>Preços claros para começar pequeno e escalar com controle.</h2>
          <div className="pricing-list">
            {pricing.map((item) => (
              <article className="pricing-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  {item.anchor && <p>{item.anchor}</p>}
                </div>
                <div className="tier-grid">
                  {item.tiers.map(([name, price, detail], index) => (
                    <div className={`tier ${index === 1 ? "featured" : ""}`} key={name}>
                      <span>{name}</span>
                      <strong>{price}</strong>
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="bundle">
            <div>
              <span>Pacote completo - multi-plataforma</span>
              <h3>Todos os serviços + gestão dedicada + SLA prioritário</h3>
            </div>
            <div>
              <strong>A partir de R$8.900/mês</strong>
              <button className="btn-primary" onClick={() => scrollTo("#cta")}>Solicitar proposta</button>
            </div>
          </div>
        </section>

        <section className="section guarantee" id="garantia">
          <div className="seal">Garantia M2W<br />Setup 48h<br />ROI 1º trimestre</div>
          <div>
            <span className="eyebrow">08 - Garantia</span>
            <h2>Setup básico rodando em 48h após aprovação - ou devolvemos.</h2>
            <p>
              ROI não atingido no 1º trimestre? Continuamos sem custo adicional até atingir,
              conforme metas, escopo e condições definidos na proposta.
            </p>
          </div>
        </section>

        <section className="section split urgency" id="urgencia">
          <div className="big-number">450%</div>
          <div>
            <span className="eyebrow">09 - Urgência</span>
            <h2>A janela de vantagem ainda está aberta.</h2>
            <p>
              Marcas que entram cedo acumulam dados de algoritmo, histórico de conversão e presença.
              Quem chega depois pode demorar 6 a 12 meses para recuperar o terreno.
            </p>
          </div>
        </section>

        <section className="section" id="faq">
          <span className="eyebrow">10 - FAQ</span>
          <h2>Perguntas e objeções antes de começar.</h2>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="cta">
          <h2>A única pergunta que resta é: por que esperar?</h2>
          <p>
            Um micro-influencer humano pode custar 10 a 30 vezes mais que o pacote básico da M2W.
            O avatar de IA publica todos os dias. Nunca cancela. Nunca negocia cachê.
          </p>
          {submitted ? (
            <div className="success-message">Proposta solicitada. Responderemos em menos de 2h úteis.</div>
          ) : (
            <form
              className="lead-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <input aria-label="Nome" required placeholder="Seu nome" />
              <input aria-label="Email" type="email" required placeholder={EMAIL} />
              <select aria-label="Serviço de interesse" defaultValue="">
                <option value="" disabled>Serviço de interesse</option>
                <option>TikTok Shop & Live Commerce</option>
                <option>Conteúdo premium</option>
                <option>Automação B2B</option>
                <option>Pacote completo</option>
              </select>
              <button className="btn-primary" type="submit">Solicitar Proposta Agora</button>
            </form>
          )}
          <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </section>

        <section className="ps-block">
          <p>
            <strong>P.S.</strong> O mercado de influência com IA está nos estágios iniciais no Brasil.
            A garantia protege você. O preço cabe no orçamento. O setup é rápido. O único risco real
            é esperar mais seis meses para tomar essa decisão.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/logo.png" alt="M2W AI Solutions" width="130" height="38" />
        <a href={SITE_URL}>m2w-ai.com</a>
        <span>© 2026 M2W AI Solutions · Marketing to Win · LGPD</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </footer>
    </>
  );
}

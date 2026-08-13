"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Spotlight } from "./components/ui/spotlight";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import { Cover } from "./components/ui/cover";
import { PointerHighlight } from "./components/ui/pointer-highlight";
import { Github, ArrowUpRight } from "lucide-react";

export default function Homepage(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log("Autoplay prevented", e);
      });
    }
  }, []);

  return (
    <>
      <div className={homePageStyles.pageWrapper}>
        <div className={homePageStyles.container}>
          <div
            className={cn(
              homePageStyles.backgroundGrid.wrapper,
              homePageStyles.backgroundGrid.pattern,
            )}
          />
          <Spotlight className={spotlightStyles.position} fill="#A16207" />

          <div className={homePageStyles.gradientOverlay} />

          <section className={homePageStyles.heroSection}>
            <div className="relative">
              <h1 className={homePageStyles.h1}>
                Olá, sou{" "}
                <span className={homePageStyles.spanWithMargin}>
                  <Cover>Nicolas Sá</Cover>
                </span>
              </h1>

              <h2 className={homePageStyles.h2}>
                Desenvolvedor{" "}
                <span className={homePageStyles.spanInline}>
                  <PointerHighlight
                    rectangleClassName="border-amber-500/40"
                    pointerClassName="text-amber-400"
                  >
                    Full Stack
                  </PointerHighlight>
                </span>
              </h2>
              <div className="mb-6">
                <div className={homePageStyles.calloutCard.wrapper}>
                  <div className={homePageStyles.calloutCard.innerContainer}>
                    <div className={homePageStyles.calloutCard.textContainer}>
                      <svg
                        className={homePageStyles.calloutCard.icon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
                      </svg>

                      <div className={homePageStyles.calloutCard.text}>
                        Conecte-se comigo no LinkedIn
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/nicolas-s%C3%A1-7871a423a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className={homePageStyles.calloutCard.button}
                    >
                      Conectar
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <p className={homePageStyles.paragraph}>
                Desenvolvedor Full Stack focado em IA, automação e
                desenvolvimento de software. Atualmente curso o 6º semestre de
                Análise e Desenvolvimento de Sistemas (ADS), aprofundando
                conhecimentos em arquitetura de sistemas, desenvolvimento web e
                tecnologias modernas.{" "}
              </p>
              <p className={homePageStyles.paragraph}>
                {" "}
                Desenvolvi projetos envolvendo aplicações Full Stack, APIs REST,
                automações em Python, sistemas de gestão financeira,
                autenticação com JWT, portfólios profissionais, interfaces web e
                ferramentas para análise de segurança de aplicações. Também
                desenvolvo soluções voltadas para automação de processos,
                integração entre serviços e aumento de produtividade utilizando
                Python, React, Node.js, Flask e outras tecnologias modernas.
                </p>
              <p className={homePageStyles.paragraph}>
                {" "}
                Algumas Disponíveis em meu{" "}
                <a
                  href="https://github.com/nsawork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-300 underline decoration-zinc-300 underline-offset-4 transition-all duration-300 hover:text-white hover:decoration-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </p>

              <article className={homePageStyles.article.wrapper}>
                <div className={homePageStyles.article.videoContainer}>
                  <video
                    ref={videoRef}
                    className={homePageStyles.article.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    style={homePageStyles.article.videoStyles}
                  >
                    <source src="/videos/mycash.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>

                <div className={homePageStyles.article.content}>
                  <div className={homePageStyles.article.header}>
                    <svg
                      className={homePageStyles.article.headerIcon}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>

                    <span>Projeto em Destaque</span>
                  </div>
                  <h3 className={homePageStyles.article.title}>2026</h3>

                  <p className={homePageStyles.article.description}>
                    Uma análise sincera de 2026. O vídeo acima mostra alguns dos
                    principais projetos e momentos da minha jornada.
                  </p>
                  <div className={homePageStyles.article.linkContainer}>
                    <Link
                      href="/projects"
                      className={homePageStyles.article.link}
                    >
                      <span>Veja meus Projetos</span>

                      <svg
                        className={homePageStyles.article.linkIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

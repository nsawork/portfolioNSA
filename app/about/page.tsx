import Link from "next/link";
import { aboutPageStyles, commonStyles, styles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { Instagram } from "lucide-react";

export default function AboutPage() {
  const interests = [
    "DESENVOLVEDOR FULL STACK",
    "PYTHON",
    "REACT",
    "AUTOMAÇÃO",
    "NODE.JS",
    "IA",
    "VIAGENS",
    "ATLETA",
    "INGLÊS EM DESENVOLVIMENTO",
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Node.js",
    "Express",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "REST API",
    "OpenAI API",
    "JWT",
    "Git",
  ];

  const email = "niko_asb@hotmail.com";

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>

          <div className={aboutPageStyles.contentWrapper}>
            <span className={commonStyles.headerLabel}>Nicolas Sá</span>
            <div className={aboutPageStyles.interestsContainer}>
              {interests.map((interest, index) => (
                <span key={interest} className={aboutPageStyles.interestItem}>
                  {interest}
                  {index < interests.length - 1 && (
                    <span className={aboutPageStyles.interestSeparator}>•</span>
                  )}
                </span>
              ))}
            </div>

            <div className={aboutPageStyles.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={aboutPageStyles.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Content Section */}
            <div className={aboutPageStyles.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Quem sou eu</h2>
                <p className={aboutPageStyles.paragraph}>
                  Olá! Sou Nicolas, Desenvolvedor Full Stack focado em
                  desenvolvimento web, automação e inteligência artificial.
                  Minha trajetória combina tecnologia, criatividade e
                  empreendedorismo por meio da criação de aplicações completas,
                  APIs, integrações e soluções que transformam problemas reais
                  em produtos digitais. Paralelamente, também atuo na produção
                  audiovisual com drones, unindo tecnologia e conteúdo visual.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>
                  O que eu faço
                </h2>
                <p className={aboutPageStyles.paragraph}>
                  Desenvolvo aplicações Full Stack, APIs REST, automações em
                  Python e sistemas web utilizando React, Next.js, Node.js,
                  Express, Flask e bancos de dados SQL e NoSQL. Também
                  desenvolvo integrações entre serviços, soluções com IA e
                  ferramentas voltadas para produtividade e automação de
                  processos.
                </p>
                <p className={aboutPageStyles.paragraph}>
                  Além da tecnologia, sou fundador da{" "}
                  <a
                    href="https://www.instagram.com/sa.surf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <Instagram className={styles.instagramIcon} />
                    <span className={styles.instagramText}>@sa.surf</span>
                  </a>
                  , marca voltada à produção audiovisual com drones para videos com IA,
                  esportes, arquitetura, turismo e projetos comerciais.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>
                  Minha Jornada
                </h2>
                <p className={aboutPageStyles.paragraph}>
                  Minha trajetória profissional começou na área de controle
                  financeiro, onde desenvolvi habilidades analíticas e visão de
                  processos. Em 2024 iniciei a graduação em Análise e
                  Desenvolvimento de Sistemas, aprofundando meus conhecimentos
                  em desenvolvimento de software, arquitetura de sistemas,
                  bancos de dados e inteligência artificial.
                </p>
                <p className={aboutPageStyles.paragraph}>
                  Desde então, venho desenvolvendo projetos próprios que
                  envolvem aplicações Full Stack, automações, APIs e soluções
                  digitais, sempre buscando unir tecnologia, criatividade e
                  resolução de problemas.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Visão</h2>
                <p className={aboutPageStyles.paragraph}>
                  Acredito que Inteligência Artificial e automação terão um
                  papel cada vez maior no desenvolvimento de software e na
                  otimização de processos. Busco acompanhar essa evolução
                  aplicando essas tecnologias em projetos reais, criando
                  soluções que simplificam tarefas, aumentam a produtividade e
                  resolvem problemas de forma prática.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>
                  Além do Código
                </h2>
                <p className={aboutPageStyles.paragraph}>
                  Além da programação, sou apaixonado por surf, fotografia,
                  drones e novas experiências. Busco sempre conectar tecnologia
                  e criatividade, seja através de projetos digitais ou produção
                  de conteúdos audiovisuais.
                </p>
              </section>
            </div>
            <div className={aboutPageStyles.ctaContainer}>
              <Link
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Entre em contato aqui
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

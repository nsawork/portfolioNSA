"use client";

import {
  Award,
  Briefcase,
  Code2,
  Rocket,
  Github,
  Instagram,
  Users,
  GraduationCap,
  ChevronDown
} from "lucide-react";
import { Timeline } from "../components/ui/timeline";
import { timelineStyles as s, styles } from "@/public/dummyStyles";
import { commonStyles } from "@/public/dummyStyles";

export default function TimelineDemo() {
  const data = [
    {
      title: "2026 - Atual",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Desenvolvedor Full Stack · Criador de Soluções Digitais
              </h3>
              <p className={s.contentSubtitle}>
                Transformando ideias em aplicações e sistemas inteligentes.
              </p>
              <p className={s.contentSubtitle}>
                Projetos Independentes · Remoto ·{" "}
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
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Desenvolvo aplicações web completas, automações e soluções
              digitais utilizando tecnologias modernas.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Criação de soluções envolvendo inteligência artificial, análise de
              dados e integração de sistemas.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Explorando inteligência artificial, automação de processos e novas
              tecnologias para criar produtos digitais.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Deploy, automações e rotinas personalizadas
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Python</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Git/Github</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>SQL</span>
            <span className={s.techBadge}>APIs REST</span>
            <span className={s.techBadge}>AWS</span>
            <span className={s.techBadge}>Autenticação</span>
            <span className={s.techBadge}>JSON</span>
            <span className={s.techBadge}>Deploy</span>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Atual",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerAmber}>
              <Briefcase className={s.iconAmber} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Fundador & Criador · Sá Surf</h3>
              <p className={s.contentSubtitle}> Produção de Vídeos com Drone</p>
              <p className={s.contentSubtitle}>
                Empreendimento Independente · Brasil ·{" "}
                <a
                  href="https://www.instagram.com/sa.surf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramLink}
                >
                  <Instagram className={styles.instagramIcon} />

                  <span className={styles.instagramText}>@sa.surf</span>
                </a>
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Criação e produção de vídeos utilizando drones profissionais.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Produção de conteúdo visual, edição profissional com IA e desenvolvimento
              de soluções criativas.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletAmber}></span>
              Criação de conteúdos para diferentes segmentos, incluindo
              esportes, videoclipes, arquitetura e projetos comerciais.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Drone DJI 4K</span>
            <span className={s.techBadge}>Edição Profissional</span>
            <span className={s.techBadge}>Arquitetura</span>
            <span className={s.techBadge}>Esportes</span>
            <span className={s.techBadge}>Videoclipes</span>
            <span className={s.techBadge}>Seedance 2.5</span>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - 2024",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerRose}>
              <GraduationCap className={s.iconRose} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Início da graduação em Análise e Desenvolvimento de Sistemas
                (UNISINOS)
              </h3>

              <p className={s.contentSubtitle}> 6º Semestre - Atual</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Estudos em Python, Java, React e TypeScript com foco em
              desenvolvimento Full Stack e em finalização do TCC.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Banco de dados SQL e NoSQL e MongoDB.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              APIs REST, Git, automações e IA, e sempre atualizado com novos
              modelos de IA.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>Containers</span>
            <span className={s.techBadge}>Segurança Defensiva</span>
            <span className={s.techBadge}>Python</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>SQL</span>
            <span className={s.techBadge}>APIs REST</span>
            <span className={s.techBadge}>AWS</span>
            <span className={s.techBadge}>Autenticação</span>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - 2022",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerRose}>
              <GraduationCap className={s.iconRose} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Conclusão em Design de Produto (USJT)
              </h3>

              <p className={s.contentSubtitle}> Concluído</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Finalização da formação em Design de Produto, consolidando
              conhecimentos em processos de criação, prototipação, pesquisa e
              resolução de problemas com foco na experiência do usuário.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Explorando criatividade, experiência do usuário (UX/UI), pesquisa
              de usuários e desenvolvimento de soluções centradas nas pessoas.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Design Thinking e processos de ideação, desenvolvimento de
              soluções com foco em usabilidade, organização visual e comunicação
              de produtos digitais.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>UX/UI Design</span>
            <span className={s.techBadge}>Design Thinking</span>
            <span className={s.techBadge}>Wireframes</span>
            <span className={s.techBadge}>Jornada do Usuário</span>
            <span className={s.techBadge}>Testes de Usabilidade</span>
            <span className={s.techBadge}>Sistemas de Design</span>
            <span className={s.techBadge}>Experiência do Usuário</span>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - 2022",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Analista de Controle Financeiro
              </h3>

              <p className={s.contentSubtitle}> CLT </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Atuação com controle operacional, análise de dados, relatórios
              financeiros e acompanhamento de processos internos.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Desenvolvimento de habilidades em organização de informações,
              indicadores, controle de processos e suporte à tomada de decisões
              através de dados.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Excel Avançado</span>
            <span className={s.techBadge}>Análise de Dados</span>
            <span className={s.techBadge}>Controle de Estoque</span>
            <span className={s.techBadge}>Processos Operacionais</span>
            <span className={s.techBadge}>Organização de Dados</span>
            <span className={s.techBadge}>KPI's e ISO</span>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2021",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerRose}>
              <GraduationCap className={s.iconRose} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Intercâmbio Internacional EUA</h3>

              <p className={s.contentSubtitle}>
                {" "}
                Foco em Cultura e fluência em Inglês
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Experiência internacional que proporcionou desenvolvimento pessoal
              e profissional, ampliando visão de mundo, comunicação e capacidade
              de adaptação em novos ambientes.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Explorando criatividade, experiência do usuário (UX/UI), pesquisa
              de usuários e desenvolvimento de soluções centradas nas pessoas.
            </li>
            <li className={s.listItem}>
              <span className={s.bulletRose}></span>
              Design Thinking e processos de ideação, desenvolvimento de
              soluções com foco em usabilidade, organização visual e comunicação
              de produtos digitais.
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>UX/UI Design</span>
            <span className={s.techBadge}>Design Thinking</span>
            <span className={s.techBadge}>Wireframes</span>
            <span className={s.techBadge}>Jornada do Usuário</span>
            <span className={s.techBadge}>Testes de Usabilidade</span>
            <span className={s.techBadge}>Sistemas de Design</span>
            <span className={s.techBadge}>Experiência do Usuário</span>
          </div>
        </div>
      ),
    },
    {
      title: "Conquistas",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerEmerald}>
              <Award className={s.iconEmerald} />
            </div>
            <div>
              <h3 className={s.contentTitle}>Reconhecimentos e Certificados</h3>
              <p className={s.contentSubtitle}>
                Conquistas significativas ao longo da jornada
              </p>
            </div>
          </div>
          <div className={s.achievementGrid}>
            <div className={`${s.achievementCard} col-span-full border-white/20 bg-white/5`}>
              <div className={s.achievementCardTitle}>Formação</div>

              <div className={s.achievementCardSub}>
                Análise e Desenvolvimento de Sistemas - 6º Semestre
              </div>

              <div className={s.achievementCardSub}>
                Design de Produto - Concluído (2022 - 2024)
              </div>
            </div>

            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}>Certificações</div>
              <div className={s.achievementCardValue}>4</div>
              
            </div>
            <div className={s.achievementCard}>
              <div className={s.achievementCardTitle}> Anos de Experiência</div>
              <div className={s.achievementCardValue}> 5+</div>
              
            </div>
          </div>
          <div className={s.specializationContainer}>
            <div className={s.specializationTitle}>
  Certificados
  <ChevronDown size={18} />
</div>
            
            <div className={s.specializationBadgesContainer}>
    <a
      href="/certificates/ataques.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={s.specializationBadge}
    >
      Análise e Anatomia de Ataques Cibernéticos
    </a>

    <a
      href="/certificates/powerBI.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={s.specializationBadge}
    >
      PowerBI
    </a>

    <a
      href="/certificates/inglesReunioes.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={s.specializationBadge}
    >
      Inglês - Reuniões
    </a>

    <a
      href="/certificates/agenteIA.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={s.specializationBadge}
    >
      Agentes de IA
    </a>
  </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-8">
          <span className={commonStyles.headerLabel}>Carreira</span>
          <h1 className={s.mainTitle}>Minha Jornada Profissional</h1>
          <p className={s.mainParagraph}>
            Uma linha do tempo da minha experiência ao longo dos anos.
            <br />
            Conheça as empresas, projetos e experiências que marcaram minha
            trajetória e contribuíram para meu crescimento profissional.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}></div>
              <span className={s.legendText}> Desenvolvedor Full Stack</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-emerald-500`}></div>
              <span className={s.legendText}> Conquistas e Certificados</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-amber-500`}></div>
              <span className={s.legendText}> UI/UX Design</span>
            </div>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-amber-800`}></div>
              <span className={s.legendText}> Laboratório de estudos</span>
            </div>
          </div>
        </div>

        <Timeline data={data} />
        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}> Tecnologias Dominadas</h3>
              <p className={s.techSectionSubtitle}>
                As principais tecnologias que utilizo no desenvolvimento de
                aplicações modernas.
              </p>
            </div>
          </div>
          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>FrontEnd</div>
              <div className={s.techCardContent}>
                React, Next.js, TypeScript, JavaScript, Tailwind CSS
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>BackEnd</div>
              <div className={s.techCardContent}>
                Node.js, Express, Python, Flask, REST APIs, JWT Authentication
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>AI/ML</div>
              <div className={s.techCardContent}>
                OpenAI API, LangChain, n8n, Python Automation, PyAutoGUI
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Databases
              </div>
              <div className={s.techCardContent}>
                MongoDB, PostgreSQL, SQLite
              </div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>Deploy</div>
              <div className={s.techCardContent}>Render, GitHub Pages, Netlify</div>
            </div>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Ferramentas
              </div>
              <div className={s.techCardContent}>Git, GitHub, VS Code, Cursor, Postman</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

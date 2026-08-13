export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  video?: string;
  tags: string[];
  status: "online" | "local";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Painel Controle Financeiro",
    video: "/videos/mycash.mp4",
    slug: "painel-controle-financeiro",
    description: "Sistema Full Stack para gerenciamento de despesas pessoais.",
    detailedDescription:
      "Aplicação Full Stack desenvolvida para controlar despesas e receitas de forma simples e intuitiva. O sistema permite fazer o cadastro e ter seu perfil para cadastrar transações, visualizar o histórico financeiro, organizar gastos por categoria e acompanhar o saldo em tempo real. O projeto foi desenvolvido com React no frontend, Node.js e Express no backend, utilizando MongoDB como banco de dados e autenticação JWT para proteger as informações dos usuários.",
    image: "/mycashimage.png",
    tags: ["FullStack", "SaaS", "MongoDB", "React", "Node.js"],
    status: "online",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT Authentication",
      "CSS",
    ],
    features: [
      "Cadastro de receitas e despesas",
      "Autenticação segura com JWT",
      "Dashboard financeiro",
      "Categorias personalizadas",
      "Histórico de transações",
      "Saldo atualizado em tempo real",
    ],
    learningOutcomes: [
      "Arquitetura Full Stack",
      "Autenticação JWT",
      "Criação de APIs REST",
      "Integração entre Frontend e Backend",
      "Modelagem de banco de dados MongoDB",
      "Deploy de aplicações web",
    ],
    links: {
      
    },
    author: "App Controle Financeiro",
    authorAvatar: "/Hexagonal.png",
  },
  {
    id: "2",
    title: "Portfólio Profissional",
    video: "/videos/byliliv.mp4",
    slug: "portfolio-byliliv",
    description:
      "Página profissional desenvolvida para apresentação de trabalhos, informações e projetos de uma especialista em marketing.",
    detailedDescription:
      "Um portfólio profissional desenvolvido com HTML, CSS e JavaScript e banco de dados Supabase para apresentar a trajetória, trabalhos e projetos de uma especialista em marketing. O projeto foi criado com foco em uma interface leve, responsiva e objetiva, proporcionando uma experiência simples e profissional para apresentação de informações.",
    image: "/curatebylili.png",
    tags: ["Freelancer", "HTML", "CSS", "JavaScript", "Frontend", "Supabase", "Dados"],
    status: "online",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub Pages",
      "Supabase",
      "Design Responsivo",
    ],
    features: [
      "Página profissional personalizada",
      "Apresentação de informações e projetos",
      "Layout responsivo para diferentes dispositivos",
      "Estrutura leve sem dependência de frameworks",
      "Hospedagem utilizando GitHub Pages",
      "Interface focada em experiência do usuário",
    ],
    learningOutcomes: [
      "Desenvolvimento de interfaces com HTML, CSS e JavaScript",
      "Criação de páginas responsivas",
      "Banco de dados Supabase para adicionar experiências",
      "Publicação e hospedagem utilizando GitHub Pages",
      "Aplicação de conceitos de UI e apresentação visual",
      "Desenvolvimento de projetos para clientes reais",
    ],
    links: {
      visit: "https://nsawork.github.io/lumecreativ/",
      github: "https://github.com/nsawork/lumecreativ",
    },
    author: "Portifólio Profissional",
    authorAvatar: "/Hexagonal.png",
  },
  {
    id: "3",
    title: "Bot de Previsão de Ondas WhatsApp",
    video: "/videos/whatsvideo.mp4",
    slug: "bot-previsao-onda",
    description:
      "Bot de automação em Python que envia previsões de ondas para surfistas personalizadas para múltiplos contatos via WhatsApp.",
    detailedDescription:
      "Um sistema de automação desenvolvido em Python que integra WhatsApp Web e planilhas Excel para enviar mensagens personalizadas de previsão de surf para diversos contatos. Criado para facilitar a comunicação de previsões de ondas para surfistas, comunidades e negócios que precisam enviar atualizações recorrentes.",
    image: "/whatsImage.jpeg",
    tags: ["Python", "Automação", "WhatsApp", "Produtividade"],
    status: "local",
    techStack: [
      "Python",
      "OpenPyXL",
      "PyAutoGUI",
      "WhatsApp Web",
      "Excel",
      "Agendador de Tarefas Windows",
    ],
    features: [
      "Envio automático de mensagens pelo WhatsApp Web",
      "Leitura de contatos através de planilhas Excel",
      "Mensagens personalizadas através de arquivo de texto",
      "Execução automática utilizando o Agendador de Tarefas do Windows",
      "Comunicação personalizada com múltiplos contatos",
      "Configuração simples e fácil utilização",
    ],
    learningOutcomes: [
      "Desenvolvimento de automações com Python",
      "Automação de navegador utilizando PyAutoGUI",
      "Manipulação de arquivos Excel com OpenPyXL",
      "Criação de ferramentas para otimização de processos",
      "Agendamento e execução automática de scripts",
      "Resolução de problemas reais através de tecnologia",
    ],
    links: {
      github: "https://github.com/nsawork/BotPrevisaoDeSurfPython",
    },
    author: "Automação WhatsApp Web",
    authorAvatar: "/Hexagonal.png",
  },
  {
    id: "4",
    title: "Scanner de Segurança Web",
    video: "/videos/scannervideo.mp4",
    slug: "web-security-scanner",
    description:
      "Aplicação web em Python para análise básica de segurança em aplicações web, identificando configurações e possíveis vulnerabilidades.",
    detailedDescription:
      "Uma ferramenta de análise de segurança desenvolvida com Python e Flask que realiza verificações em aplicações web. O sistema analisa headers de segurança, utilização de HTTPS, cookies e gera relatórios com informações sobre possíveis falhas de configuração.",
    image: "/scannerimage.png",
    tags: ["Python", "Flask", "Cibersegurança", "AppSec"],
    status: "local",
    techStack: ["Python", "Flask", "Requests", "HTML", "CSS", "Análise HTTP"],
    features: [
      "Análise de headers de segurança HTTP",
      "Verificação de utilização de HTTPS",
      "Identificação de cookies da aplicação",
      "Geração automática de relatórios",
      "Histórico de análises realizadas",
      "Interface web interativa",
    ],
    learningOutcomes: [
      "Fundamentos de segurança em aplicações web (AppSec)",
      "Desenvolvimento backend utilizando Flask",
      "Manipulação de requisições HTTP",
      "Análise de configurações de segurança",
      "Integração entre backend e frontend",
      "Organização e estruturação de aplicações web",
    ],
    links: {
      
      github: "https://github.com/nsawork/web-security-scanner",
      
    },
    author: "Scanner de Segurança Web",
    authorAvatar: "/Hexagonal.png",
  },
  {
    id: "5",
    title: "Controle de Estoque",
    video: "/videos/controleEstoque.mp4",
    slug: "controle-de-estoque",
    description:
      "Aplicação web para gerenciamento de estoque desenvolvida com Flask e SQLite, permitindo cadastro e controle de produtos.",
    detailedDescription:
      "Uma aplicação Full Stack desenvolvida com Python e Flask para gerenciamento de estoque. O sistema possui uma API REST com endpoints CRUD (GET, POST, PUT e DELETE), responsável pela criação, consulta, atualização e remoção de produtos. Os dados são armazenados utilizando SQLite e a aplicação conta com uma interface web simples para interação do usuário.",
    image: "/controleEstoque.png",
    tags: ["Python", "Flask", "SQLite", "API REST"],
    status: "local",
    techStack: ["Python", "Flask", "SQLite", "HTML", "CSS", "JSON", "API REST"],
    features: [
      "Cadastro de novos produtos",
      "Listagem de produtos cadastrados",
      "Atualização de informações do estoque",
      "Remoção de produtos",
      "API REST com endpoints CRUD",
      "Armazenamento local utilizando SQLite",
    ],
    learningOutcomes: [
      "Desenvolvimento de APIs utilizando Flask",
      "Implementação de operações CRUD",
      "Integração entre aplicação e banco de dados SQLite",
      "Manipulação de dados em formato JSON",
      "Estruturação de aplicações backend",
      "Conceitos fundamentais de desenvolvimento Full Stack",
    ],
    links: {
     
      github: "https://github.com/nsawork/controleEstoque",
      
    },
    author: "Automação de Cadastrar Produtos",
    authorAvatar: "/Hexagonal.png",
  },
  {
    id: "6",
    title: "Automação de Cadastro de Produtos",
    video: "/videos/cadastro.mp4",
    slug: "automacao-cadastro-produtos",
    description:
      "Automação em Python para cadastro em massa de produtos em sistemas web.",
    detailedDescription:
      "Projeto desenvolvido em Python para automatizar tarefas repetitivas de cadastro de produtos em sistemas web. A aplicação utiliza PyAutoGUI para controlar mouse e teclado, captura de posições na tela e leitura de dados estruturados em arquivos CSV. O objetivo é reduzir o trabalho manual, aumentar a produtividade e permitir o cadastro de múltiplos produtos de forma rápida e eficiente.",
    image: "/cadastropy.jpeg",
    tags: ["Python", "Automação", "PyAutoGUI", "CSV", "RPA"],
    status: "local",
    techStack: ["Python", "PyAutoGUI", "Pandas", "CSV", "Automação Desktop"],
    features: [
      "Cadastro automático de múltiplos produtos",
      "Leitura de dados através de arquivo CSV",
      "Automação de mouse e teclado",
      "Preenchimento automático de formulários",
      "Login automático no sistema",
      "Redução de tarefas manuais repetitivas",
    ],
    learningOutcomes: [
      "Automação de processos utilizando Python",
      "Manipulação e leitura de arquivos CSV",
      "Controle de interface gráfica com PyAutoGUI",
      "Criação de scripts para produtividade",
      "Estruturação de dados para automações",
      "Aplicação prática de RPA (Robotic Process Automation)",
    ],
    links: {
      github: "https://github.com/nsawork/AutomacoesDeTarefasBOT",
    },
    author: "Automações de Tarefas",
    authorAvatar: "/Hexagonal.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(
  slug: string | undefined | null,
): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}

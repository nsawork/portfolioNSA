"use client";

import Link from "next/link";
import Image from "next/image";
import { CometCard } from "../components/ui/comet-card";
// Adjust import path based on where you placed dummyStyles.js
import { commonStyles, toolsPageStyles } from "@/public/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const tools: Tool[] = [
  //  Inteligência Artificial
{
  name: "ChatGPT",
  category: "Inteligência Artificial",
  icon: "/chatgpt.webp",
  href: "https://chat.openai.com",
},
{
  name: "Claude Code",
  category: "Inteligência Artificial",
  icon: "/claude.webp",
  href: "https://claude.ai",
},
{
  name: "GitHub Copilot",
  category: "Inteligência Artificial",
  icon: "/copilot.webp.png",
  href: "https://github.com/features/copilot",
},
{
  name: "Google AI Studio",
  category: "Inteligência Artificial",
  icon: "/googlestudio.png",
  href: "https://aistudio.google.com/apps",
},

//  Desenvolvimento
{
  name: "VS Code",
  category: "Desenvolvimento",
  icon: "/vscode.webp",
  href: "https://code.visualstudio.com",
},
{
  name: "PyCharm",
  category: "Desenvolvimento",
  icon: "/pycharm.webp",
  href: "https://jetbrains.com/pycharm",
},
{
  name: "Anti Gravity",
  category: "Desenvolvimento",
  icon: "/antigravitys.jpg",
  href: "https://antigravity.google/",
},

//  Automação
{
  name: "N8N",
  category: "Automação",
  icon: "/n8n.webp.png",
  href: "https://n8n.io",
},
{
  name: "PyAutoGUI",
  category: "Automação",
  icon: "/pyautogui.jpg",
  href: "https://pyautogui.readthedocs.io",
},
{
  name: "Selenium",
  category: "Automação",
  icon: "/selenium.png",
  href: "https://selenium.dev",
},
{
  name: "Python",
  category: "Automação",
  icon: "/pythonlogo.png",
  href: "https://python.org",
},

//  Controle de Versão
{
  name: "Git",
  category: "Controle de Versão",
  icon: "/gitlogo.png",
  href: "https://git-scm.com",
},
{
  name: "GitHub",
  category: "Controle de Versão",
  icon: "/github.webp.png",
  href: "https://github.com",
},

//  APIs
{
  name: "Postman",
  category: "APIs",
  icon: "/postmanpeg.jfif",
  href: "https://postman.com",
},

//  Banco de Dados
{
  name: "PostgreSQL",
  category: "Banco de Dados",
  icon: "/postgresql.webp.png",
  href: "https://postgresql.org",
},
{
  name: "MongoDB Atlas",
  category: "Banco de Dados",
  icon: "/mongodb.webp.png",
  href: "https://mongodb.com/atlas",
},
{
  name: "Supabase",
  category: "Banco de Dados",
  icon: "/supabase.jpeg",
  href: "https://supabase.com/",
},

//  Deploy
{
  name: "Render",
  category: "Deploy",
  icon: "/renderpeg.png",
  href: "https://render.com",
},
{
  name: "GitHub Pages",
  category: "Deploy",
  icon: "/github.webp.png",
  href: "https://pages.github.com",
},
{
  name: "Vercel",
  category: "Deploy",
  icon: "/vercel.png",
  href: "https://vercel.com/",
},
];

export default function ToolsPage() {
 return (
  <div className={toolsPageStyles.pageContainer}>
    <div className={toolsPageStyles.contentContainer}>
      <div className={toolsPageStyles.headerContainer}>
        <span className={commonStyles.headerLabel}>Desenvolvimento</span>

        <p className={toolsPageStyles.headerSubtitle}>
          Ferramentas e plataformas que fazem parte do meu fluxo de
          desenvolvimento, automação e criação de aplicações.
        </p>
      </div>

      {Array.from(new Set(tools.map((tool) => tool.category))).map(
        (category) => {
          const categoryTools = tools.filter(
            (tool) => tool.category === category
          );

          return (
            <section key={category} className="mb-14">
              <h2 className="mb-6 text-xl font-semibold text-white">
                {category}
              </h2>

              <div className={toolsPageStyles.toolsGrid}>
                {categoryTools.map((tool) => (
                  <CometCard key={tool.name}>
                    <Link
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={toolsPageStyles.toolCardLink}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div className={toolsPageStyles.toolIconContainer}>
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} logo`}
                          width={56}
                          height={56}
                          className={toolsPageStyles.toolIcon}
                        />
                      </div>

                      <div className={toolsPageStyles.toolTextContainer}>
                        <h3 className={toolsPageStyles.toolName}>
                          {tool.name}
                        </h3>

                        <p className={toolsPageStyles.toolCategory}>
                          {tool.category}
                        </p>
                      </div>
                    </Link>
                  </CometCard>
                ))}
              </div>
            </section>
          );
        }
      )}
    </div>
  </div>
);
}
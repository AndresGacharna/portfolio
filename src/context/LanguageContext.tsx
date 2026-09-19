"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

export type Language = "es" | "en" | "pt";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "nav.language": "Language",

    // Hero
    "hero.role": "Software Engineer",
    "hero.focus": "From solution to production",
    "hero.lede":
      "I start from the business problem, then design and ship to production the solution that solves it: NestJS, .NET, microservices, Clean Architecture. I also run my own infrastructure: this site is served from my Proxmox homelab.",
    "hero.proof0": "Monolith → microservices, live in 3 international markets",
    "hero.proof1": "~70% faster reporting for enterprise retail operations",
    "hero.proof2": "1st place, RISKTECH corporate hackathon 2025",
    "hero.email": "Email me",
    "hero.cv": "Download CV",
    "hero.location": "Bogotá, Colombia",
    "hero.plateTitle": "Consignee",
    "hero.plateName": "Name",
    "hero.platePort": "Port",
    "hero.next": "See the work",

    // Projects
    "projects.title": "Projects",
    "projects.intro":
      "Systems I have designed and shipped, with the code wherever I can share it.",
    "projects.contents": "Contents",
    "projects.repo": "Repository",
    "projects.repos": "Repositories",
    "projects.post": "LinkedIn post",
    "projects.video": "Video demo",
    "projects.figmaClient": "Figma · client app",
    "projects.figmaOwner": "Figma · store owners",
    "projects.private": "Private infrastructure. Walkthrough on request.",
    "projects.noLinks": "Hackathon code under the organizer's terms.",
    "projects.badgeUtadeo": "University project · Utadeo",
    "projects.badgeWinner": "1st place · RISKTECH hackathon",
    "projects.badgeLive": "Serving this site",

    "projects.store.name": "Store: NestJS microservices",
    "projects.store.desc":
      "Distributed e-commerce with five NestJS microservices talking asynchronously over NATS, each with its own database. Stripe payments via webhook, Docker images and Kubernetes manifests.",
    "projects.fraud.name": "Real-time fraud detection engine",
    "projects.fraud.desc":
      "Built in 48 hours for banking POS transactions: a NestJS + Python + PostgreSQL ingestion API, CatBoost for sub-second scoring with fallback to a BERT encoder on borderline cases, and LLM-driven feature enrichment into structured JSON.",
    "projects.homelab.name": "Self-hosted cloud (Proxmox VE)",
    "projects.homelab.desc":
      "Virtualization on Proxmox VE with Debian LXC containers and Docker to host and test microservices. Zero-trust networking with Cloudflare Tunnels, custom DNS, automatic TLS through Nginx Proxy Manager and isolated subnets. This portfolio deploys here from GitHub Actions.",
    "projects.anylist.name": "AnyList: GraphQL API with NestJS",
    "projects.anylist.desc":
      "Shopping-list API on NestJS and Apollo GraphQL, persisted in PostgreSQL through TypeORM. JWT authentication with roles, reusable pagination and search arguments, and a seed for test data.",
    "projects.utadelicias.name": "Utadelicias",
    "projects.utadelicias.desc":
      "Coupons and delivery Android app for the Universidad Jorge Tadeo Lozano community, featured at the Feria Tadeísta.",
    "projects.resnet.name": "ResNet fine-tuning",
    "projects.resnet.desc":
      "Fine-tuning of a ResNet neural network for image classification. The project appears on page 3 of the course publication linked below.",

    // Experience
    "exp.title": "Experience",
    "exp.intro": "Where the work above comes from.",
    "exp.present": "Present",
    "exp.colPeriod": "Period",
    "exp.colCompany": "Company",
    "exp.colWork": "Work carried",
    "exp.geekcore.role": "Software Engineer",
    "exp.geekcore.period": "Dec 2024 – Present",
    "exp.geekcore.b0":
      "Architected and shipped GraphQL and REST APIs with NestJS and ASP.NET Core for a multinational retail operation, automating personnel workflows and centralizing supplier and store data. Reporting turnaround dropped by ~70%.",
    "exp.geekcore.b1":
      "Decomposed a legacy enterprise monolith into modular microservices, enabling horizontal scaling and a rollout across 3 international markets.",
    "exp.geekcore.b2":
      "Built tracking services for healthcare logistics: PostgreSQL schemas designed for the workload and automated CI/CD pipelines for continuous availability.",
    "exp.geekcore.b3":
      "Unit and integration test suites under Clean Architecture and SOLID across multi-tenant production systems; sprint planning, architecture reviews and backlog refinement in Agile teams.",
    "exp.utadeo.role": "B.Sc. Systems Engineering",
    "exp.utadeo.period": "2022 – Mar 2026",
    "exp.utadeo.b0":
      "Graduated March 2026. Software architecture, algorithms and formal methods; university projects shipped to real users (Utadelicias) and ML research (ResNet).",

    // Stack
    "stack.title": "Stack",
    "stack.intro":
      "Stowed by category. Solid blocks are my daily work; outlined ones I have used in real projects.",
    "stack.cat.core": "Languages & frameworks",
    "stack.cat.arch": "Architecture",
    "stack.cat.data": "Data",
    "stack.cat.infra": "Infrastructure & DevOps",
    "stack.cat.ai": "AI-assisted engineering",
    "stack.primary": "Daily work",
    "stack.secondary": "Used in projects",

    // About
    "about.title": "About",
    "about.p0":
      "I'm a Systems Engineer who specializes in backend: .NET, Node.js and NestJS. I care about architectures that stay clean when the business changes, and about understanding what the client actually needs before writing the first endpoint.",
    "about.p1":
      "Outside work I run a small data center at home. Proxmox, Docker and Linux are how I take code from idea to production without asking anyone for a server.",
    "about.p2":
      "AI is part of my toolchain, not a buzzword: I orchestrate coding agents with herdr and work daily with Claude Code, Codex, Gemini in Antigravity and OpenCode.",
    "about.languages": "Languages",
    "about.spanish": "Spanish, native",
    "about.english": "English, professional working proficiency (B2)",
    "about.certs": "Certifications",
    "about.courses": "Courses",
    "about.expires": "valid to Nov 2027",
    "about.coursesList":
      "Udemy, 2025: NestJS scalable backend · NestJS + microservices · Nest + GraphQL · OpenAI assistants with React + NestJS",

    // Contact
    "contact.title": "Let's build something",
    "contact.text":
      "Open to backend roles and freelance projects. Tell me what the system has to do and I'll tell you how I'd build it.",
    "contact.copy": "Copy email",
    "contact.copied": "Copied",

    // Footer
    "footer.copyright": "© {year} Andrés Gacharná",
    "footer.hosting":
      "Served from my own Proxmox homelab · deployed with GitHub Actions",
    "footer.top": "Back to top",
  },
  es: {
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.stack": "Stack",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.menu": "Menú",
    "nav.close": "Cerrar",
    "nav.language": "Idioma",

    "hero.role": "Ingeniero de Software",
    "hero.focus": "De solución a producción",
    "hero.lede":
      "Parto del problema de negocio y luego diseño y pongo en producción la solución que lo resuelve: NestJS, .NET, microservicios, Clean Architecture. También administro mi propia infraestructura: este sitio se sirve desde mi homelab con Proxmox.",
    "hero.proof0": "Monolito → microservicios, en producción en 3 mercados internacionales",
    "hero.proof1": "~70% menos tiempo de reportes en retail empresarial",
    "hero.proof2": "1.er lugar, hackathon corporativo RISKTECH 2025",
    "hero.email": "Escríbeme",
    "hero.cv": "Descargar CV",
    "hero.location": "Bogotá, Colombia",
    "hero.plateTitle": "Consignatario",
    "hero.plateName": "Nombre",
    "hero.platePort": "Puerto",
    "hero.next": "Ver el trabajo",

    "projects.title": "Proyectos",
    "projects.intro":
      "Sistemas que he diseñado y puesto en marcha, con el código siempre que puedo compartirlo.",
    "projects.contents": "Contenido",
    "projects.repo": "Repositorio",
    "projects.repos": "Repositorios",
    "projects.post": "Post en LinkedIn",
    "projects.video": "Video demo",
    "projects.figmaClient": "Figma · app clientes",
    "projects.figmaOwner": "Figma · dueños de local",
    "projects.private": "Infraestructura privada. Te la muestro si me escribes.",
    "projects.noLinks": "Código del hackathon bajo los términos del organizador.",
    "projects.badgeUtadeo": "Proyecto universitario · Utadeo",
    "projects.badgeWinner": "1.er lugar · hackathon RISKTECH",
    "projects.badgeLive": "Sirviendo este sitio",

    "projects.store.name": "Tienda: microservicios con NestJS",
    "projects.store.desc":
      "E-commerce distribuido con cinco microservicios NestJS comunicados de forma asíncrona por NATS, cada uno con su propia base de datos. Pagos con Stripe vía webhook, imágenes Docker y manifiestos de Kubernetes.",
    "projects.fraud.name": "Motor de detección de fraude en tiempo real",
    "projects.fraud.desc":
      "Construido en 48 horas para transacciones POS bancarias: API de ingesta con NestJS + Python + PostgreSQL, CatBoost para scoring en menos de un segundo con fallback a un encoder BERT en casos dudosos, y enriquecimiento de features con LLMs a JSON estructurado.",
    "projects.homelab.name": "Nube propia (Proxmox VE)",
    "projects.homelab.desc":
      "Virtualización en Proxmox VE con contenedores LXC de Debian y Docker para alojar y probar microservicios. Red zero-trust con Cloudflare Tunnels, DNS propio, TLS automático con Nginx Proxy Manager y subredes aisladas. Este portfolio se despliega aquí desde GitHub Actions.",
    "projects.anylist.name": "AnyList: API GraphQL con NestJS",
    "projects.anylist.desc":
      "API de listas de compra con NestJS y Apollo GraphQL, persistida en PostgreSQL mediante TypeORM. Autenticación JWT con roles, argumentos reutilizables de paginación y búsqueda, y seed de datos de prueba.",
    "projects.utadelicias.name": "Utadelicias",
    "projects.utadelicias.desc":
      "App Android de cupones y domicilios para la comunidad de la Universidad Jorge Tadeo Lozano, destacada en la Feria Tadeísta.",
    "projects.resnet.name": "Fine-tuning de ResNet",
    "projects.resnet.desc":
      "Fine-tuning de una red neuronal ResNet para clasificación de imágenes. El proyecto aparece en la página 3 de la publicación del curso enlazada abajo.",

    "exp.title": "Experiencia",
    "exp.intro": "De dónde sale el trabajo de arriba.",
    "exp.present": "Presente",
    "exp.colPeriod": "Periodo",
    "exp.colCompany": "Empresa",
    "exp.colWork": "Trabajo realizado",
    "exp.geekcore.role": "Ingeniero de Software",
    "exp.geekcore.period": "Dic. 2024 – Presente",
    "exp.geekcore.b0":
      "Diseñé y puse en producción APIs GraphQL y REST con NestJS y ASP.NET Core para una operación de retail multinacional, automatizando flujos de personal y centralizando datos de proveedores y tiendas. El tiempo de reportes bajó ~70%.",
    "exp.geekcore.b1":
      "Descompuse un monolito empresarial legado en microservicios modulares, habilitando escalado horizontal y el despliegue en 3 mercados internacionales.",
    "exp.geekcore.b2":
      "Construí servicios de trazabilidad para logística de salud: esquemas PostgreSQL diseñados para la carga real y pipelines CI/CD automatizados para disponibilidad continua.",
    "exp.geekcore.b3":
      "Suites de pruebas unitarias y de integración bajo Clean Architecture y SOLID en sistemas multi-tenant en producción; sprint planning, revisiones de arquitectura y refinamiento de backlog en equipos ágiles.",
    "exp.utadeo.role": "Ingeniería de Sistemas",
    "exp.utadeo.period": "2022 – Mar. 2026",
    "exp.utadeo.b0":
      "Graduado en marzo de 2026. Arquitectura de software, algoritmos y métodos formales; proyectos universitarios con usuarios reales (Utadelicias) e investigación en ML (ResNet).",

    "stack.title": "Stack",
    "stack.intro":
      "Estibado por categoría. Los bloques sólidos son mi trabajo diario; los de contorno los he usado en proyectos reales.",
    "stack.cat.core": "Lenguajes y frameworks",
    "stack.cat.arch": "Arquitectura",
    "stack.cat.data": "Datos",
    "stack.cat.infra": "Infraestructura y DevOps",
    "stack.cat.ai": "Ingeniería asistida por IA",
    "stack.primary": "Trabajo diario",
    "stack.secondary": "Usado en proyectos",

    "about.title": "Sobre mí",
    "about.p0":
      "Soy Ingeniero de Sistemas especializado en backend: .NET, Node.js y NestJS. Me importan las arquitecturas que siguen limpias cuando el negocio cambia, y entender qué necesita de verdad el cliente antes de escribir el primer endpoint.",
    "about.p1":
      "Fuera del trabajo administro un pequeño centro de datos en casa. Proxmox, Docker y Linux son mi forma de llevar el código de la idea a producción sin pedirle un servidor a nadie.",
    "about.p2":
      "La IA es parte de mis herramientas, no una palabra de moda: orquesto agentes de código con herdr y trabajo a diario con Claude Code, Codex, Gemini en Antigravity y OpenCode.",
    "about.languages": "Idiomas",
    "about.spanish": "Español, nativo",
    "about.english": "Inglés, nivel profesional (B2)",
    "about.certs": "Certificaciones",
    "about.courses": "Cursos",
    "about.expires": "vigente hasta nov. 2027",
    "about.coursesList":
      "Udemy, 2025: NestJS backend escalable · NestJS + microservicios · Nest + GraphQL · Asistentes OpenAI con React + NestJS",

    "contact.title": "Construyamos algo",
    "contact.text":
      "Abierto a roles backend y proyectos freelance. Cuéntame qué tiene que hacer el sistema y te digo cómo lo construiría.",
    "contact.copy": "Copiar correo",
    "contact.copied": "Copiado",

    "footer.copyright": "© {year} Andrés Gacharná",
    "footer.hosting":
      "Servido desde mi propio homelab con Proxmox · desplegado con GitHub Actions",
    "footer.top": "Volver arriba",
  },
  pt: {
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.stack": "Stack",
    "nav.about": "Sobre mim",
    "nav.contact": "Contato",
    "nav.menu": "Menu",
    "nav.close": "Fechar",
    "nav.language": "Idioma",

    "hero.role": "Engenheiro de Software",
    "hero.focus": "Da solução à produção",
    "hero.lede":
      "Começo pelo problema de negócio e depois projeto e coloco em produção a solução que o resolve: NestJS, .NET, microsserviços, Clean Architecture. Também administro minha própria infraestrutura: este site é servido do meu homelab com Proxmox.",
    "hero.proof0": "Monólito → microsserviços, em produção em 3 mercados internacionais",
    "hero.proof1": "~70% menos tempo de relatórios no varejo corporativo",
    "hero.proof2": "1º lugar, hackathon corporativo RISKTECH 2025",
    "hero.email": "Me escreva",
    "hero.cv": "Baixar CV",
    "hero.location": "Bogotá, Colômbia",
    "hero.plateTitle": "Consignatário",
    "hero.plateName": "Nome",
    "hero.platePort": "Porto",
    "hero.next": "Ver o trabalho",

    "projects.title": "Projetos",
    "projects.intro":
      "Sistemas que projetei e coloquei em produção, com o código sempre que posso compartilhá-lo.",
    "projects.contents": "Conteúdo",
    "projects.repo": "Repositório",
    "projects.repos": "Repositórios",
    "projects.post": "Post no LinkedIn",
    "projects.video": "Vídeo demo",
    "projects.figmaClient": "Figma · app clientes",
    "projects.figmaOwner": "Figma · donos de loja",
    "projects.private": "Infraestrutura privada. Mostro se você me escrever.",
    "projects.noLinks": "Código do hackathon sob os termos do organizador.",
    "projects.badgeUtadeo": "Projeto universitário · Utadeo",
    "projects.badgeWinner": "1º lugar · hackathon RISKTECH",
    "projects.badgeLive": "Servindo este site",

    "projects.store.name": "Loja: microsserviços com NestJS",
    "projects.store.desc":
      "E-commerce distribuído com cinco microsserviços NestJS comunicando-se de forma assíncrona via NATS, cada um com seu próprio banco de dados. Pagamentos com Stripe via webhook, imagens Docker e manifestos de Kubernetes.",
    "projects.fraud.name": "Motor de detecção de fraude em tempo real",
    "projects.fraud.desc":
      "Construído em 48 horas para transações POS bancárias: API de ingestão com NestJS + Python + PostgreSQL, CatBoost para scoring em menos de um segundo com fallback para um encoder BERT nos casos duvidosos, e enriquecimento de features com LLMs em JSON estruturado.",
    "projects.homelab.name": "Nuvem própria (Proxmox VE)",
    "projects.homelab.desc":
      "Virtualização no Proxmox VE com contêineres LXC Debian e Docker para hospedar e testar microsserviços. Rede zero-trust com Cloudflare Tunnels, DNS próprio, TLS automático via Nginx Proxy Manager e sub-redes isoladas. Este portfólio é implantado aqui pelo GitHub Actions.",
    "projects.anylist.name": "AnyList: API GraphQL com NestJS",
    "projects.anylist.desc":
      "API de listas de compras com NestJS e Apollo GraphQL, persistida em PostgreSQL via TypeORM. Autenticação JWT com papéis, argumentos reutilizáveis de paginação e busca, e seed de dados de teste.",
    "projects.utadelicias.name": "Utadelicias",
    "projects.utadelicias.desc":
      "App Android de cupons e entregas para a comunidade da Universidad Jorge Tadeo Lozano, destaque na Feria Tadeísta.",
    "projects.resnet.name": "Fine-tuning de ResNet",
    "projects.resnet.desc":
      "Fine-tuning de uma rede neural ResNet para classificação de imagens. O projeto aparece na página 3 da publicação do curso no link abaixo.",

    "exp.title": "Experiência",
    "exp.intro": "De onde vem o trabalho acima.",
    "exp.present": "Presente",
    "exp.colPeriod": "Período",
    "exp.colCompany": "Empresa",
    "exp.colWork": "Trabalho realizado",
    "exp.geekcore.role": "Engenheiro de Software",
    "exp.geekcore.period": "Dez. 2024 – Presente",
    "exp.geekcore.b0":
      "Projetei e coloquei em produção APIs GraphQL e REST com NestJS e ASP.NET Core para uma operação de varejo multinacional, automatizando fluxos de pessoal e centralizando dados de fornecedores e lojas. O tempo de relatórios caiu ~70%.",
    "exp.geekcore.b1":
      "Decompus um monólito corporativo legado em microsserviços modulares, permitindo escala horizontal e a expansão para 3 mercados internacionais.",
    "exp.geekcore.b2":
      "Construí serviços de rastreamento para logística de saúde: esquemas PostgreSQL desenhados para a carga real e pipelines CI/CD automatizados para disponibilidade contínua.",
    "exp.geekcore.b3":
      "Suítes de testes unitários e de integração sob Clean Architecture e SOLID em sistemas multi-tenant em produção; sprint planning, revisões de arquitetura e refinamento de backlog em times ágeis.",
    "exp.utadeo.role": "Engenharia de Sistemas",
    "exp.utadeo.period": "2022 – Mar. 2026",
    "exp.utadeo.b0":
      "Formado em março de 2026. Arquitetura de software, algoritmos e métodos formais; projetos universitários com usuários reais (Utadelicias) e pesquisa em ML (ResNet).",

    "stack.title": "Stack",
    "stack.intro":
      "Estivado por categoria. Blocos sólidos são meu trabalho diário; os contornados já usei em projetos reais.",
    "stack.cat.core": "Linguagens e frameworks",
    "stack.cat.arch": "Arquitetura",
    "stack.cat.data": "Dados",
    "stack.cat.infra": "Infraestrutura e DevOps",
    "stack.cat.ai": "Engenharia assistida por IA",
    "stack.primary": "Trabalho diário",
    "stack.secondary": "Usado em projetos",

    "about.title": "Sobre mim",
    "about.p0":
      "Sou Engenheiro de Sistemas especializado em backend: .NET, Node.js e NestJS. Me importo com arquiteturas que continuam limpas quando o negócio muda, e com entender o que o cliente realmente precisa antes de escrever o primeiro endpoint.",
    "about.p1":
      "Fora do trabalho administro um pequeno data center em casa. Proxmox, Docker e Linux são como levo o código da ideia à produção sem pedir um servidor a ninguém.",
    "about.p2":
      "IA faz parte das minhas ferramentas, não é palavra da moda: orquestro agentes de código com herdr e trabalho diariamente com Claude Code, Codex, Gemini no Antigravity e OpenCode.",
    "about.languages": "Idiomas",
    "about.spanish": "Espanhol, nativo",
    "about.english": "Inglês, nível profissional (B2)",
    "about.certs": "Certificações",
    "about.courses": "Cursos",
    "about.expires": "válida até nov. 2027",
    "about.coursesList":
      "Udemy, 2025: NestJS backend escalável · NestJS + microsserviços · Nest + GraphQL · Assistentes OpenAI com React + NestJS",

    "contact.title": "Vamos construir algo",
    "contact.text":
      "Aberto a vagas de backend e projetos freelance. Me conte o que o sistema precisa fazer e eu digo como o construiria.",
    "contact.copy": "Copiar e-mail",
    "contact.copied": "Copiado",

    "footer.copyright": "© {year} Andrés Gacharná",
    "footer.hosting":
      "Servido do meu próprio homelab com Proxmox · implantado com GitHub Actions",
    "footer.top": "Voltar ao topo",
  },
};

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en" || saved === "pt") {
        // Read after hydration so server and client render the same first frame.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguage(saved);
      }
    } catch {
      // Storage blocked: stay on the default language.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage blocked: the choice lasts for this visit only.
    }
  }, []);

  const t = useCallback(
    (key: string) => translations[language][key] ?? translations.en[key] ?? key,
    [language],
  );

  const contextValue = useMemo(
    () => ({ language, setLanguage: changeLanguage, t }),
    [language, changeLanguage, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

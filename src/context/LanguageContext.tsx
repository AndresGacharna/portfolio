"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

type Language = "es" | "en" | "pt";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

const translations = {
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    // Hero
    "hero.console": "Bienvenidos a mi portfolio!",
    "hero.bio": (
      <>
        <span style={{ fontWeight: 1000 }}>Ingeniero de Software</span> enfocado
        en <span style={{ fontWeight: 1000 }}>soluciones de negocio</span>. No
        solo transformo ideas en código funcional, me sumerjo en la{" "}
        <span style={{ fontWeight: 1000 }}>lógica y necesidades</span> de cada
        cliente para estructurar soluciones alineadas con sus{" "}
        <span style={{ fontWeight: 1000 }}>objetivos reales</span>. Mi enfoque
        va desde la{" "}
        <span style={{ fontWeight: 1000 }}>conversación estratégica</span> hasta
        el <span style={{ fontWeight: 1000 }}>despliegue técnico</span>,
        asegurando que cada línea de código aporte{" "}
        <span style={{ fontWeight: 1000 }}>valor real y escalable</span>.
      </>
    ),
    "hero.btnPrimary": "Ver Proyectos",
    "hero.btnOutline": "Contacto",
    "hero.title0": "Desarrollador Full Stack",
    "hero.title1": "Entusiasta UI/UX",
    "hero.title2": "Ingeniero Creativo",
    "hero.title3": "Solucionador de Problemas",

    // About
    "about.label": "// sobre mí",
    "about.title": "Sobre Mí",
    "about.whoami":
      "Soy un Ingeniero de Sistemas especializado en Backend (.NET, Node.js & NestJS). Me apasiona crear arquitecturas limpias, escalables y funcionales. Disfruto el mundo del DevOps, administrando clusters con Proxmox, Docker y Linux para llevar el código de la idea a producción.",
    "about.interests": "const intereses = [",
    "about.certifications":
      "- Fortinet Certified Associate en Ciberseguridad\n- Scrum Fundamentals Certified\n- NestJS & Microservicios (Udemy)\n- API OpenAI & React (Udemy)\n- Fundamentos de Marketing Digital (Google)",
    "about.status": "Preparado para mejorar e innovar proyectos",
    "about.stat0": "De Experiencia",
    "about.stat1": "Certificaciones",
    "about.stat2": "Tecnologías",
    "about.stat3": "Tazas de Café",

    // Tech Stack
    "tech.label": "// habilidades",
    "tech.title": "Tech Stack",
    "tech.cat.frameworks": "Frameworks - Librerías",
    "tech.cat.architecture": "Architecture & Concepts",
    "tech.cat.devops": "DevOps & Tools",
    "tech.cat.languages": "Languages",
    "tech.cat.databases": "Databases",
    "tech.layered": "Arquitectura por Capas",

    // Projects
    "projects.label": "// trabajo",
    "projects.title": "Proyectos",
    "projects.btnDemo": "👁️ Echar un vistazo",
    "projects.desc0":
      "Infraestructura de nube personal gestionada con Proxmox VE. Incluye VPN privada (Tailscale), Nginx Proxy Manager, y entornos Docker para experimentación y microservicios.",
    "projects.desc1":
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    "projects.desc2":
      "Herramienta para generar portafolios profesionales con templates personalizables y deploy automático.",
    "projects.desc3":
      "Chat en tiempo real con soporte para grupos, archivos compartidos y videollamadas.",
    "projects.desc4":
      "Aplicación móvil de cupones y domicilios desarrollada para la comunidad de la Universidad Jorge Tadeo Lozano, destacada en la Feria Tadeista.",
    "projects.desc5":
      "Fine-tuning de una red neuronal ResNet. (Puedes encontrar este proyecto en la página 3 de la publicación de los proyectos del curso).",
    "projects.desc6":
      "Sistema distribuido de e-commerce con cinco microservicios NestJS comunicados de forma asíncrona por NATS, cada uno con su propia base de datos. Incluye pagos con Stripe vía webhook, empaquetado en Docker y manifiestos de Kubernetes.",
    "projects.name6": "Tienda — Microservicios con NestJS",
    "projects.name7": "AnyList — API GraphQL con NestJS",
    "projects.badgeUtadeo": "Proyecto universitario · Utadeo",
    "projects.desc7":
      "API de listas de compra construida con NestJS y GraphQL sobre Apollo Server, con persistencia en PostgreSQL mediante TypeORM. Incluye autenticación JWT con roles, argumentos reutilizables de paginación y búsqueda, y seed de datos de prueba.",

    // Experience
    "exp.label": "// trayectoria",
    "exp.title": "Journey",
    "exp.date0": "Dic. 2024 - Presente",
    "exp.role0": "Software Engineer / Backend Developer",
    "exp.desc0":
      "Desarrollo de soluciones backend robustas y escalables orientadas a microservicios. Participación en el ciclo de vida del desarrollo de software, aplicando buenas prácticas y arquitecturas limpias.",
    "exp.date1": "2022 - Mar. 2026",
    "exp.role1": "Formación - Ingeniería de Sistemas",
    "exp.desc1":
      "Desarrollo de bases sólidas en programación, algoritmos y resolución de problemas. Enfoque en arquitectura de software y metodologías formales.",
    "exp.date2": "Ene. 2024",
    "exp.role2": "Desarrollo de Visión de Negocio",
    "exp.desc2":
      "Certificación en Creación de empresas. Aprendizaje sobre cómo dirigir negocios rentables, conectando las soluciones técnicas con los objetivos clave de la empresa.",
    "exp.date3": "2023 - 2025",
    "exp.role3": "Backend & Ciberseguridad",
    "exp.desc3":
      "Certificaciones robustas en NestJS, diseño de Microservicios, implementación de GraphQL y ciberseguridad mediante Fortinet.",
    "exp.date4": "2026 - Presente",
    "exp.role4": "Proxmox, Docker & Infraestructura",
    "exp.desc4":
      "Administración de Centro de Datos propio utilizando Proxmox. Configuración de VPNs, servicios en nube privada y despliegues con contenedores Docker para entornos controlados de microservicios.",

    "exp.date5": "Expedición: feb. 2025",
    "exp.role5": "Nest: Desarrollo backend escalable con Node",
    "exp.desc5":
      "Curso práctico de NestJS en Udemy. Construcción de APIs REST robustas y escalables usando Node.js con el framework NestJS.",

    "exp.date6": "Expedición: sept. 2025",
    "exp.role6": "NestJS + Microservicios: Aplicaciones escalables y modulares",
    "exp.desc6":
      "Diseño e implementación de arquitecturas de microservicios con NestJS, comunicación entre servicios y patrones de escalabilidad.",

    "exp.date7": "Expedición: oct. 2025",
    "exp.role7": "Nest + GraphQL: Evoluciona tus APIs",
    "exp.desc7":
      "Integración de GraphQL en aplicaciones NestJS para construir APIs flexibles y eficientes.",

    "exp.date8": "Expedición: oct. 2025",
    "exp.role8": "OpenAI: Ejercicios prácticos y asistentes con React + NestJS",
    "exp.desc8":
      "Integración de la API de OpenAI para desarrollar asistentes inteligentes usando React en el frontend y NestJS en el backend.",

    "exp.date9": "Expedición: nov. 2025",
    "exp.role9": "Scrum Fundamentals Certified",
    "exp.desc9":
      "Certificación en los fundamentos de la metodología Scrum, incluyendo roles, eventos y artefactos del framework ágil.",

    "exp.date10": "Expedición: nov. 2025 · Vencimiento: nov. 2027",
    "exp.role10": "Fortinet Certified Associate in Cybersecurity",
    "exp.desc10":
      "Certificación oficial de Fortinet en ciberseguridad, cubriendo fundamentos de seguridad de redes, amenazas y controles de defensa.",

    // Contact
    "contact.label": "// contacto",
    "contact.title": "Get In Touch",
    "contact.cardTitle": "¿Preparado para subir de nivel?",
    "contact.cardText": "¡Construyamos algo juntos!",

    // Footer
    "footer.tagline": "Creado con pasión & píxeles",
    "footer.nav": "Navegación",
    "footer.connect": "Contacto",
    "footer.madeWith": "Hecho con ♥ y mucho ☕",
    "footer.copyright": "© {year} Andrés Gacharná.",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    // Hero
    "hero.console": "Welcome to my portfolio!",
    "hero.bio": (
      <>
        <span style={{ fontWeight: 1000 }}>Software Engineer</span> focused on{" "}
        <span style={{ fontWeight: 1000 }}>business solutions</span>. Not only
        do I transform ideas into functional code, I immerse myself in the{" "}
        <span style={{ fontWeight: 1000 }}>logic and needs</span> of each client
        to structure solutions aligned with their{" "}
        <span style={{ fontWeight: 1000 }}>real objectives</span>. My approach
        goes from{" "}
        <span style={{ fontWeight: 1000 }}>strategic conversation</span> to{" "}
        <span style={{ fontWeight: 1000 }}>technical deployment</span>, ensuring
        every line of code adds{" "}
        <span style={{ fontWeight: 1000 }}>real and scalable value</span>.
      </>
    ),
    "hero.btnPrimary": "View Projects",
    "hero.btnOutline": "Contact",
    "hero.title0": "Full Stack Developer",
    "hero.title1": "UI/UX Enthusiast",
    "hero.title2": "Creative Engineer",
    "hero.title3": "Problem Solver",

    // About
    "about.label": "// about",
    "about.title": "About Me",
    "about.whoami":
      "I am a Systems Engineer specializing in Backend (.NET, Node.js & NestJS). I am passionate about creating clean, scalable and functional architectures. I enjoy the DevOps world, managing clusters with Proxmox, Docker, and Linux to take code from idea to production.",
    "about.interests": "const interests = [",
    "about.certifications":
      "- Fortinet Certified Associate in Cybersecurity\n- Scrum Fundamentals Certified\n- NestJS & Microservices (Udemy)\n- OpenAI API & React (Udemy)\n- Fundamentals of Digital Marketing (Google)",
    "about.status": "Ready to improve and innovate projects",
    "about.stat0": "Of Experience",
    "about.stat1": "Certifications",
    "about.stat2": "Technologies",
    "about.stat3": "Cups of Coffee",
    "about.stat4": "Years of Experience",

    // Tech Stack
    "tech.label": "// skills",
    "tech.title": "Tech Stack",
    "tech.cat.frameworks": "Frameworks - Libraries",
    "tech.cat.architecture": "Architecture & Concepts",
    "tech.cat.devops": "DevOps & Tools",
    "tech.cat.languages": "Languages",
    "tech.cat.databases": "Databases",
    "tech.layered": "Layered Architecture",

    // Projects
    "projects.label": "// work",
    "projects.title": "Projects",
    "projects.btnDemo": "👁️ Take a look",
    "projects.desc0":
      "Personal cloud infrastructure managed with Proxmox VE. Includes private VPN (Tailscale), Nginx Proxy Manager, and Docker environments for experimentation and microservices.",
    "projects.desc1":
      "Task management application featuring drag & drop, real-time collaboration, and notifications.",
    "projects.desc2":
      "A tool for generating professional portfolios with customizable templates and automated deployment.",
    "projects.desc3":
      "Real-time chat application with support for groups, file sharing, and video calls.",
    "projects.desc4":
      "Mobile coupon and delivery application developed for the Universidad Jorge Tadeo Lozano community, featured at the Tadeista Fair.",
    "projects.desc5":
      "Fine-tuning of a ResNet neural network. (You can find this project on page 3 of the course projects publication).",
    "projects.desc6":
      "Distributed e-commerce system with five NestJS microservices communicating asynchronously over NATS, each with its own database. Includes Stripe payments via webhook, Docker packaging, and Kubernetes manifests.",
    "projects.name6": "Store — Microservices with NestJS",
    "projects.name7": "AnyList — GraphQL API with NestJS",
    "projects.badgeUtadeo": "University project · Utadeo",
    "projects.desc7":
      "Shopping list API built with NestJS and GraphQL on Apollo Server, persisted in PostgreSQL through TypeORM. Includes JWT authentication with roles, reusable pagination and search arguments, and a test data seed.",

    // Experience
    "exp.label": "// experience",
    "exp.title": "Journey",
    "exp.date0": "Dec. 2024 - Present",
    "exp.role0": "Software Engineer / Backend Developer",
    "exp.desc0":
      "Development of robust and scalable backend solutions oriented towards microservices. Participation in the software development lifecycle, applying best practices and clean architectures.",
    "exp.date1": "2022 - Mar. 2026",
    "exp.role1": "Education - Systems Engineering",
    "exp.desc1":
      "Development of a solid foundation in programming, algorithms, and problem-solving. Focus on software architecture and formal methodologies.",
    "exp.date2": "Jan. 2024",
    "exp.role2": "Business Vision Development",
    "exp.desc2":
      "Certification in Entrepreneurship. Learning how to direct profitable businesses, connecting technical solutions with key company goals.",
    "exp.date3": "2023 - 2025",
    "exp.role3": "Backend & Cybersecurity",
    "exp.desc3":
      "Robust certifications in NestJS, Microservices design, GraphQL implementation, and cybersecurity through Fortinet.",
    "exp.date4": "2026 - Present",
    "exp.role4": "Proxmox, Docker & Infrastructure",
    "exp.desc4":
      "Administration of self-owned Data Center using Proxmox. Configuration of VPNs, private cloud services, and deployments with Docker containers for controlled microservices environments.",

    "exp.date5": "Feb. 2025",
    "exp.role5": "Nest: Scalable Backend Development with Node",
    "exp.desc5":
      "Practical NestJS course on Udemy. Building robust and scalable REST APIs using Node.js with the NestJS framework.",

    "exp.date6": "Sept. 2025",
    "exp.role6": "NestJS + Microservices: Scalable and Modular Applications",
    "exp.desc6":
      "Design and implementation of microservices architectures with NestJS, inter-service communication, and scalability patterns.",

    "exp.date7": "Oct. 2025",
    "exp.role7": "Nest + GraphQL: Evolve Your APIs",
    "exp.desc7":
      "Integration of GraphQL in NestJS applications to build flexible and efficient APIs.",

    "exp.date8": "Oct. 2025",
    "exp.role8":
      "OpenAI: Practical Exercises and Assistants with React + NestJS",
    "exp.desc8":
      "Integration of the OpenAI API to develop intelligent assistants using React on the frontend and NestJS on the backend.",

    "exp.date9": "Nov. 2025",
    "exp.role9": "Scrum Fundamentals Certified",
    "exp.desc9":
      "Certification in the fundamentals of the Scrum methodology, including roles, events, and artifacts of the agile framework.",

    "exp.date10": "Nov. 2025 · Expires: Nov. 2027",
    "exp.role10": "Fortinet Certified Associate in Cybersecurity",
    "exp.desc10":
      "Official Fortinet cybersecurity certification covering network security fundamentals, threat landscape, and defense controls.",

    // Contact
    "contact.label": "// contact",
    "contact.title": "Get In Touch",
    "contact.cardTitle": "Ready to Level Up?",
    "contact.cardText": "Let's Build Something Together",

    // Footer
    "footer.tagline": "Built with passion & pixels",
    "footer.nav": "Navigation",
    "footer.connect": "Connect",
    "footer.madeWith": "Made with ♥ and lots of ☕",
    "footer.copyright": "© {year} Andrés Gacharná.",
  },
  pt: {
    // Nav
    "nav.about": "Sobre mim",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato",

    // Hero
    "hero.console": "Bem-vindo ao meu portfólio!",
    "hero.bio": (
      <>
        <span style={{ fontWeight: 1000 }}>Engenheiro de Software</span> focado
        em <span style={{ fontWeight: 1000 }}>soluções de negócios</span>. Não
        apenas transformo ideias em código funcional, eu me aprofundo na{" "}
        <span style={{ fontWeight: 1000 }}>lógica e nas necessidades</span> de
        cada cliente para estruturar soluções alinhadas com seus{" "}
        <span style={{ fontWeight: 1000 }}>objetivos reais</span>. Minha
        abordagem vai desde a{" "}
        <span style={{ fontWeight: 1000 }}>conversa estratégica</span> até o{" "}
        <span style={{ fontWeight: 1000 }}>deploy técnico</span>, garantindo que
        cada linha de código traga{" "}
        <span style={{ fontWeight: 1000 }}>valor real e escalável</span>.
      </>
    ),
    "hero.btnPrimary": "Ver Projetos",
    "hero.btnOutline": "Contato",
    "hero.title0": "Desenvolvedor Full Stack",
    "hero.title1": "Entusiasta UI/UX",
    "hero.title2": "Engenheiro Criativo",
    "hero.title3": "Solucionador de Problemas",

    // About
    "about.label": "// sobre mim",
    "about.title": "Sobre Mim",
    "about.whoami":
      "Sou um Engenheiro de Sistemas especializado em Backend (.NET, Node.js & NestJS). Sou apaixonado por criar arquiteturas limpas, escaláveis e funcionais. Gosto do mundo DevOps, gerenciando clusters com Proxmox, Docker e Linux para levar o código da ideia à produção.",
    "about.interests": "const interesses = [",
    "about.certifications":
      "- Fortinet Certified Associate em Cibersegurança\n- Scrum Fundamentals Certified\n- NestJS & Microsserviços (Udemy)\n- API OpenAI & React (Udemy)\n- Fundamentos de Marketing Digital (Google)",
    "about.status": "Pronto para melhorar e inovar projetos",
    "about.stat0": "De Experiência",
    "about.stat1": "Certificações",
    "about.stat2": "Tecnologias",
    "about.stat3": "Xícaras de Café",
    "about.stat4": "Anos de Experiência",

    // Tech Stack
    "tech.label": "// habilidades",
    "tech.title": "Tech Stack",
    "tech.cat.frameworks": "Frameworks - Bibliotecas",
    "tech.cat.architecture": "Architecture & Concepts",
    "tech.cat.devops": "DevOps & Tools",
    "tech.cat.languages": "Languages",
    "tech.cat.databases": "Databases",
    "tech.layered": "Arquitetura em Camadas",

    // Projects
    "projects.label": "// trabalho",
    "projects.title": "Projetos",
    "projects.btnDemo": "👁️ Dar uma olhada",
    "projects.desc0":
      "Infraestrutura de nuvem pessoal gerenciada com Proxmox VE. Inclui VPN privada (Tailscale), Nginx Proxy Manager e ambientes Docker para experimentação e microsserviços.",
    "projects.desc1":
      "Aplicativo de gerenciamento de tarefas com drag & drop, colaboração em tempo real e notificações.",
    "projects.desc2":
      "Ferramenta para gerar portfólios profissionais con templates personalizáveis e deploy automático.",
    "projects.desc3":
      "Chat em tempo real com suporte a grupos, arquivos compartilhados e videochamadas.",
    "projects.desc4":
      "Aplicativo móvel de cupons e entregas desenvolvido para a comunidade da Universidad Jorge Tadeo Lozano, destacado na Feria Tadeista.",
    "projects.desc5":
      "Fine-tuning de uma rede neural ResNet. (Você pode encontrar este projeto na página 3 da publicação dos projetos do curso).",
    "projects.desc6":
      "Sistema distribuído de e-commerce com cinco microsserviços NestJS comunicando-se de forma assíncrona via NATS, cada um com seu próprio banco de dados. Inclui pagamentos com Stripe via webhook, empacotamento em Docker e manifestos de Kubernetes.",
    "projects.name6": "Loja — Microsserviços com NestJS",
    "projects.name7": "AnyList — API GraphQL com NestJS",
    "projects.badgeUtadeo": "Projeto universitário · Utadeo",
    "projects.desc7":
      "API de listas de compras construída com NestJS e GraphQL sobre Apollo Server, com persistência em PostgreSQL via TypeORM. Inclui autenticação JWT com funções, argumentos reutilizáveis de paginação e busca, e seed de dados de teste.",

    // Experience
    "exp.label": "// trajetória",
    "exp.title": "Journey",
    "exp.date0": "Dez. 2024 - Presente",
    "exp.role0": "Software Engineer / Backend Developer",
    "exp.desc0":
      "Desenvolvimento de soluções backend robustas e escaláveis orientadas a microsserviços. Participação no ciclo de vida do desenvolvimento de software, aplicando boas práticas e arquiteturas limpas.",
    "exp.date1": "2022 - Mar. 2026",
    "exp.role1": "Formação - Engenharia de Sistemas",
    "exp.desc1":
      "Desenvolvimento de bases sólidas em programação, algoritmos e resolução de problemas. Foco em arquitetura de software e metodologias formais.",
    "exp.date2": "Jan. 2024",
    "exp.role2": "Desenvolvimento de Visão de Negócios",
    "exp.desc2":
      "Certificação em Criação de Empresas. Aprendizado sobre como dirigir negócios rentáveis, conectando soluções técnicas com os objetivos-chave da empresa.",
    "exp.date3": "2023 - 2025",
    "exp.role3": "Backend & Cibersegurança",
    "exp.desc3":
      "Certificações robustas em NestJS, design de Microsserviços, implementação de GraphQL e cibersegurança com Fortinet.",
    "exp.date4": "2026 - Presente",
    "exp.role4": "Proxmox, Docker & Infraestrutura",
    "exp.desc4":
      "Administração de Data Center próprio utilizando Proxmox. Configuração de VPNs, serviços em nuvem privada e deploys con containers Docker para ambientes controlados de microsserviços.",

    "exp.date5": "Fev. 2025",
    "exp.role5": "Nest: Desenvolvimento Backend Escalável com Node",
    "exp.desc5":
      "Curso prático de NestJS na Udemy. Construção de APIs REST robustas e escaláveis usando Node.js com o framework NestJS.",

    "exp.date6": "Set. 2025",
    "exp.role6": "NestJS + Microsserviços: Aplicações Escaláveis e Modulares",
    "exp.desc6":
      "Design e implementação de arquiteturas de microsserviços com NestJS, comunicação entre serviços e padrões de escalabilidade.",

    "exp.date7": "Out. 2025",
    "exp.role7": "Nest + GraphQL: Evolua suas APIs",
    "exp.desc7":
      "Integração de GraphQL em aplicações NestJS para construir APIs flexíveis e eficientes.",

    "exp.date8": "Out. 2025",
    "exp.role8": "OpenAI: Exercícios Práticos e Assistentes com React + NestJS",
    "exp.desc8":
      "Integração da API OpenAI para desenvolver assistentes inteligentes usando React no frontend e NestJS no backend.",

    "exp.date9": "Nov. 2025",
    "exp.role9": "Scrum Fundamentals Certified",
    "exp.desc9":
      "Certificação nos fundamentos da metodologia Scrum, incluindo papéis, eventos e artefatos do framework ágil.",

    "exp.date10": "Nov. 2025 · Vencimento: Nov. 2027",
    "exp.role10": "Fortinet Certified Associate em Cibersegurança",
    "exp.desc10":
      "Certificação oficial da Fortinet em cibersegurança, cobrindo fundamentos de segurança de redes, ameaças e controles de defesa.",

    // Contact
    "contact.label": "// contato",
    "contact.title": "Entre em Contato",
    "contact.cardTitle": "Pronto para subir de nível?",
    "contact.cardText": "Vamos construir algo juntos!",

    // Footer
    "footer.tagline": "Criado com paixão & pixels",
    "footer.nav": "Navegação",
    "footer.connect": "Contato",
    "footer.madeWith": "Feito com ♥ e muito ☕",
    "footer.copyright": "© {year} Andrés Gacharná.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-language") as Language;
      if (saved === "es" || saved === "en" || saved === "pt") {
        setLanguage(saved);
      }
    } catch (e) {
      console.warn("localStorage access denied");
    }
  }, []);

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("portfolio-language", lang);
    } catch (e) {
      console.warn("localStorage access denied");
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const langTrans = translations[language] as any;
      return langTrans[key] || key;
    },
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

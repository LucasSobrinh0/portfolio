window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                darkBase: "#0f172a",
                glowColor: "#22d3ee",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 15px rgba(34, 211, 238, 0.5)",
                "glow-hover": "0 0 25px rgba(34, 211, 238, 0.7)",
            },
        },
    },
};

const translations = {
    en: {
        "hero-title-line1": "Hi, I'm Lucas.",
        "hero-title-line2": "Software Developer",
        "hero-title-line3": "PHP, Python & Javascript.",
        "hero-subtitle":
            "I build web systems, automations, and digital products with a strong focus on performance, practical usability, and real business impact.",
        "contact-button": "Contact",
        scroll: "Scroll",
        "experiences-title": "Experiences",
        "exp1-role": "Software Developer",
        "exp1-date": "Alow • Jun 2025 – Present",
        "exp1-li1":
            "Built and maintained web systems on Apache, Linux, Docker, and PostgreSQL with near-100% availability.",
        "exp1-li2":
            "Created MVPs and integrations with Active Directory, Apollo, HubSpot, Gmail, and BotConversa.",
        "exp1-li3":
            "Implemented LLM workflows that increased telecom invoice analysis throughput by 10x.",
        "exp1-li4":
            "Developed WhatsApp integrations and Node.js APIs to streamline business operations.",
        "exp1-li5":
            "Reduced load times from minutes to milliseconds using Ajax, DataTables, and offset pagination.",
        "exp1-li6":
            "Built telecom RPAs with Python and Selenium to process high-volume invoice data at scale.",
        "exp1-li7":
            "Optimized a Symfony codebase, reducing dependencies and improving maintainability.",
        "exp1-li8":
            "Introduced automated tests, reducing recurring bugs across sprints.",
        "exp1-li9":
            "Improved key UX flows with faster, modal-based interactions.",
        "exp2-role": "Systems Analyst",
        "exp2-date": "Vilarouca / Doutor Soluções • July 2024 – July 2025",
        "exp2-li1":
            "Designed Python automations with Selenium, Pandas, and NumPy, increasing operational efficiency by 80%.",
        "exp2-li2":
            "Developed REST APIs with Django REST Framework to improve integration between internal systems.",
        "exp2-li3": "Created chatbots that accelerated service workflows by 3x.",
        "exp2-li4":
            "Managed Active Directory and Linux servers, sustaining infrastructure reliability for internal operations.",
        "exp2-li5":
            "Supported planning and negotiation of new systems, aligning technical decisions with business priorities.",
        "exp3-role": "IT Assistant",
        "exp3-date": "Atacadão S.A / Carrefour • March 2022 – March 2024",
        "exp3-li1": "Managed Linux and Windows infrastructure environments.",
        "exp3-li2": "Automated administrative routines using Bash scripts.",
        "exp3-li3": "Maintained NF e server operations.",
        "exp3-li4": "Implemented real time price display systems for retail.",
        "projects-title": "Projects",
        "personal-tag": "Personal",
        technologies: "Technologies",
        overview: "Overview",
        "project1-overview":
            "An AI-assisted platform for generating diet and workout plans, with a simple flow for tracking training progress over time.",
        "project2-overview":
            "A platform for managing activities and mentorship materials with a focus on organization, follow-up, and practical day-to-day use.",
        "project3-overview":
            "A collaborative document platform with real-time editing powered by Node.js and WebSockets.",
        "awards-title": "Awards & Recognition",
        "award1-description":
            "Developed an AI-driven market inventory control system predicting stock shortages.",
        "award2-description":
            "Agile Challenge. Acted as PO/PM delivering real software solutions.",
        "award2-li1": "Designed UI/UX prototypes.",
        "award2-li2": "Implemented Prisma ORM & API integrations.",
        "award2-li3": "Fixed critical backend performance bugs.",
        "back-to-top": "Back to Top",
    },
    pt: {
        "hero-title-line1": "Olá, eu sou Lucas.",
        "hero-title-line2": "Desenvolvedor de Software",
        "hero-title-line3": "PHP, Python e Javascript.",
        "hero-subtitle":
            "Desenvolvo sistemas web, automações e produtos digitais com foco em performance, usabilidade prática e impacto real no negócio.",
        "contact-button": "Contato",
        scroll: "Descer",
        "experiences-title": "Experiências",
        "exp1-role": "Desenvolvedor de Software",
        "exp1-date": "Alow • Jun 2025 – Atual",
        "exp1-li1":
            "Desenvolvi e mantive sistemas web com Apache, Linux, Docker e PostgreSQL, sustentando disponibilidade próxima de 100%.",
        "exp1-li2":
            "Criei MVPs e integrações com Active Directory, Apollo, HubSpot, Gmail e BotConversa.",
        "exp1-li3":
            "Implementei fluxos com LLMs que aumentaram em 10x a capacidade operacional na análise de faturas telefônicas.",
        "exp1-li4":
            "Desenvolvi integrações com WhatsApp e APIs em Node.js para agilizar operações de negócio.",
        "exp1-li5":
            "Reduzi tempos de carregamento de minutos para milissegundos com Ajax, DataTables e paginação por offset.",
        "exp1-li6":
            "Criei RPAs para telecom com Python e Selenium para processar grandes volumes de faturas em escala.",
        "exp1-li7":
            "Otimizei uma codebase Symfony, reduzindo dependências e melhorando a manutenção.",
        "exp1-li8":
            "Introduzi testes automatizados, reduzindo bugs recorrentes entre sprints.",
        "exp1-li9":
            "Melhorei fluxos importantes de UX com interações mais rápidas e navegação por modais.",
        "exp2-role": "Analista de Sistemas",
        "exp2-date": "Vilarouca / Doutor Soluções • Julho 2024 – Julho 2025",
        "exp2-li1":
            "Projetei automações em Python com Selenium, Pandas e NumPy, elevando a eficiência operacional em 80%.",
        "exp2-li2":
            "Desenvolvi APIs REST com Django REST Framework para integrar melhor os sistemas internos.",
        "exp2-li3": "Criei chatbots que aceleraram em 3x os fluxos de atendimento.",
        "exp2-li4":
            "Gerenciei servidores Active Directory e Linux, sustentando a confiabilidade da infraestrutura interna.",
        "exp2-li5":
            "Apoiei o planejamento e a negociação de novos sistemas, alinhando decisões técnicas às prioridades do negócio.",
        "exp3-role": "Assistente de TI",
        "exp3-date": "Atacadão S.A / Carrefour • Março 2022 – Março 2024",
        "exp3-li1": "Gerenciei ambientes de infraestrutura Linux e Windows.",
        "exp3-li2": "Automatizei rotinas administrativas com scripts Bash.",
        "exp3-li3": "Mantive operações de servidores NF-e.",
        "exp3-li4":
            "Implementei sistemas de exibição de preços em tempo real para o varejo.",
        "projects-title": "Projetos",
        "personal-tag": "Pessoal",
        technologies: "Tecnologias",
        overview: "Visão geral",
        "project1-overview":
            "Uma plataforma com apoio de IA para gerar dietas e treinos, com um fluxo simples para acompanhar a evolução dos treinos ao longo do tempo.",
        "project2-overview":
            "Uma plataforma para gerenciar atividades e materiais de mentoria, com foco em organização, acompanhamento e uso prático no dia a dia.",
        "project3-overview":
            "Uma plataforma colaborativa de documentos com edição em tempo real usando Node.js e WebSockets.",
        "awards-title": "Prêmios e Reconhecimentos",
        "award1-description":
            "Desenvolvi um sistema de controle de estoque com IA voltado para prever rupturas e apoiar a tomada de decisão.",
        "award2-description":
            "Desafio ágil com atuação como PO/PM na entrega de soluções de software.",
        "award2-li1": "Desenhei protótipos de UI/UX.",
        "award2-li2": "Implementei Prisma ORM e integrações com APIs.",
        "award2-li3": "Corrigi gargalos críticos de performance no backend.",
        "back-to-top": "Voltar ao topo",
    },
};

const applyLanguage = (lang) => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
        button.classList.toggle("active", button.dataset.langButton === lang);
    });

    localStorage.setItem("portfolio-language", lang);
};

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("portfolio-language") || "en";

    document.querySelectorAll("[data-lang-button]").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
    });

    applyLanguage(savedLanguage);
});

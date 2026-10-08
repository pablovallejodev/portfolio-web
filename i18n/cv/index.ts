import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';

const es: Dictionary = {
  metadata: {
    title: 'Pablo Vallejo | Portfolio',
    description:
      'Ingeniero Backend Senior con más de 8 años de experiencia en Node.js, TypeScript y Big Data en tiempo real.',
  },
  navigation: [
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'languages', label: 'Idiomas' },
    { id: 'contact', label: 'Contacto' },
  ],
  profile: {
    headline: 'Ingeniero Backend Senior — Node.js · TypeScript · Big Data',
    shortHeadline: 'Ingeniero Backend Senior',
    status: 'Abierto a oportunidades indefinidas y freelance',
    summary: [
      'Ingeniero Backend Senior español con más de 8 años de experiencia diseñando microservicios y monolitos de alto rendimiento respaldados por pipelines de Big Data en tiempo real.',
      'Experto en Node.js y TypeScript, con impacto demostrado en entornos de alto volumen que dan servicio a más de 10 millones de usuarios. Cómodo asumiendo sistemas de extremo a extremo, desde la arquitectura y la observabilidad hasta el despliegue en producción.',
      'Ciudadano de la UE. Disponible para puestos indefinidos y colaboraciones freelance en todo el mundo.',
    ],
    highlights: [
      { label: 'Ingeniería backend' },
      { label: 'Usuarios en producción' },
      { label: 'SLA en servicios críticos' },
      { label: 'Idiomas hablados' },
    ],
    social: {
      email: 'Correo',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ubicación',
      passport: 'Estado',
      website: 'Web',
    },
    socialValues: { passport: 'Español · Ciudadano de la UE' },
  },
  hero: {
    title: 'Pablo Vallejo, tu desarrollador de confianza',
    subtitle: 'Proyectos Open Source y soluciones para empresas',
    projectsLabel: 'Proyectos destacados',
    visitProject: 'Ver proyecto',
    projects: {
      deepfriend: { description: 'Acompañante emocional con IA para ansiedad, estrés e insomnio.' },
      puente: { description: 'Traductor de voz en tiempo real, sin conexión y de código abierto.' },
    },
    getInTouch: 'Hablemos',
  },
  deepfriend: {
    title: 'Acompañamiento emocional, diseñado con cuidado.',
    description:
      'Deepfriend es una app de acompañamiento emocional con IA. Blue permite conversar por chat o voz, explorar contenidos y practicar mindfulness. La orientación del producto se describe como centrada en la terapia cognitivo-conductual (TCC).',
    disclaimer: 'No sustituye la terapia ni la atención de profesionales de la salud.',
    visit: 'Descubrir Deepfriend',
    opensInNewTab: '(se abre en una pestaña nueva)',
    imageAlt: 'Imagen oficial de Deepfriend con su identidad visual en tonos teal',
  },
  puente: {
    title: 'Entenderse, incluso sin conexión.',
    description:
      'Puente es una app Android de traducción de voz en tiempo real. Utiliza IA y procesa la traducción en el propio teléfono. Tras descargar los modelos de idioma con conexión a internet, puede traducir sin conexión.',
    status: 'Gratuita y de código abierto. Sigue en desarrollo y su publicación en Google Play está pendiente.',
    visit: 'Descubrir Puente',
    opensInNewTab: '(se abre en una pestaña nueva)',
    imageAlt: 'Ilustración de un puente de piedra entre montañas y un río, inspirada en Asturias',
  },
  about: {
    eyebrow: '01 · Sobre mí',
    title: 'Ingeniero Backend Senior centrado en escala, latencia y claridad.',
    glance: 'En resumen',
    facts: { role: 'Rol', stack: 'Stack', citizenship: 'Ciudadanía', availability: 'Disponibilidad' },
  },
  experience: {
    eyebrow: '02 · Experiencia',
    title: 'Donde he puesto sistemas en producción.',
    description:
      'Una selección de puestos en los que he liderado y contribuido a arquitecturas backend, pipelines de datos y fiabilidad.',
    active: 'Actual',
    data: {
      deepfriend: {
        role: 'Fundador y CTO',
        location: 'Delaware, EE. UU. · Remoto',
        start: 'abr 2024',
        end: 'Actualidad',
        description:
          'Fundé una plataforma de salud mental basada en IA y fundamentada en la Terapia Cognitivo-Conductual (TCC), asumiendo el producto de extremo a extremo desde la arquitectura hasta su lanzamiento público.',
        bullets: [
          'Diseñé y desplegué un backend escalable para conversaciones de IA en tiempo real con LLM, incluyendo un sistema avanzado de memoria y chat de voz con un SLA inferior a 1 s.',
          'Diseñé un sistema de Big Data sostenible en Google Cloud Platform (GCP) para gestionar datos sensibles con alta disponibilidad y cumplimiento normativo.',
          'Lancé la aplicación en Google Play Store, alcanzando más de 1.000 descargas y una retención del 30 % a 7 días mediante iteración continua basada en datos.',
          'Constituí la empresa en Delaware y lideré el cumplimiento legal, de privacidad y de gestión de datos desde el primer día.',
        ],
      },
      rrverse: {
        role: 'Desarrollador Backend Senior',
        location: 'Madrid, España',
        start: 'nov 2022',
        end: 'dic 2025',
        description:
          'Cliente de telecomunicaciones con más de 10 millones de abonados. Responsable del backend central de detección de anomalías de red y del pipeline de Big Data en tiempo real.',
        bullets: [
          'Desarrollé el backend central de detección de anomalías para una red de telecomunicaciones con más de 10 millones de clientes.',
          'Optimicé microservicios críticos con un SLA de 300 ms, logrando una reducción estimada del 60 % en el tiempo medio de respuesta.',
          'Diseñé e implementé un pipeline de Big Data en tiempo real que procesa millones de eventos de red diarios e integra Elastic Machine Learning para detectar anomalías predictivas.',
          'Rediseñé consultas complejas en ClickHouse, BigQuery y MariaDB, reduciendo la latencia de recuperación de datos un 30 % y garantizando la estabilidad en picos de tráfico nacionales.',
          'Desplegué y operé servicios contenerizados en Kubernetes (Rancher / OpenShift), garantizando alta disponibilidad para servicios críticos.',
          'Construí un backend de estado de cliente en tiempo real que redujo drásticamente el tiempo de resolución de incidencias del equipo de soporte.',
        ],
      },
      aszendit: {
        role: 'Desarrollador Backend',
        location: 'Madrid, España',
        start: 'sep 2021',
        end: 'nov 2022',
        description:
          'Consultoría de energías renovables. Construí el backend que alimentaba los análisis de generación solar en tiempo real de una aplicación móvil para clientes.',
        bullets: [
          'Diseñé e implementé un sistema backend para procesar datos de generación de paneles solares en tiempo real.',
          'Creé microservicios de alto rendimiento para servir métricas de generación a la aplicación para clientes.',
          'Contribuí a la interfaz de la aplicación móvil (Expo / React Native) y aseguré una integración fluida con el backend.',
          'Lideré la fase final de desarrollo de la aplicación, trabajando en ciclos SCRUM semanales y ágiles.',
        ],
      },
      freelance: {
        role: 'Desarrollador Web',
        location: 'Barcelona, España',
        start: 'mar 2018',
        end: 'nov 2022',
        description: 'Trabajo full-stack independiente para pequeñas y medianas empresas de retail y servicios.',
        bullets: [
          'Diseñé la presencia digital y estrategias SEO para más de 10 pymes de retail y servicios.',
          'Gestioné desde los dominios hasta el despliegue full-stack y el mantenimiento continuo.',
        ],
      },
    },
  },
  skills: {
    eyebrow: '03 · Habilidades',
    title: 'Un conjunto de herramientas orientado a la fiabilidad backend y los datos.',
    description: 'Experiencia práctica con todas ellas en entornos de producción. Siempre aprendiendo la siguiente.',
    data: {
      backend: 'Backend y arquitectura',
      data: 'Big Data y observabilidad',
      databases: 'Bases de datos',
      devops: 'DevOps y cloud',
      other: 'Herramientas y otros',
    },
  },
  languages: {
    eyebrow: '04 · Idiomas',
    title: 'Comunicación entre equipos y fronteras.',
    data: {
      Spanish: { language: 'Español', fluency: 'Nativo' },
      Catalan: { language: 'Catalán', fluency: 'Nativo' },
      English: { language: 'Inglés', fluency: 'Dominio profesional completo' },
    },
  },
  contact: {
    eyebrow: '05 · Contacto',
    title: 'Construyamos algo fiable juntos.',
    description:
      'Disponible para puestos backend senior, liderazgo técnico y colaboraciones freelance. Trabajo remoto sin problema.',
    bestWay: 'La mejor forma de contactarme',
    message:
      'Estaré encantado de leerte: escríbeme sobre un puesto, un proyecto o simplemente para saludar. Gracias por pasarte.',
    sendEmail: 'Envíame un correo',
  },
  terminal: {
    eyebrow: '06 · Terminal',
    title: 'Nos vemos en la shell.',
    description:
      '¿Prefieres la CLI a un formulario? Copia el comando, pégalo en tu terminal y entra en una sesión interactiva: backends hablando con backends.',
    runInTerminal: 'Ejecutar {command} en tu terminal',
    copyCommand: 'Copiar comando SSH',
    copied: 'Copiado',
    copy: 'Copiar',
  },
  source: {
    eyebrow: '07 · Código fuente',
    title: 'Este sitio viene con su código fuente.',
    description:
      'El portfolio es público. Inspecciona el stack, la estructura y cómo encajan las piezas; hazle un fork si te resulta útil.',
    viewOnGithub: 'Ver en GitHub',
  },
  header: { primary: 'Principal' },
  footer: {
    navigate: 'Navegar',
    contact: 'Contacto',
    openSourceGithub: 'Código abierto · GitHub',
    allRightsReserved: 'Todos los derechos reservados.',
    openSourcePortfolio: 'Portfolio de código abierto.',
  },
  aria: {
    language: 'Idioma',
    languages: 'Idiomas',
    emailCopied: 'Correo copiado',
    copyEmail: 'Copiar dirección de correo',
    copied: '¡Copiado!',
  },
};

const ca: Dictionary = {
  ...es,
  metadata: {
    title: 'Pablo Vallejo | Portfolio',
    description:
      'Enginyer Backend Sènior amb més de 8 anys d’experiència en Node.js, TypeScript i Big Data en temps real.',
  },
  navigation: [
    { id: 'about', label: 'Sobre mi' },
    { id: 'experience', label: 'Experiència' },
    { id: 'skills', label: 'Habilitats' },
    { id: 'languages', label: 'Idiomes' },
    { id: 'contact', label: 'Contacte' },
  ],
  profile: {
    ...es.profile,
    headline: 'Enginyer Backend Sènior — Node.js · TypeScript · Big Data',
    shortHeadline: 'Enginyer Backend Sènior',
    status: 'Obert a oportunitats indefinides i freelance',
    summary: [
      'Enginyer Backend Sènior espanyol amb més de 8 anys d’experiència dissenyant microserveis i monòlits d’alt rendiment amb pipelines de Big Data en temps real.',
      'Expert en Node.js i TypeScript, amb impacte demostrat en entorns d’alt volum que donen servei a més de 10 milions d’usuaris. Còmode assumint sistemes de cap a cap, des de l’arquitectura i l’observabilitat fins al desplegament en producció.',
      'Ciutadà de la UE. Disponible per a llocs indefinits i col·laboracions freelance arreu del món.',
    ],
    highlights: [
      { label: 'Enginyeria backend' },
      { label: 'Usuaris en producció' },
      { label: 'SLA en serveis crítics' },
      { label: 'Idiomes parlats' },
    ],
    social: {
      ...es.profile.social,
      email: 'Correu',
      phone: 'Telèfon',
      passport: 'Estat',
      location: 'Ubicació',
      website: 'Web',
    },
    socialValues: { passport: 'Espanyol · Ciutadà de la UE' },
  },
  hero: {
    title: 'Pablo Vallejo, el teu desenvolupador de confiança',
    subtitle: 'Projectes de codi obert i solucions per a empreses',
    projectsLabel: 'Projectes destacats',
    visitProject: 'Veure projecte',
    projects: {
      deepfriend: { description: 'Acompanyant emocional amb IA per a l’ansietat, l’estrès i l’insomni.' },
      puente: { description: 'Traductor de veu en temps real, sense connexió i de codi obert.' },
    },
    getInTouch: 'Parlem',
  },
  deepfriend: {
    title: 'Acompanyament emocional, dissenyat amb cura.',
    description:
      'Deepfriend és una app d’acompanyament emocional amb IA. Blue permet conversar per xat o veu, explorar continguts i practicar mindfulness. L’orientació del producte es descriu com a centrada en la teràpia cognitivoconductual (TCC).',
    disclaimer: 'No substitueix la teràpia ni l’atenció de professionals de la salut.',
    visit: 'Descobreix Deepfriend',
    opensInNewTab: '(s’obre en una pestanya nova)',
    imageAlt: 'Imatge oficial de Deepfriend amb la seva identitat visual en tons teal',
  },
  puente: {
    title: 'Entendre’s, fins i tot sense connexió.',
    description:
      'Puente és una app Android de traducció de veu en temps real. Utilitza IA i processa la traducció al mateix telèfon. Després de descarregar els models d’idioma amb connexió a internet, pot traduir sense connexió.',
    status: 'Gratuïta i de codi obert. Encara està en desenvolupament i la publicació a Google Play està pendent.',
    visit: 'Descobreix Puente',
    opensInNewTab: '(s’obre en una pestanya nova)',
    imageAlt: 'Il·lustració d’un pont de pedra entre muntanyes i un riu, inspirada a Astúries',
  },
  about: {
    eyebrow: '01 · Sobre mi',
    title: 'Enginyer Backend Sènior centrat en escala, latència i claredat.',
    glance: 'En resum',
    facts: { role: 'Rol', stack: 'Stack', citizenship: 'Ciutadania', availability: 'Disponibilitat' },
  },
  experience: {
    ...es.experience,
    eyebrow: '02 · Experiència',
    title: 'On he posat sistemes en producció.',
    description:
      'Una selecció de llocs on he liderat i contribuït a arquitectures backend, pipelines de dades i fiabilitat.',
    active: 'Actual',
    data: {
      deepfriend: {
        ...es.experience.data.deepfriend,
        role: 'Fundador i CTO',
        location: 'Delaware, EUA · Remot',
        start: 'abr. 2024',
        end: 'Actualitat',
        description:
          'Vaig fundar una plataforma de salut mental basada en IA i fonamentada en la Teràpia Cognitivoconductual (TCC), assumint el producte de cap a cap des de l’arquitectura fins al llançament públic.',
        bullets: [
          'Vaig dissenyar i desplegar un backend escalable per a converses d’IA en temps real amb LLM, amb un sistema avançat de memòria i xat de veu amb un SLA inferior a 1 s.',
          'Vaig dissenyar un sistema de Big Data sostenible a Google Cloud Platform (GCP) per gestionar dades sensibles amb alta disponibilitat i compliment normatiu.',
          'Vaig llançar l’aplicació a Google Play Store, assolint més de 1.000 descàrregues i una retenció del 30 % als 7 dies mitjançant iteració contínua basada en dades.',
          'Vaig constituir l’empresa a Delaware i vaig liderar el compliment legal, de privacitat i de gestió de dades des del primer dia.',
        ],
      },
      rrverse: {
        ...es.experience.data.rrverse,
        role: 'Desenvolupador Backend Sènior',
        location: 'Madrid, Espanya',
        start: 'nov. 2022',
        end: 'des. 2025',
        description:
          'Client de telecomunicacions amb més de 10 milions d’abonats. Responsable del backend central de detecció d’anomalies de xarxa i del pipeline de Big Data en temps real.',
        bullets: [
          'Vaig desenvolupar el backend central de detecció d’anomalies per a una xarxa de telecomunicacions amb més de 10 milions de clients.',
          'Vaig optimitzar microserveis crítics amb un SLA de 300 ms i vaig aconseguir una reducció estimada del 60 % en el temps mitjà de resposta.',
          'Vaig dissenyar i implementar un pipeline de Big Data en temps real que processa milions d’esdeveniments de xarxa diaris i integra Elastic Machine Learning.',
          'Vaig redissenyar consultes complexes a ClickHouse, BigQuery i MariaDB, reduint un 30 % la latència de recuperació de dades.',
          'Vaig desplegar i operar serveis contenidoritzats a Kubernetes (Rancher / OpenShift), garantint alta disponibilitat.',
          'Vaig construir un backend d’estat de client en temps real que va reduir dràsticament el temps de resolució d’incidències del suport.',
        ],
      },
      aszendit: {
        ...es.experience.data.aszendit,
        role: 'Desenvolupador Backend',
        location: 'Madrid, Espanya',
        start: 'set. 2021',
        end: 'nov. 2022',
        description:
          'Consultoria d’energies renovables. Vaig construir el backend dels anàlisis de generació solar en temps real d’una aplicació mòbil per a clients.',
        bullets: [
          'Vaig dissenyar i implementar un sistema backend per processar dades de generació de plaques solars en temps real.',
          'Vaig crear microserveis d’alt rendiment per servir mètriques de generació a l’aplicació per a clients.',
          'Vaig contribuir a la interfície de l’aplicació mòbil (Expo / React Native) i vaig garantir una integració fluida amb el backend.',
          'Vaig liderar la fase final de desenvolupament de l’aplicació, treballant en cicles SCRUM setmanals i àgils.',
        ],
      },
      freelance: {
        ...es.experience.data.freelance,
        role: 'Desenvolupador Web',
        location: 'Barcelona, Espanya',
        start: 'març 2018',
        end: 'nov. 2022',
        description: 'Treball full-stack independent per a petites i mitjanes empreses de retail i serveis.',
        bullets: [
          'Vaig dissenyar la presència digital i estratègies SEO per a més de 10 pimes de retail i serveis.',
          'Vaig gestionar des dels dominis fins al desplegament full-stack i el manteniment continu.',
        ],
      },
    },
  },
  skills: {
    ...es.skills,
    eyebrow: '03 · Habilitats',
    title: 'Un conjunt d’eines orientat a la fiabilitat backend i les dades.',
    description: 'Experiència pràctica amb totes en entorns de producció. Sempre aprenent la següent.',
    data: {
      backend: 'Backend i arquitectura',
      data: 'Big Data i observabilitat',
      databases: 'Bases de dades',
      devops: 'DevOps i cloud',
      other: 'Eines i altres',
    },
  },
  languages: {
    ...es.languages,
    eyebrow: '04 · Idiomes',
    title: 'Comunicació entre equips i fronteres.',
    data: {
      Spanish: { language: 'Espanyol', fluency: 'Natiu' },
      Catalan: { language: 'Català', fluency: 'Natiu' },
      English: { language: 'Anglès', fluency: 'Domini professional complet' },
    },
  },
  contact: {
    eyebrow: '05 · Contacte',
    title: 'Construïm alguna cosa fiable plegats.',
    description:
      'Disponible per a llocs backend sènior, lideratge tècnic i col·laboracions freelance. Treball remot sense problema.',
    bestWay: 'La millor manera de contactar-me',
    message:
      'Estaré encantat de llegir-te: escriu-me sobre un lloc, un projecte o simplement per saludar. Gràcies per passar-te.',
    sendEmail: 'Envia’m un correu',
  },
  terminal: {
    eyebrow: '06 · Terminal',
    title: 'Ens veiem a la shell.',
    description:
      'Prefereixes la CLI a un formulari? Copia l’ordre, enganxa-la al terminal i entra en una sessió interactiva: backends parlant amb backends.',
    runInTerminal: 'Executar {command} al teu terminal',
    copyCommand: 'Copiar ordre SSH',
    copied: 'Copiat',
    copy: 'Copiar',
  },
  source: {
    eyebrow: '07 · Codi font',
    title: 'Aquest lloc ve amb el codi font.',
    description:
      'El portfolio és públic. Inspecciona l’stack, l’estructura i com encaixen les peces; fes-ne un fork si et resulta útil.',
    viewOnGithub: 'Veure a GitHub',
  },
  header: { primary: 'Principal' },
  footer: {
    navigate: 'Navegar',
    contact: 'Contacte',
    openSourceGithub: 'Codi obert · GitHub',
    allRightsReserved: 'Tots els drets reservats.',
    openSourcePortfolio: 'Portfolio de codi obert.',
  },
  aria: {
    language: 'Idioma',
    languages: 'Idiomes',
    emailCopied: 'Correu copiat',
    copyEmail: 'Copiar l’adreça de correu',
    copied: 'Copiat!',
  },
};

const en: Dictionary = {
  ...es,
  metadata: {
    title: 'Pablo Vallejo | Portfolio',
    description: 'Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data.',
  },
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ],
  profile: {
    ...es.profile,
    headline: 'Senior Backend Engineer — Node.js · TypeScript · Big Data',
    shortHeadline: 'Senior Backend Engineer',
    status: 'Open to permanent and freelance opportunities',
    summary: [
      'Spanish Senior Backend Engineer with 8+ years of experience designing high-performance microservices and monoliths backed by real-time Big Data pipelines.',
      'Expert in Node.js and TypeScript, with proven impact in high-throughput environments serving more than 10 million users. Comfortable owning systems end-to-end, from architecture and observability to production rollout.',
      'EU citizen. Available for permanent positions and freelance engagements worldwide.',
    ],
    highlights: [
      { label: 'Backend engineering' },
      { label: 'Users served in production' },
      { label: 'SLA on critical services' },
      { label: 'Languages spoken' },
    ],
    social: {
      ...es.profile.social,
      email: 'Email',
      phone: 'Phone',
      passport: 'Status',
      location: 'Location',
      website: 'Website',
    },
    socialValues: { passport: 'Spanish · EU Citizen' },
  },
  hero: {
    title: 'Pablo Vallejo, your trusted developer',
    subtitle: 'Open Source projects and solutions for businesses',
    projectsLabel: 'Featured projects',
    visitProject: 'View project',
    projects: {
      deepfriend: { description: 'AI emotional companion for anxiety, stress, and insomnia.' },
      puente: { description: 'Real-time voice translator that works offline and is open source.' },
    },
    getInTouch: 'Get in touch',
  },
  deepfriend: {
    title: 'Emotional support, thoughtfully designed.',
    description:
      'Deepfriend is an AI-powered emotional support app. Blue lets people talk by chat or voice, explore content, and practise mindfulness. The product describes its guidance as grounded in cognitive behavioral therapy (CBT).',
    disclaimer: 'It does not replace therapy or care from health professionals.',
    visit: 'Discover Deepfriend',
    opensInNewTab: '(opens in a new tab)',
    imageAlt: 'Official Deepfriend artwork in its teal visual identity',
  },
  puente: {
    title: 'Understand each other, even offline.',
    description:
      'Puente is an Android app for real-time voice translation. It uses AI and processes translations on the phone itself. After downloading language models over an internet connection, it can translate offline.',
    status: 'Free and open source. It is still in development, and its Google Play release is pending.',
    visit: 'Discover Puente',
    opensInNewTab: '(opens in a new tab)',
    imageAlt: 'Illustration of a stone bridge between mountains and a river, inspired by Asturias',
  },
  about: {
    eyebrow: '01 · About',
    title: 'Senior Backend Engineer focused on scale, latency and clarity.',
    glance: 'At a glance',
    facts: { role: 'Role', stack: 'Stack', citizenship: 'Citizenship', availability: 'Availability' },
  },
  experience: {
    ...es.experience,
    eyebrow: '02 · Experience',
    title: 'Where I’ve shipped production systems.',
    description:
      'A selection of roles where I owned and contributed to backend architectures, data pipelines and reliability.',
    active: 'Active',
    data: {
      deepfriend: {
        ...es.experience.data.deepfriend,
        role: 'Founder & CTO',
        location: 'Delaware, US · Remote',
        start: 'Apr 2024',
        end: 'Present',
        description:
          'Founded a science-first AI mental health platform grounded in Cognitive Behavioral Therapy (CBT), owning the product end-to-end from architecture to public launch.',
        bullets: [
          'Designed and deployed a scalable backend powering real-time AI-driven conversations with LLMs, including an advanced memory system and voice chat under a 1s SLA.',
          'Architected a sustainable Big Data system on Google Cloud Platform (GCP) to handle sensitive user data with high availability and compliance.',
          'Launched on the Google Play Store, reaching 1k+ downloads with a 30% 7-day retention rate through continuous data-driven iteration.',
          'Incorporated the company in Delaware and led legal, privacy and data-handling compliance from day one.',
        ],
      },
      rrverse: {
        ...es.experience.data.rrverse,
        role: 'Senior Backend Developer',
        location: 'Madrid, Spain',
        start: 'Nov 2022',
        end: 'Dec 2025',
        description:
          'Telecommunications client serving 10M+ subscribers. Owned the core network anomaly detection backend and the real-time Big Data pipeline behind it.',
        bullets: [
          'Engineered the core network anomaly detection backend for a 10M+ client telecommunications network.',
          'Optimized critical microservices under a 300ms SLA, delivering an estimated 60% reduction in average response time.',
          'Architected and implemented a real-time Big Data pipeline processing millions of network events daily, integrating Elastic Machine Learning for predictive anomaly detection.',
          'Redesigned complex queries in ClickHouse, BigQuery and MariaDB, cutting data retrieval latency by 30% and ensuring stability during national peak traffic.',
          'Deployed and operated containerized services on Kubernetes (Rancher / OpenShift), guaranteeing high availability for mission-critical services.',
          'Built a real-time client status backend that drastically reduced incident resolution time for the customer support department.',
        ],
      },
      aszendit: {
        ...es.experience.data.aszendit,
        role: 'Backend Developer',
        location: 'Madrid, Spain',
        start: 'Sep 2021',
        end: 'Nov 2022',
        description:
          'Renewable energy consultancy. Built the backend powering real-time solar generation analytics for a client-facing mobile application.',
        bullets: [
          'Designed and implemented a backend system to process real-time solar panel generation data.',
          'Created high-performance microservices to serve generation metrics to the client-facing application.',
          'Contributed to the mobile app interface (Expo / React Native) and ensured seamless backend integration.',
          'Stepped up to lead the app’s final development phase, working in fast-paced 1-week SCRUM cycles.',
        ],
      },
      freelance: {
        ...es.experience.data.freelance,
        role: 'Web Developer',
        location: 'Barcelona, Spain',
        start: 'Mar 2018',
        end: 'Nov 2022',
        description: 'Independent full-stack work for small and mid-sized businesses across retail and services.',
        bullets: [
          'Designed digital presence and SEO strategies for 10+ SMEs in retail and service sectors.',
          'Handled everything from domain management to full-stack deployment and ongoing maintenance.',
        ],
      },
    },
  },
  skills: {
    eyebrow: '03 · Skills',
    title: 'A toolkit built around backend reliability and data.',
    description: 'Hands-on with each of these in production environments. Always learning the next one.',
    data: {
      backend: 'Backend & Architecture',
      data: 'Big Data & Observability',
      databases: 'Databases',
      devops: 'DevOps & Cloud',
      other: 'Tooling & Other',
    },
  },
  languages: {
    eyebrow: '04 · Languages',
    title: 'Communicating across teams and borders.',
    data: {
      Spanish: { language: 'Spanish', fluency: 'Native' },
      Catalan: { language: 'Catalan', fluency: 'Native' },
      English: { language: 'English', fluency: 'Full Professional Proficiency' },
    },
  },
  contact: {
    eyebrow: '05 · Contact',
    title: 'Let’s build something reliable together.',
    description: 'Open to senior backend roles, technical leadership and freelance engagements. Remote-friendly.',
    bestWay: 'Best way to reach me',
    message:
      'Happy to hear from you — drop me a line about a role, a project, or just to say hi. Thanks for stopping by.',
    sendEmail: 'Send me an email',
  },
  terminal: {
    eyebrow: '06 · Terminal',
    title: 'Meet me in the shell.',
    description:
      'Prefer a CLI over a form? Copy the command, paste it in your terminal, and drop into an interactive session — backends talking to backends.',
    runInTerminal: 'Run {command} in your terminal',
    copyCommand: 'Copy SSH command',
    copied: 'Copied',
    copy: 'Copy',
  },
  source: {
    eyebrow: '07 · Source',
    title: 'This site ships with the source.',
    description:
      'The portfolio is public. Inspect the stack, the structure, and how the pieces fit — then fork it if it helps.',
    viewOnGithub: 'View on GitHub',
  },
  header: { primary: 'Primary' },
  footer: {
    navigate: 'Navigate',
    contact: 'Contact',
    openSourceGithub: 'Open source · GitHub',
    allRightsReserved: 'All rights reserved.',
    openSourcePortfolio: 'Open source portfolio.',
  },
  aria: {
    language: 'Language',
    languages: 'Languages',
    emailCopied: 'Email copied',
    copyEmail: 'Copy email address',
    copied: 'Copied!',
  },
};

export const copyCv: Record<Locale, Dictionary> = { es, ca, en };

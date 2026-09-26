import type { Dictionary } from '@/i18n/types';

export const es: Dictionary = {
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
    titleBefore: 'Backends preparados para',
    titleAccent: 'escalar',
    titleAfter: '.',
    introSuffix: 'Big Data en tiempo real.',
    getInTouch: 'Hablemos',
    viewExperience: 'Ver experiencia',
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

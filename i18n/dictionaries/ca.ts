import type { Dictionary } from '@/i18n/types';
import { es } from '@/i18n/dictionaries/es';

export const ca: Dictionary = {
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
    titleBefore: 'Backends preparats per',
    titleAccent: 'escalar',
    titleAfter: '.',
    introSuffix: 'Big Data en temps real.',
    getInTouch: 'Parlem',
    viewExperience: 'Veure experiència',
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

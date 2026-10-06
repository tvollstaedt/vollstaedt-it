import { Settings } from '@app/models/settings';
import { isDevMode } from '@angular/core';

const mailAddress = 'hallo@vollstaedt.it';
export const appSettings: Settings = {
  cookieConfig: {
    cookie: {
      domain: isDevMode() ? 'localhost' : 'vollstaedt.it',
    },
    position: 'bottom',
    theme: 'classic',
    palette: {
      popup: {
        background: '#000000',
        text: '#ffffff',
        link: '#ffffff',
      },
      button: {
        background: '#9C7ECE',
        text: '#ffffff',
        border: 'transparent',
      },
    },
    type: 'opt-in',
    content: {
      message:
        'Mit Ihrer Zustimmung nutzt diese Website PostHog, um zu verstehen, wie sie genutzt wird. Ohne Zustimmung wird nichts erfasst.',
      dismiss: 'Okay!',
      deny: 'Ablehnen',
      link: 'Mehr erfahren',
      href: 'https://vollstaedt.it/datenschutz',
      policy: 'Cookie Richtlinie',
      header: 'Cookies, die auf dieser Seite genutzt werden',
      allow: 'Akzeptieren',
    },
  },
  posthog: {
    apiKey: 'phc_3CVRKEZCNLpOsUUxkuNiYoOG4gfbTiGQ67tPcwgHIgG',
    config: {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'always',
      capture_pageview: false,
      opt_out_capturing_by_default: false,
    },
  },
  scrollDelay: 250,
  mailAddress,
  socialItems: [
    {
      icon: 'bi-github',
      alt: 'GitHub',
      target: 'https://github.com/tvollstaedt',
    },
    {
      icon: 'bi-gitlab',
      alt: 'GitLab',
      target: 'https://gitlab.com/tvollstaedt',
    },
    {
      icon: 'pluralsight',
      alt: 'Pluralsight',
      target: 'https://app.pluralsight.com/profile/tvollstaedt',
    },
    {
      icon: 'bi-linkedin',
      alt: 'LinkedIn',
      target: 'https://www.linkedin.com/in/tvollstaedt/',
    },
    {
      icon: 'xing',
      alt: 'Xing',
      target: 'https://www.xing.com/profile/Thomas_Vollstaedt2',
    },
  ],
  navItems: [
    {
      name: 'Über mich',
      route: '/',
    },
    {
      name: 'Leistungen',
      route: '/',
      fragment: 'services',
    },
    {
      name: 'Portfolio',
      route: '/portfolio',
    },
    {
      name: 'Lebenslauf',
      route: '/',
      fragment: 'resume',
    },
    {
      name: 'Kontakt',
      target: `mailto:${mailAddress}`,
    },
    /*{
      name: 'Blog',
      route: '/blog',
    },*/
  ],
  clients: [
    {
      image: '/images/clients/partner_8.webp',
      url: 'https://www.miele.de',
      alt: 'Miele & Cie. KG',
      class: 'max-h-8',
    },
    {
      image: '/images/clients/partner_7_bk.webp',
      url: 'https://ista.com',
      alt: 'Ista SE',
      class: 'max-h-8',
    },
    {
      image: '/images/clients/partner_2.webp',
      url: 'https://dbschenker.com',
      alt: 'Schenker Deutschland AG',
      class: 'max-h-8',
    },
    {
      image: '/images/clients/partner_1.webp',
      url: 'https://bayernwerk.de',
      alt: 'Bayernwerk AG',
    },
    {
      image: '/images/clients/partner_3.webp',
      url: 'https://www.laird.com',
      alt: 'Laird Technologies, Inc',
      class: 'max-h-8',
    },
    {
      image: '/images/clients/partner_4.webp',
      url: 'https://eon.com',
      alt: 'E.ON SE',
      class: 'max-h-7',
    },
    {
      image: '/images/clients/partner_6.webp',
      url: 'https://schaeffler.de',
      alt: 'Schaeffler Technologies AG & Co. KG',
      class: 'h-8',
    },
  ],
  reviews: [
    {
      text: 'Herr Vollstädt war eine tragende Kraft in einem unserer Digitaliserungsprojekte. Er war zuverlässig, sehr engagiert und service-orientiert. Er hat neben komplexen Frontend-Entwicklungen der Business-Anforderungen selbst Lösungsvorschläge eingebracht und uns in allen Prozessen mit starker User-Interaktion sehr gut beraten.',
      author: 'Martin W.',
      company: 'Head of global Digital Document Services - DB Schenker AG',
      avatar: '/images/avatars/avatar1.webp',
    },
    {
      text: 'Thomas denkt nicht nur technisch exzellent, sondern immer auch strategisch und nutzerzentriert. Bei Roadstory hat er komplexe Systeme aufgebaut und dabei Fokus, Tempo und Qualität kombiniert. Eine Zusammenarbeit auf Augenhöhe – fachlich wie menschlich.',
      company: 'Co-Founderin Roadstory & ehem. SAP Head of Service Sales',
      avatar: '/images/avatars/avatar2.webp',
      author: 'Melanie H.',
    },
    {
      text: 'Thomas war für unser Team weit mehr als ein Entwickler – er war Mentor, Visionär und technische Säule zugleich. Seine Innovationskraft, seine Klarheit in der Kommunikation und sein Verantwortungsbewusstsein haben unser Produkt und unsere Zusammenarbeit entscheidend geprägt. Wer mit ihm arbeiten darf, kann sich glücklich schätzen.',
      company: 'Product Owner - Ista SE',
      avatar: '/images/avatars/avatar3.webp',
      author: 'Viktoria L.',
    },
  ],
  skills: [
    { name: 'Angular', amount: 95 },
    { name: 'TypeScript', amount: 90 },
    { name: 'Kubernetes', amount: 85 },
    { name: 'Node.js / NestJS', amount: 80 },
    { name: 'AWS / Azure', amount: 75 },
    { name: 'Docker & Helm', amount: 80 },
    { name: 'Python (FastAPI)', amount: 80 },
    { name: 'Go', amount: 65 },
    { name: 'TailwindCSS / SCSS', amount: 85 },
    { name: 'CI/CD (GH, GL)', amount: 80 },
  ],
  resumeEntries: [
    {
      title: 'Senior Fullstack & Mobile Engineer',
      company: 'ista International GmbH',
      timeRange: 'April 2026 - Heute',
      logo: 'images/clients/partner_7_bk.webp',
      description:
        'Ursprünglich als Entwickler angefragt, habe ich zunächst den Use Case analysiert und einen anderen technologischen Ansatz empfohlen: eine native Mobile-App (React Native). Die Empfehlung wurde übernommen, seitdem verantworte ich Architektur und Umsetzung der App sowie begleitender Angular-Anwendungen im Geschäftskundenbereich. Daneben Mitarbeit im Spring-Backend und Verantwortung für Identity- und Zugriffsmanagement (Keycloak).',
      type: 'freelance',
    },
    {
      title: 'Lead Frontend & Mobile Engineer',
      company: 'Miele Operations & Payment Solutions GmbH',
      timeRange: '2025 – 2026',
      logo: 'images/clients/partner_8.webp',
      description:
        'Technische Konzeption und Umsetzung großskaliger Web- und Mobile-Anwendungen mit Angular 17+ und React Native. Architekturplanung einer komponentenbasierten Frontend-Landschaft mit Microfrontends. Entwicklung von AWS- und Terraform-Infrastruktur sowie Integration von embedded POS-Terminals unter speziellen Sicherheitsanforderungen.',
      type: 'freelance',
    },
    {
      title: 'Fullstack Frontend Engineer',
      company: 'ista International GmbH',
      timeRange: '2020 – 2025',
      logo: 'images/clients/partner_7_bk.webp',
      description:
        'Entwicklung und Architektur eines modularen Endkundenportals auf Basis von Angular (Version 8–19). Aufbau einer skalierbaren Plattform mit SCS-Architektur, Kubernetes, DevOps und Event-getriebener CQRS-Architektur.',
      type: 'freelance',
    },
    {
      title: 'Co-Founder & CTO',
      type: 'startup',
      company: 'Roadstory-Audio',
      timeRange: 'Juli 2025 - Heute',
      description:
        'Mitgründer eines App-Startups im Bereich Tourismus & Audioguides. Technische Verantwortung für Konzeption, Architektur und Umsetzung des gesamten Systems – von der React Native App über das Angular-basierte Verwaltungstool bis zur Cloud-Infrastruktur. Aufbau eines skalierbaren Backends mit Supabase, NestJS, FastAPI und Kubernetes sowie automatisierten CI/CD-Prozessen.',
    },
    {
      title: 'Senior Frontend Developer',
      company: 'DB Schenker AG',
      timeRange: '2018 – 2019',
      logo: 'images/clients/partner_2.webp',
      description:
        'Aufbau einer neuen Microservice-basierten Plattform für den europäischen Landverkehr. Umsetzung moderner Angular-Frontends, Cloud-Migration (AWS), Kubernetes-Cluster und API-Entwicklung.',
      type: 'freelance',
    },
    {
      title: 'Head of Software Development',
      company: 'OFIGO GmbH & Co. KG',
      timeRange: '2013 – 2019',
      description:
        'Leitung der Softwareentwicklung, Einführung agiler Methoden (Scrum/Kanban), Architektur von Webportalen und mobilen Anwendungen. Aufbau eines DevOps-Ansatzes inklusive CI/CD und Containerisierung.',
      type: 'employment',
    },
    {
      title: 'DevOps Engineer',
      company: 'Laird Technologies Inc.',
      timeRange: '2017 – 2018',
      logo: 'images/clients/partner_3.webp',
      description:
        'Integration neuer DevOps-Tools und Aufbau von CI/CD-Prozessen nach Unternehmensübernahme. Optimierung bestehender Cloud- und Deployment-Infrastrukturen.',
      type: 'freelance',
    },
  ],
  certificates: [
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Linux Foundation',
      logo: 'images/logos/cka.webp',
      link: 'certs/thomas-vollstdt-892d6e1f-92ed-436b-aed2-5771b34d69d3-certificate.pdf',
    },
    {
      title: 'Certified Senior Angular Developer',
      issuer: 'Certificates.dev & Angular Training',
      logo: 'images/logos/senior_angular_developer.webp',
      link: 'https://certificates.dev/c/c6910cc7-b9b8-40df-809b-d44422d0aeba',
    },
    {
      title: 'LSF161: Introduction to DevOps',
      issuer: 'Linux Foundation',
      logo: 'images/logos/linux-foundation.svg',
      link: 'certs/lsf161.png',
    },
    {
      title: 'Professional Scrum Developer 1',
      issuer: 'Scrum.org',
      logo: 'images/logos/psd1.svg',
      link: 'https://www.scrum.org/user/99432',
    },
  ],
  slideTexts: [
    'TypeScript',
    'Angular',
    'NestJS',
    'Kubernetes',
    'Java',
    'Tailwind',
    'Python',
    'Azure',
    'Supabase',
    'Spring Boot',
    'FastAPI',
    'AWS',
    'GitLab CI',
  ],
};

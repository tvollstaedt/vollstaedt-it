import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(
        (c) => c.PortfolioComponent,
      ),
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () =>
      import('./pages/portfolio/project/project.component').then(
        (c) => c.ProjectComponent,
      ),
  },
  /*{
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((c) => c.BlogComponent),
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./pages/blog/post/post.component').then((c) => c.PostComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent,
      ),
  },*/
  {
    path: 'angular',
    loadComponent: () =>
      import('./pages/angular/angular.component').then(
        (c) => c.AngularComponent,
      ),
  },
  {
    path: 'shopware-migration',
    loadComponent: () =>
      import('./pages/shopware-migration/shopware-migration.component').then(
        (c) => c.ShopwareMigrationComponent,
      ),
  },
  {
    path: 'impressum',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/markdown-page/markdown-page.component').then(
        (c) => c.MarkdownPageComponent,
      ),
    data: {
      title: 'Impressum',
      description:
        'Rechtliche Informationen zur Portfolio-Homepage von Vollstädt IT Solutions',
      file: 'legal-notice.md',
    },
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./pages/markdown-page/markdown-page.component').then(
        (c) => c.MarkdownPageComponent,
      ),
    data: {
      title: 'Datenschutz',
      description:
        'Datenschutz-Informationen zur Portfolio-Homepage von Vollstädt IT Solutions',
      file: 'data-protection.md',
    },
  },
  {
    path: 'agb',
    loadComponent: () =>
      import('./pages/markdown-page/markdown-page.component').then(
        (c) => c.MarkdownPageComponent,
      ),
    data: {
      title: 'AGB',
      description:
        'Allgemeine Geschäftsbedingungen von Vollstädt IT Solutions für Code-Check, Migration, Pflege und Leistungen nach Aufwand',
      file: 'terms.md',
    },
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/markdown-page/markdown-page.component').then(
        (c) => c.MarkdownPageComponent,
      ),
    data: {
      title: 'Support',
      description:
        'Support und Kontakt zu Vollstädt IT Solutions: Fragen zu Aufträgen, Rechnungen und Zahlungen',
      file: 'support.md',
    },
  },
  { path: '**', redirectTo: '' },
];

import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { capture, startAnalytics } from '@app/services/analytics';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { SeoService } from '@app/services/seo.service';
import { getBriefCode } from '@app/services/brief-code';
import { appSettings } from '@app/app.settings';

const REFERENCE_CLIENTS = [
  'Miele & Cie. KG',
  'Ista SE',
  'Schenker Deutschland AG',
  'E.ON SE',
  'Schaeffler Technologies AG & Co. KG',
  'Bayernwerk AG',
];

@Component({
  selector: 'app-angular',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    NgClass,
    RouterLink,
  ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {
  protected readonly mailAddress = appSettings.mailAddress;
  protected readonly mailtoLink = `mailto:${appSettings.mailAddress}?subject=${encodeURIComponent('Angular Kurz-Check')}`;
  protected readonly bookingLink = 'https://cal.com/tvollstaedt/angular';
  protected readonly codeCheckOrderLink =
    'https://buy.stripe.com/aFa4gA004fvq3eI2lI0000c';
  protected readonly codeCheckInvoiceLink = `mailto:${appSettings.mailAddress}?subject=${encodeURIComponent('Code-Check auf Rechnung bestellen')}&body=${encodeURIComponent('Firma:\nAnsprechpartner:\nRechnungsadresse:\nUSt-IdNr.:\nAnwendung (Adresse oder kurze Beschreibung):\n')}`;

  protected readonly tiers = [
    { name: 'S', versions: 'Angular 19 bis 21', price: '7.900 €' },
    { name: 'M', versions: 'Angular 17 und 18', price: '14.900 €' },
    { name: 'L', versions: 'Angular 14 bis 16', price: '24.900 €' },
    {
      name: 'Älter',
      versions: 'Angular 13 und älter, AngularJS',
      price: 'auf Anfrage',
    },
  ];

  protected readonly versions = [14, 15, 16, 17, 18, 19, 20, 21, 22];
  protected readonly heroTests = Array.from({ length: 12 }, (_, i) => i);
  protected readonly reportTests = Array.from({ length: 24 }, (_, i) => i);

  // Eigene Messung 09/2026, siehe akquise/work/angular-messung.
  protected readonly stats = [
    {
      value: 8094,
      suffix: '',
      display: '8.094',
      label: 'Kundenportale im deutschsprachigen Raum habe ich geprüft.',
    },
    {
      value: 59,
      suffix: ' %',
      display: '59 %',
      label: 'der Angular-Portale bekommen keine Sicherheitsupdates mehr.',
    },
    {
      value: 30,
      suffix: ' %',
      display: '30 %',
      label: 'sind schon seit über zwei Jahren ohne Support.',
    },
  ];

  protected readonly risks = [
    {
      icon: 'bi-code-slash',
      text: 'Fremder Code kann im Portal laufen und Sitzungen Ihrer Kunden übernehmen.',
    },
    {
      icon: 'bi-key',
      text: 'Zugangsdaten und Kundendaten können abfließen.',
    },
    {
      icon: 'bi-shield-exclamation',
      text: 'Nach einem Vorfall müssen Sie erklären, warum bekannte Lücken offen waren.',
    },
  ];

  // GitHub-Advisories zu @angular/* seit 01.01.2026, Stand 04.10.2026. Angular 19 bekam bis
  // Anfang Juni noch Patches nach dem LTS-Ende, daher „18 und älter“ bei der Null.
  protected readonly advisoryCount = 32;
  protected readonly advisoryHighCount = 24;
  protected readonly patchedVersions = [22, 21, 20];
  protected readonly advisories = [
    {
      id: 'CVE-2026-88057',
      date: 'August 2026',
      high: false,
      title: 'Der Schutz vor eingeschleustem Code lässt sich umgehen',
    },
    {
      id: 'CVE-2026-69151',
      date: 'Juli 2026',
      high: true,
      title: 'Manipulierte Übersetzungen können Schadcode einschleusen',
    },
    {
      id: 'CVE-2026-54264',
      date: 'Juni 2026',
      high: true,
      title: 'Zugangsdaten können an fremde Server gehen',
    },
  ];

  protected readonly steps = [
    {
      title: 'Kurz-Check',
      meta: 'kostenlos',
      text: 'Von außen oder gemeinsam am Bildschirm.',
    },
    {
      title: 'Code-Check',
      meta: '990 €, wird angerechnet',
      text: 'Danach steht der Festpreis in aller Regel fest.',
    },
    {
      title: 'Migration',
      meta: 'Festpreis',
      text: 'Version für Version, mit Tests abgesichert.',
    },
    { title: 'Pflege', meta: 'auf Wunsch', text: 'Damit es aktuell bleibt.' },
  ];

  protected readonly report = [
    {
      label: 'JavaScript',
      before: '4,2 MB',
      after: '3,1 MB',
      width: 74,
    },
    { label: 'Ladezeit', before: '2,8 s', after: '2,0 s', width: 71 },
  ];

  protected readonly deliverables = [
    'Automatisierte Tests, die im Projekt bleiben',
    'Bericht mit Zahlen vor und nach der Umstellung',
    'Aktuelles Architekturdiagramm',
    'Fahrplan für die nächsten Versionen',
  ];

  protected readonly clients = appSettings.clients.filter((c) =>
    REFERENCE_CLIENTS.includes(c.alt),
  );

  protected replayKey = 0;

  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private seoService = inject(SeoService);
  private ccService = inject(NgcCookieConsentService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private code = this.isBrowser ? getBriefCode() : null;
  private visitTracked = false;

  public constructor() {
    this.seoService.updateMeta({
      title:
        'Ihr Portal läuft. Der Support ist ausgelaufen. | Vollstädt IT Solutions',
      plainTitle: true,
      description:
        'Angular-Anwendungen zurück auf eine unterstützte Version, ohne eigenes Angular-Team: kostenloser Kurz-Check, Migration zum Festpreis mit Abnahme über automatisierte Tests, danach Pflege auf Wunsch.',
      url: 'https://vollstaedt.it/angular',
      keywords: [
        'angular migration',
        'angular update',
        'angularjs ablösen',
        'angular festpreis',
      ],
    });

    afterNextRender(() => this.setupScrollAnimations());

    if (this.code) {
      this.trackVisit();
      // Banner is usually answered after the page has loaded.
      this.ccService.statusChange$
        .pipe(takeUntilDestroyed())
        .subscribe(({ status }) => {
          if (status === 'allow') {
            startAnalytics(true);
            this.trackVisit();
          }
        });
    }
  }

  protected replayHero(): void {
    // Neuer Schlüssel = neues DOM im @for-Block = CSS-Animation startet von vorn.
    this.replayKey++;
  }

  // routerLink+fragment scrollt über den ViewportScroller, der scroll-margin ignoriert:
  // Die Überschrift landete unter dem Sticky-Header.
  protected scrollToSection(event: Event, id: string): void {
    const target = this.host.nativeElement.querySelector<HTMLElement>(`#${id}`);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected trackOrderClick(via: 'stripe' | 'rechnung'): void {
    this.capture('angular_code_check', {
      via,
      ...(this.code ? { code: this.code } : {}),
    });
  }

  protected trackCtaClick(): void {
    this.capture('angular_cta', this.code ? { code: this.code } : {});
  }

  /**
   * Ohne JavaScript bzw. mit reduzierter Bewegung bleibt alles im Endzustand sichtbar;
   * erst `anim-ready` blendet Elemente aus, die beim Scrollen einfliegen.
   */
  private setupScrollAnimations(): void {
    const root = this.host.nativeElement;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return;
    }
    root.classList.add('anim-ready');
    const counters = root.querySelectorAll<HTMLElement>('[data-count]');
    counters.forEach((el) => (el.textContent = this.formatCount(0, el)));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          const el = entry.target as HTMLElement;
          el.classList.add('in-view');
          if (el.dataset['count']) {
            this.countUp(el);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    root
      .querySelectorAll('[data-reveal], [data-count], [data-anim]')
      .forEach((el) => observer.observe(el));
  }

  private countUp(el: HTMLElement): void {
    const target = Number(el.dataset['count']);
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = this.formatCount(Math.round(target * eased), el);
      if (t < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }

  private formatCount(value: number, el: HTMLElement): string {
    return value.toLocaleString('de-DE') + (el.dataset['suffix'] ?? '');
  }

  private trackVisit(): void {
    if (this.visitTracked || !this.code) {
      return;
    }
    this.visitTracked = this.capture('angular_besuch', { code: this.code });
  }

  private capture(event: string, properties: Record<string, string>): boolean {
    if (!this.isBrowser || !this.hasConsent()) {
      return false;
    }
    capture(event, properties);
    return true;
  }

  private hasConsent(): boolean {
    try {
      return this.ccService.hasConsented();
    } catch {
      return false;
    }
  }
}

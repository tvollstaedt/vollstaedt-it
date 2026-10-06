import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { SeoService } from '@app/services/seo.service';
import { appSettings } from '@app/app.settings';

const FAQ_JSONLD_ID = 'shopware-migration-faq-jsonld';

@Component({
  selector: 'app-shopware-migration',
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './shopware-migration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopwareMigrationComponent {
  protected readonly mailtoLink = `mailto:${appSettings.mailAddress}?subject=${encodeURIComponent('Shopware-Erstanalyse')}`;

  protected readonly faqs = [
    {
      question: 'Wie lange dauert die Migration?',
      answer:
        'Das hängt vom Umfang ab: Ein Shop mit Standard-Plugins ist meist in wenigen Wochen migriert, komplexe Shops mit vielen individuellen Anpassungen brauchen mehrere Monate. Nach der Erstanalyse erhalten Sie eine verlässliche Zeitplanung, jeder Meilenstein bekommt einen Termin.',
    },
    {
      question: 'Bleibt mein Shop während der Migration online?',
      answer:
        'Ja. Shopware 6 wird parallel aufgebaut, Ihr bestehender Shop läuft bis zum Go-Live normal weiter. Der Umstieg selbst findet zu einem verkaufsschwachen Zeitpunkt statt und dauert nur kurz.',
    },
    {
      question: 'Was passiert mit meinen Plugins?',
      answer:
        'In der Analyse prüfe ich jedes Plugin einzeln: Viele haben einen Nachfolger für Shopware 6, für andere gibt es gepflegte Alternativen, manche Funktionen deckt Shopware 6 inzwischen von Haus aus ab. Individuelle Entwicklungen werden neu umgesetzt.',
    },
    {
      question: 'Was passiert mit meinen Einkaufswelten?',
      answer:
        'Einkaufswelten gibt es in Shopware 6 nicht mehr, ihre Aufgabe übernehmen die Erlebniswelten. Bestehende Seiten lassen sich nicht automatisch übernehmen, sondern werden gezielt neu aufgebaut. In der Erstanalyse erfasse ich alle Einkaufswelten Ihres Shops und plane den Neuaufbau als festen Bestandteil der Migration ein, damit keine Inhalte verloren gehen.',
    },
    {
      question: 'Was passiert mit meinen Daten?',
      answer:
        'Produkte, Kunden, Bestellungen und Kategorien werden übernommen und vor dem Go-Live in einer Testmigration geprüft. Ihr altes System bleibt unverändert bestehen, bis der neue Shop nachweislich funktioniert.',
    },
    {
      question: 'Warum Festpreis statt Stundensatz?',
      answer:
        'Weil Sie kalkulieren müssen. Beim Festpreis liegt das Risiko der Aufwandsschätzung bei mir, nicht bei Ihnen. Nach der Erstanalyse steht für jeden Meilenstein fest, was er umfasst und was er kostet.',
    },
  ];

  private seoService = inject(SeoService);
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);

  public constructor() {
    this.seoService.updateMeta({
      title: 'Shopware 5 zu 6 Migration zum Festpreis | Vollstädt IT Solutions',
      plainTitle: true,
      description:
        'Shopware 5 ist End of Life und erhält keine Sicherheitsupdates mehr. Migration zu Shopware 6 zum Festpreis pro Meilenstein: fester Umfang, fester Preis, kostenlose Erstanalyse.',
      url: 'https://vollstaedt.it/shopware-migration',
      image: 'https://vollstaedt.it/images/og/shopware-migration.png',
      keywords: [
        'shopware 5 end of life',
        'shopware 5 zu 6 migration',
        'shopware migration festpreis',
        'shopware 6 umstieg',
      ],
    });
    this.injectFaqJsonLd();
  }

  private injectFaqJsonLd(): void {
    this.destroyRef.onDestroy(() => {
      this.document.getElementById(FAQ_JSONLD_ID)?.remove();
    });
    // Bei Hydration existiert das prerenderte Script bereits im Head
    if (this.document.getElementById(FAQ_JSONLD_ID)) {
      return;
    }
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    };
    const script = this.document.createElement('script');
    script.id = FAQ_JSONLD_ID;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}

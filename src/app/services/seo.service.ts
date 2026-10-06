import { Meta, Title } from '@angular/platform-browser';
import { inject, Injectable } from '@angular/core';

interface SeoMetaOptions {
  title: string;
  plainTitle?: boolean; // true: Titel ohne "| Vollstädt IT Solutions"-Suffix verwenden
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[]; // optional – wird automatisch ergänzt, wenn nicht gesetzt
  technologies?: { name: string }[]; // z. B. aus project.technologies
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  public updateMeta(opts: Partial<SeoMetaOptions> = {}) {
    const fullTitle = opts.title
      ? opts.plainTitle
        ? opts.title
        : `${opts.title} | Vollstädt IT Solutions`
      : 'Vollstädt IT Solutions: Digitale Produkte von der Architektur bis zum Launch';

    const description =
      opts.description ||
      'Technischer Kopf für Gründer, Mittelständler und geförderte Teams: digitale Produkte von der Architekturentscheidung bis zum Launch, zum Festpreis pro Meilenstein.';
    const image = opts.image || 'https://vollstaedt.it/images/og/home.png';

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    if (opts.url) {
      this.meta.updateTag({ property: 'og:url', content: opts.url });
    }

    const keywords = opts.keywords?.length
      ? opts.keywords
      : (opts.technologies?.map((t) => t.name.toLowerCase()) ?? []);

    if (keywords.length > 0) {
      this.meta.updateTag({ name: 'keywords', content: keywords.join(', ') });
    }
  }
}

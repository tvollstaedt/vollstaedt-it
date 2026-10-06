import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { ThemeSwitchComponent } from '@app/components/theme-switch/theme-switch.component';
import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [RouterLink, ThemeSwitchComponent, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  /** Reduzierte Nav (nur Logo + Kontakt + Theme-Toggle) für Landingpages. */
  public readonly minimal = input(false);

  protected readonly additionalMenuOpen = signal(false);
  protected readonly navOpen = signal(false);
  protected readonly navItems = appSettings.navItems;
  protected readonly socialItems = appSettings.socialItems;
  protected readonly appSettings = appSettings;

  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  // No-JS-Fallback: Kontaktabschnitt der aktuellen Landingpage, nicht einer festen Seite.
  protected contactHref(): string {
    return `${this.router.url.split(/[?#]/)[0]}#kontakt`;
  }

  /**
   * Scrollt zum Zielabschnitt auf derselben Seite. Nötig, weil eine reine
   * Fragment-Navigation auf die aktive Route kein Re-Rendering auslöst und der
   * globale Fragment-Scroll daher nicht greift. Der href bleibt als No-JS-
   * Fallback erhalten.
   */
  protected scrollToAnchor(event: Event, id: string): void {
    const target = this.document.getElementById(id);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.navOpen.set(false);
  }
}

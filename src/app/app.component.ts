import {
  afterRenderEffect,
  Component,
  effect,
  inject,
  PLATFORM_ID,
  DOCUMENT,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { GradientCursorComponent } from './components/gradient-cursor/gradient-cursor.component';
import { register } from 'swiper/element/bundle';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '@app/services/seo.service';
import { filter } from 'rxjs';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import {
  capture,
  startAnalytics,
  stopAnalytics,
} from '@app/services/analytics';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GradientCursorComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);
  private viewportScroller = inject(ViewportScroller);
  private seoService = inject(SeoService);
  private router = inject(Router);
  private ccService = inject(NgcCookieConsentService);

  private cursor!: Element | null;
  private fragment = toSignal(this.route.fragment);
  private navigationEnd = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
  );
  private cookieConsentChanged = toSignal(this.ccService.statusChange$);

  public coords: { x: number; y: number } = { x: 0, y: 0 };

  public constructor() {
    // Initialize Meta tags
    this.seoService.updateMeta({});

    afterRenderEffect(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.document.body.classList.add('loaded');
        this.cursor = this.document.querySelector('.cursor-gradient');

        // Load swiper
        register();

        // Scroll to fragment or up
        const fragment = this.fragment();
        setTimeout(() => {
          if (fragment) {
            this.viewportScroller.scrollToAnchor(fragment);
          } else {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }, 200);
      }
    });

    // Analytics läuft erst nach Einwilligung; die Wahl liegt im Consent-Cookie
    // und wird bei jedem Laden neu angewendet.
    if (isPlatformBrowser(this.platformId) && this.hasConsent()) {
      startAnalytics(false);
    }
    effect(() => {
      const status = this.cookieConsentChanged()?.status;
      if (status === 'allow') {
        startAnalytics(true);
      } else if (status === 'deny') {
        stopAnalytics();
      }
    });

    // Track router changes
    effect(() => {
      if (this.navigationEnd()) {
        capture('$pageview');
      }
    });
  }

  private hasConsent(): boolean {
    try {
      return this.ccService.hasConsented();
    } catch {
      return false;
    }
  }
}

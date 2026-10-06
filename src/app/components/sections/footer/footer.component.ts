import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected currentYear = signal(new Date().getFullYear()).asReadonly();
  private viewportScroller = inject(ViewportScroller);
  private ccService = inject(NgcCookieConsentService);

  public scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  public openConsent(event: MouseEvent) {
    event.preventDefault();
    this.ccService.open();
  }
}

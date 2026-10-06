import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavComponent } from '@app/components/sections/nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /** Reduzierte Navigation (nur Logo + Kontakt + Theme-Toggle). */
  public readonly minimal = input(false);
}

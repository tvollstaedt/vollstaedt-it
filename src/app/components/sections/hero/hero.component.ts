import { ChangeDetectionStrategy, Component } from '@angular/core';
import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly socialItems = appSettings.socialItems;
}

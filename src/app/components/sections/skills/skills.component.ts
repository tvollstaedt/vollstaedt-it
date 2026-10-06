import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimatedProgressDirective } from '@app/directives/animated-progress.directive';

import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-skills',
  imports: [AnimatedProgressDirective],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    /* Progress bar */
    .animated-progress {
      div:after {
        content: attr(data-progress) '%';
      }

      div.progress-show:after {
        @apply opacity-100;
      }
    }
  `,
})
export class SkillsComponent {
  protected readonly skills = appSettings.skills;
}

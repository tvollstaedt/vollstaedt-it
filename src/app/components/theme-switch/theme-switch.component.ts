import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'app-theme-switch',
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThemeSwitchComponent {
  private themeService = inject(ThemeService);

  public theme = this.themeService.getTheme();

  public toggleTheme() {
    if (this.theme() === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}

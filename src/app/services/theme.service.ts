import {
  computed,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private theme = signal<ThemeMode>('auto');

  public constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
      if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
        this.theme.set(savedTheme);
      }

      effect(() => {
        const current = this.theme();
        localStorage.setItem('theme', current);
        this.updateBodyClass(this.getTheme()());
      });
    }
  }

  public setTheme(theme: ThemeMode) {
    this.theme.set(theme);
  }

  public getTheme() {
    return computed(() => {
      const theme = this.theme();
      if (theme === 'auto') {
        return this.getSystemTheme();
      }
      return theme;
    });
  }

  private updateBodyClass(theme: ThemeMode) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }

  private getSystemTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light';
  }
}

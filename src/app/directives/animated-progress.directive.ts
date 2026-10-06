import {
  afterRenderEffect,
  Directive,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[animatedProgress]',
  standalone: true,
})
export class AnimatedProgressDirective {
  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  public progress = input.required({ alias: 'animatedProgress' });

  private hasAnimated = false;

  public constructor() {
    if (isPlatformBrowser(this.platformId)) {
      afterRenderEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.animate();
              this.hasAnimated = true;
              observer.unobserve(this.el.nativeElement);
            }
          },
          { threshold: 0.1 },
        );

        observer.observe(this.el.nativeElement);
      });
    }
  }

  private animate() {
    const value = this.progress();
    if (value != null) {
      this.renderer.setStyle(this.el.nativeElement, 'width', value + '%');
      this.renderer.addClass(this.el.nativeElement, 'progress-show');
    }
  }
}

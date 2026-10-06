import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-sliding-text',
  templateUrl: './sliding-text.component.html',
  styles: `
    swiper-container::part(wrapper) {
      @apply ease-linear;
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidingTextComponent {
  public swiperContainer = viewChild('swiperContainer', { read: ElementRef });
  public slideTexts = signal(appSettings.slideTexts).asReadonly();

  public constructor() {
    afterRenderEffect(() => {
      const swiperElement = this.swiperContainer()?.nativeElement;
      if (swiperElement) {
        Object.assign(swiperElement, {
          slidesPerView: 'auto',
          spaceBetween: 70,
          speed: 20000,
          loop: true,
          allowTouchMove: false,
          autoplay: {
            delay: 0,
            clickable: false,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          },
        });
        swiperElement.initialize();
      }
    });
  }
}

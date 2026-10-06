import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser, NgClass, NgOptimizedImage } from '@angular/common';
import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, NgOptimizedImage],
})
export class ClientsComponent {
  private platformId = inject(PLATFORM_ID);

  public swiperContainer = viewChild('swiperContainer', { read: ElementRef });
  public clients = appSettings.clients;
  public reviews = appSettings.reviews;

  public constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const swiperElement = this.swiperContainer()?.nativeElement;
        if (swiperElement) {
          Object.assign(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
              delay: 7000,
            },
            pagination: {
              enabled: true,
              el: '.testimonial-pagination',
              clickable: true,
            },
          });
          swiperElement.initialize();
        }
      }
    });
  }
}

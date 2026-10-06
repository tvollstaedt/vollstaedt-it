import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { PortfolioService } from '@app/services/portfolio.service';
import { ProjectSummary } from '@app/models/project';
import { HttpResourceRef } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-highlights',
  templateUrl: './portfolio-highlights.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    swiper-container::part(container) {
      @apply overflow-visible;
    }
  `,
  imports: [NgOptimizedImage, RouterLink],
})
export class PortfolioHighlightsComponent {
  private platformId = inject(PLATFORM_ID);
  private portfolioService = inject(PortfolioService);
  private portfolio: HttpResourceRef<ProjectSummary[]> =
    this.portfolioService.projectSummaries;

  public swiperContainer = viewChild('swiperContainer', { read: ElementRef });
  public isFirstSlide = signal(true);
  public isLastSlide = signal(false);
  public highlightProjects = computed(() =>
    this.portfolio
      .value()
      .filter((p) => p.highlight)
      .sort((a, b) => (new Date(b.date) < new Date(a.date) ? -1 : 1)),
  );

  public constructor() {
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        const swiperElement = this.swiperContainer()?.nativeElement;
        if (swiperElement) {
          Object.assign(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: false,
            breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            },
            navigation: {
              nextEl: '.portfolio-next',
              prevEl: '.portfolio-prev',
            },
            on: {
              slideChange: () => {
                console.log(swiperElement.swiper);
                this.isFirstSlide.set(swiperElement.swiper.isBeginning);
                this.isLastSlide.set(swiperElement.swiper.isEnd);
              },
            },
          });
          swiperElement.initialize();
        }
      }
    });
  }
}

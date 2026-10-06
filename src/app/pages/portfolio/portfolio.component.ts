import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '@app/services/portfolio.service';
import { HttpResourceRef } from '@angular/common/http';
import { ProjectSummary } from '@app/models/project';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ProjectTypePipe } from '@app/pipes/project-type.pipe';

@Component({
  selector: 'app-portfolio',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    NgOptimizedImage,
    ProjectTypePipe,
  ],
  templateUrl: './portfolio.component.html',
  styles: `
    .text-shadow {
      text-shadow: 2px 2px rgba(71, 71, 71, 0.32);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  private platformId = inject(PLATFORM_ID);
  private portfolioService = inject(PortfolioService);
  private portfolio: HttpResourceRef<ProjectSummary[]> =
    this.portfolioService.projectSummaries;

  public sortedPortfolio = computed(() =>
    this.portfolio
      .value()
      .sort((a, b) => (new Date(b.date) < new Date(a.date) ? -1 : 1)),
  );
  public availableTypes = this.portfolioService.availableTypes;
  public portfolioGrid = viewChild('portfolioGrid', { read: ElementRef });

  public constructor() {
    afterRenderEffect(() => {
      if (isPlatformBrowser(this.platformId)) {
        // @ts-ignore
        import('mixitup').then((mixitup) => {
          mixitup.default(this.portfolioGrid()?.nativeElement, {
            selectors: {
              target: '.portfolio-item',
            },
            animation: {
              duration: 250,
            },
          });
        });
      }
    });
  }
}

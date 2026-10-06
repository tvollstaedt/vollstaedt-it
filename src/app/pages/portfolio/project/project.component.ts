import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '@app/services/portfolio.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpResourceRef } from '@angular/common/http';
import { Project } from '@app/models/project';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-project',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgxSkeletonLoaderComponent,
    MarkdownComponent,
    NgOptimizedImage,
  ],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideMarkdown()],
})
export class ProjectComponent {
  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);
  private seoService = inject(SeoService);

  private paramMap = toSignal(this.route.paramMap);
  private projectId = computed(() => {
    return this.paramMap()?.get('slug') || 'default';
  });

  public readonly project: HttpResourceRef<Project> =
    this.portfolioService.loadProject(this.projectId);
  public markdownParts = computed(() => {
    const desc = this.project.value()?.description || '';
    return desc.split('[[gallery]]');
  });

  public constructor() {
    effect(() => {
      const project = this.project.value();
      if (project) {
        this.seoService.updateMeta({
          title: project.title,
          description: project.subtitle,
          image: `https://vollstaedt.it/${project.coverImage}`,
          url: `https://vollstaedt.it/portfolio/${project.slug}`,
          technologies: project.technologies,
        });
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      import('glightbox').then((glightbox) => {
        glightbox.default({});
      });
    }
  }
}

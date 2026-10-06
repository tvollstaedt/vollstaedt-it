import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '@app/services/seo.service';

@Component({
  selector: 'app-markdown-page',
  imports: [MarkdownComponent, HeaderComponent, FooterComponent],
  templateUrl: `./markdown-page.component.html`,
  providers: [provideMarkdown()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownPageComponent {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private router = inject(Router);

  private routeData = toSignal(this.route.data);

  public filePath = computed(() => {
    const data = this.routeData();
    if (data) {
      return `content/${data['file']}`;
    }
    return null;
  });

  public constructor() {
    effect(() => {
      const data = this.routeData();
      if (data?.['title'] && data?.['description']) {
        this.seoService.updateMeta({
          title: data['title'],
          description: data['description'],
          url: `https://vollstaedt.it${this.router.url}`,
        });
      }
    });
  }
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '@app/services/seo.service';
import { AboutComponent } from '@app/components/sections/about/about.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { HeroComponent } from '@app/components/sections/hero/hero.component';
import { PortfolioHighlightsComponent } from '@app/components/sections/portfolio-highlights/portfolio-highlights.component';
import { ResumeComponent } from '@app/components/sections/resume/resume.component';
import { SlidingTextComponent } from '@app/components/sections/sliding-text/sliding-text.component';
import { ServicesComponent } from '@app/components/sections/services/services.component';
import { ClientsComponent } from '@app/components/sections/clients/clients.component';
import { appSettings } from '@app/app.settings';
import { ContactButtonComponent } from '@app/components/ui/contact-button/contact-button.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    PortfolioHighlightsComponent,
    ResumeComponent,
    SlidingTextComponent,
    ServicesComponent,
    ClientsComponent,
    ContactButtonComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly appSettings = appSettings;

  private seoService = inject(SeoService);

  public constructor() {
    // Setzt Titel, Beschreibung und og:url zurück, wenn client-seitig
    // von einer Unterseite zur Startseite navigiert wird
    this.seoService.updateMeta({ url: 'https://vollstaedt.it/' });
  }
}

import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  IsActiveMatchOptions,
  provideRouter,
  Router,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { appSettings } from '@app/app.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
      withViewTransitions({
        onViewTransitionCreated: (transitionInfo) => {
          const router = inject(Router);
          const targetUrl = router.getCurrentNavigation()!.finalUrl!;
          // Skip the transition if the only thing
          // changing is the fragment and queryParams
          const config: IsActiveMatchOptions = {
            paths: 'exact',
            matrixParams: 'exact',
            fragment: 'ignored',
            queryParams: 'ignored',
          };

          if (router.isActive(targetUrl, config)) {
            transitionInfo.transition.skipTransition();
          }
        },
      }),
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideNgcCookieConsent(appSettings.cookieConfig),
    importProvidersFrom([
      NgxSkeletonLoaderModule.forRoot({
        theme: {
          extendsFromRoot: true,
          height: '30px',
        },
      }),
    ]),
  ],
};

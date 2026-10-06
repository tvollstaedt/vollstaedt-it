import posthog from 'posthog-js';
import { appSettings } from '@app/app.settings';

let started = false;
let optedIn = false;

/**
 * PostHog is initialised only after consent (§ 25 TDDDG): even an idle init
 * fetches remote config and feature flags, which would transfer the IP address.
 */
export function startAnalytics(firstConsent: boolean): void {
  // Several listeners react to the same consent click; only the first one counts.
  if (optedIn) {
    return;
  }
  if (!started) {
    posthog.init(appSettings.posthog.apiKey, appSettings.posthog.config);
    if (['127.0.0.1', 'localhost'].includes(window.location.hostname)) {
      posthog.identify('dev_local', { name: 'Thomas Lokal' });
    }
    started = true;
  }
  posthog.opt_in_capturing({
    captureEventName: firstConsent ? '$opt_in' : false,
  });
  optedIn = true;
  // The page view before the consent click was never sent.
  if (firstConsent) {
    posthog.capture('$pageview');
  }
}

export function stopAnalytics(): void {
  if (!started) {
    return;
  }
  posthog.opt_out_capturing();
  posthog.reset();
  optedIn = false;
}

export function capture(
  event: string,
  properties: Record<string, string> = {},
): void {
  if (started && !posthog.has_opted_out_capturing()) {
    posthog.capture(event, properties);
  }
}

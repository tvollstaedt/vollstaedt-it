import { NavItem } from '@app/models/nav-item';
import { ResumeEntry } from '@app/models/resume-entry';
import { CertificateEntry } from '@app/models/certificate-entry';
import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { PostHogConfig } from 'posthog-js';

export type Settings = {
  scrollDelay: number;
  mailAddress: string;
  socialItems: any[];
  posthog: {
    apiKey: string;
    config: Partial<PostHogConfig>;
  };
  resumeEntries: ResumeEntry[];
  certificates: CertificateEntry[];
  navItems: NavItem[];
  skills: { name: string; amount: number }[];
  clients: {
    image: string;
    url: string;
    alt: string;
    class?: string;
  }[];
  reviews: {
    author: string;
    avatar?: string;
    text: string;
    company: string;
  }[];
  slideTexts: string[];
  cookieConfig: NgcCookieConsentConfig;
};

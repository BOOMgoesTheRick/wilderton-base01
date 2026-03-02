import type { Translations } from './types';
import { en } from './locales/en';
import { fr } from './locales/fr';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, Translations> = { en, fr };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en';
}

export function getLocaleName(locale: Locale): string {
  const names: Record<Locale, string> = {
    en: 'English',
    fr: 'Français',
  };
  return names[locale];
}

export function getOtherLocaleName(locale: Locale): string {
  return getLocaleName(getOtherLocale(locale));
}

export function getOtherLocaleLabel(locale: Locale): string {
  // Short label for the switcher button
  return locale === 'en' ? 'FR' : 'EN';
}

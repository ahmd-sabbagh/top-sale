import { getLocale } from 'next-intl/server';

type LocalizedField = {
  [lang: string]: string | undefined;
};

export function getLocalizedField(
  field?: LocalizedField,
  locale: string = 'en',
  fallbackLang = 'en'
): string {
  if (!field) return '';

  if (field[locale]) return field[locale]!;
  if (field[fallbackLang]) return field[fallbackLang]!;

  const firstAvailable = Object.values(field).find(Boolean);
  return firstAvailable || '';
}

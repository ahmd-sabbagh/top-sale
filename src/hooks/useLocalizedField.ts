import { useLocale } from 'next-intl';

type LocalizedField = {
  [lang: string]: string | undefined;
};

/**
 * هوك ذكي بيرجع أقرب ترجمة متاحة حسب اللغة الحالية أو fallback أو أي لغة موجودة.
 */
export function useLocalizedField(
  field?: LocalizedField,
  fallbackLang = 'en'
): string {
  const locale = useLocale();

  if (!field) return '';

  // 1. لو فيه ترجمة للغة الحالية
  if (field[locale]) return field[locale]!;

  // 2. fallbackLang (زي en أو ar)
  if (field[fallbackLang]) return field[fallbackLang]!;

  // 3. أي لغة موجودة في الأوبجكت (أول قيمة موجودة)
  const firstAvailable = Object.values(field).find(Boolean);
  return firstAvailable || '';
}

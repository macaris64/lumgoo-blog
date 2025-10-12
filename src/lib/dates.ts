export function formatDate(date: Date, locale: string = 'tr-TR'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date, locale: string = 'tr-TR'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function formatDateISO(date: Date): string {
  return date.toISOString().split('T')[0];
}

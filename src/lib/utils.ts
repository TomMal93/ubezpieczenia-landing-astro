export function stripHtml(html = ''): string {
  return html.replace(/<[^>]*>/g, ' ');
}

export function readingTimeFromHtml(html = ''): number {
  const text = stripHtml(html);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDatePL(date?: string | Date | null): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(d);
}

/** Prosty slug dla tagów (bez polskich znaków – wystarczające do URL) */
export function tagToSlug(tag: string): string {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tagHref(tag: string): string {
  return `/blog/tag/${encodeURIComponent(tagToSlug(tag))}`;
}

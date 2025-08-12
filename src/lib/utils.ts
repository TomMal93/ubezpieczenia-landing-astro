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

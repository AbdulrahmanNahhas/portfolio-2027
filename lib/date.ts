export function formatDisplayDate(date: string, options: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString("en-US", options);
}

export function formatMonthYear(date: string) {
  return formatDisplayDate(date, { month: "short", year: "numeric" });
}

export function formatLongDate(date: string) {
  return formatDisplayDate(date, { day: "numeric", month: "long", year: "numeric" });
}

export function formatShortDate(date: string) {
  return formatDisplayDate(date, { day: "numeric", month: "short", year: "numeric" });
}

export function calculateDuration(start: string, end?: string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months < 12) return `${Math.max(months, 0)} mo`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return remainingMonths === 0 ? `${years} yr` : `${years} yr ${remainingMonths} mo`;
}

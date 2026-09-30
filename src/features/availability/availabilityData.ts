export const MINIMUM_STAY_NIGHTS = 2;

const pad = (value: number) => String(value).padStart(2, '0');

export const toISODate = (date: Date): string => {
  const normalized = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return [normalized.getFullYear(), pad(normalized.getMonth() + 1), pad(normalized.getDate())].join('-');
};

export const addDays = (date: Date, amount: number): Date => {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
};

export const buildMockUnavailableDates = (baseDate: Date): string[] => {
  const unavailable = new Set<string>();
  const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate());

  [6, 9, 12, 18, 22, 27, 31, 35, 39, 45, 53, 59, 67, 72, 78, 84].forEach((offset) => {
    const date = addDays(start, offset);
    unavailable.add(toISODate(date));
  });

  [7, 8, 10, 11, 19, 20, 23, 24, 36, 37, 46, 47, 60, 61, 73, 74].forEach((offset) => {
    const date = addDays(start, offset);
    unavailable.add(toISODate(date));
    unavailable.add(toISODate(addDays(date, 1)));
  });

  return Array.from(unavailable).sort();
};

import { addDays, MINIMUM_STAY_NIGHTS, toISODate } from './availabilityData';

export const startOfDay = (date: Date): Date => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const isPastDate = (date: Date): boolean => startOfDay(date) < startOfDay(new Date());

export const isDateUnavailable = (date: Date, unavailableDates: string[]): boolean => {
  return isPastDate(date) || unavailableDates.includes(toISODate(date));
};

export const getDateDifferenceInNights = (checkIn: Date, checkOut: Date): number => {
  const msPerNight = 1000 * 60 * 60 * 24;
  return Math.round((startOfDay(checkOut).getTime() - startOfDay(checkIn).getTime()) / msPerNight);
};

export const getDateRange = (from: Date, to: Date): Date[] => {
  const range: Date[] = [];
  const start = startOfDay(from);
  const end = startOfDay(to);

  if (end < start) {
    return range;
  }

  let cursor = new Date(start);
  while (cursor <= end) {
    range.push(new Date(cursor));
    cursor = addDays(cursor, 1);
  }

  return range;
};

export const isStayValid = (
  checkIn: Date | null,
  checkOut: Date | null,
  unavailableDates: string[],
): { valid: boolean; message: string } => {
  if (!checkIn || !checkOut) {
    return { valid: false, message: 'Select check-in and check-out dates.' };
  }

  if (checkOut <= checkIn) {
    return { valid: false, message: 'Check-out must be after check-in.' };
  }

  const nights = getDateDifferenceInNights(checkIn, checkOut);
  if (nights < MINIMUM_STAY_NIGHTS) {
    return { valid: false, message: `Minimum stay is ${MINIMUM_STAY_NIGHTS} nights.` };
  }

  const datesInStay = getDateRange(checkIn, checkOut);
  if (datesInStay.some((date) => isDateUnavailable(date, unavailableDates))) {
    return { valid: false, message: 'Selected dates overlap unavailable nights.' };
  }

  return { valid: true, message: 'Ready to review' };
};

export const getCalendarDays = (monthDate: Date): Date[] => {
  const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const startOffset = monthStart.getDay();
  const calendarStart = addDays(monthStart, -startOffset);
  const days: Date[] = [];

  for (let index = 0; index < 42; index += 1) {
    days.push(addDays(calendarStart, index));
  }

  return days;
};

export const formatMonthYear = (date: Date): string =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);

export const formatShortDate = (date: Date): string =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);

export const formatFullDate = (date: Date): string =>
  new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(date);

import type { JobExperience } from "./types";

const MONTH_MAP: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

/**
 * Parses a date string like "June, 2025", "Jan, 2024", or "2023" into a Date object.
 */
export function parseDateString(dateStr: string): Date | null {
  if (!dateStr) return null;
  const cleaned = dateStr.trim().toLowerCase();

  // Match "Month, Year" or "Month Year" (e.g., "June, 2025", "Jan 2024")
  const monthYearMatch = cleaned.match(/^([a-z]+)[,\s]+(\d{4})$/);
  if (monthYearMatch) {
    const monthName = monthYearMatch[1];
    const year = parseInt(monthYearMatch[2], 10);
    const month = MONTH_MAP[monthName];
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }

  // Match just Year (e.g., "2023")
  const yearMatch = cleaned.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1], 10), 0, 1);
  }

  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? null : parsed;
}

/**
 * Formats a month count into human-readable years and months:
 * - 1 -> "1 Month"
 * - 4 -> "4 Months"
 * - 12 -> "1 Year"
 * - 16 -> "1 Year 4 Months"
 * - 33 -> "2 Years 9 Months"
 */
export function formatDurationMonths(totalMonths: number): string {
  if (totalMonths <= 0) return "1 Month";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart =
    years > 0 ? `${years} ${years === 1 ? "Year" : "Years"}` : "";
  const monthPart =
    months > 0 ? `${months} ${months === 1 ? "Month" : "Months"}` : "";

  if (yearPart && monthPart) return `${yearPart} ${monthPart}`;
  if (yearPart) return yearPart;
  return monthPart || "1 Month";
}

/**
 * Calculates total elapsed months between start date and end date (inclusive of current month).
 */
export function calculateElapsedMonths(
  startDate: Date,
  endDate: Date = new Date()
): number {
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const totalMonths = yearDiff * 12 + monthDiff + 1;
  return Math.max(1, totalMonths);
}

/**
 * Dynamically computes the duration for an experience.
 * If the role is ongoing (date has "Present" or isCurrent is true),
 * it calculates the elapsed time from the start date to the current date.
 * If a static duration is defined for a past role, that static duration is preserved.
 */
export function getExperienceDuration(
  exp: JobExperience,
  referenceDate: Date = new Date()
): string {
  const isOngoing =
    exp.isCurrent ||
    (exp.date && exp.date.toLowerCase().includes("present")) ||
    (exp.duration && exp.duration.toLowerCase() === "present");

  if (isOngoing && exp.date) {
    const parts = exp.date.split(/[—–-]/);
    const startStr = parts[0]?.trim();
    if (startStr) {
      const startDate = parseDateString(startStr);
      if (startDate) {
        const totalMonths = calculateElapsedMonths(startDate, referenceDate);
        return formatDurationMonths(totalMonths);
      }
    }
  }

  // For past roles with explicit duration
  if (exp.duration && exp.duration.toLowerCase() !== "present") {
    return exp.duration;
  }

  return exp.duration || exp.date;
}

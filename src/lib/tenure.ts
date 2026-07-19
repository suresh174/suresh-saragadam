/** Formats employment tenure from a start date through today (or an optional end). */
export function formatTenure(
  startYear: number,
  startMonth: number,
  endYear?: number,
  endMonth?: number,
): string {
  const end =
    endYear != null && endMonth != null
      ? new Date(endYear, endMonth - 1, 1)
      : new Date();
  const start = new Date(startYear, startMonth - 1, 1);

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (years === 0 && rem === 0) return "Just started";
  if (years === 0) return rem === 1 ? "1 mo" : `${rem} mos`;
  if (rem === 0) return years === 1 ? "1 yr" : `${years} yrs`;
  return `${years} yr${years === 1 ? "" : "s"} ${rem} mo${rem === 1 ? "" : "s"}`;
}

export function formatPeriodLabel(
  startLabel: string,
  options: {
    present?: boolean;
    endLabel?: string;
    startYear: number;
    startMonth: number;
    endYear?: number;
    endMonth?: number;
  },
): string {
  const tenure = formatTenure(
    options.startYear,
    options.startMonth,
    options.endYear,
    options.endMonth,
  );
  const end = options.present ? "Present" : (options.endLabel ?? "");
  return `${startLabel} — ${end} · ${tenure}`;
}

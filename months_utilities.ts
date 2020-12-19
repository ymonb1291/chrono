/** Links the month abbreviation with its number */
export enum NameOfMonth {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}

/** Number of days in each months */
export enum DaysInMonth {
  JAN = 31,
  FEB = 28,
  MAR = 31,
  APR = 30,
  MAY = 31,
  JUN = 30,
  JUL = 31,
  AUG = 31,
  SEP = 30,
  OCT = 31,
  NOV = 30,
  DEC = 31,
}

/**
 * Number of days in each months
 * Keys are numeric values
 */
export const DaysInMonthNum: number[] = [
  DaysInMonth.JAN,
  DaysInMonth.FEB,
  DaysInMonth.MAR,
  DaysInMonth.APR,
  DaysInMonth.MAY,
  DaysInMonth.JUN,
  DaysInMonth.JUL,
  DaysInMonth.AUG,
  DaysInMonth.SEP,
  DaysInMonth.OCT,
  DaysInMonth.NOV,
  DaysInMonth.DEC  
];

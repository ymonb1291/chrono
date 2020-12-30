import { Duration } from "./duration.enum.ts";
import {
  DaysInMonth,
  DaysInMonthNum,
  NameOfMonth,
} from "./months_utilities.ts";

/** 
 * The Chrono constructor
 * 
 * **Example**
 * ```
 * new Chrono().getTime();
 * ```
 */
export class Chrono extends Date {
  constructor();
  constructor(value: number | string | Date);
  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  );
  constructor(...args: unknown[]) {
    if (!args.length) {
      super(...args as []);
    } else if (args.length === 1) {
      super(...args as [number | string | Date]);
    } else {
      super(
        ...args as [
          number,
          number,
          number?,
          number?,
          number?,
          number?,
          number?,
        ],
      );
    }
  }

  /**
   * Add n days to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addDay(2);
   * console.log(chrono.toLocaleString());
   * // -> Mon Feb 03 2020 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580684400000
   * ```
   */
  public addDay(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.DAY * n));
  }

  /**
   * Add n hours to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addHour(2);
   * console.log(chrono.toLocaleString());
   * // -> Sat Feb 01 2020 02:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580518800000
   * ```
   */
  public addHour(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.HOUR * n));
  }

  /**
   * Add n minutes to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addMinute(2);
   * console.log(chrono.toLocaleString());
   * // -> Sat Feb 01 2020 00:02:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580511720000
   * ```
   */
  public addMinute(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.MINUTE * n));
  }

  /**
   * Add n months to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addMonth(2);
   * console.log(chrono.toLocaleString());
   * // -> Wed Apr 01 2020 00:00:00 GMT+0200 (CEST)
   * console.log(timestamp); 
   * // -> 1585692000000
   * ```
   */
  public addMonth(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setMonth(newDate.getMonth() + n);

    while (newDate.getMonth() > ((oldDate.getMonth() + n % 12) % 12)) {
      newDate.setDate(newDate.getDate() - 1);
    }

    return this.setTime(newDate.getTime());
  }

  /**
   * Add n seconds to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addSecond(2);
   * console.log(chrono.toLocaleString());
   * // -> Sat Feb 01 2020 00:00:02 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580511602000
   * ```
   */
  public addSecond(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.SECOND * n));
  }

  /**
   * Add n weeks to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addWeek(2);
   * console.log(chrono.toLocaleString());
   * // -> Sat Feb 15 2020 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1581721200000
   * ```
   */
  public addWeek(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.WEEK * n));
  }

  /**
   * Add n years to the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.addYear(2);
   * console.log(chrono.toLocaleString());
   * // -> Tue Feb 01 2022 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1643670000000
   * ```
   */
  public addYear(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setFullYear(newDate.getFullYear() + n);

    while (newDate.getMonth() !== oldDate.getMonth()) {
      newDate.setDate(newDate.getDate() - 1);
    }

    return this.setTime(newDate.getTime());
  }

  /**
   * Returns the number of days in the month
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.getLenghOfMonth());
   * // -> 29
   * ```
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.getLenghOfMonth(2));
   * // -> 31
   * ```
   */
  public getLenghOfMonth(month?: number): number {
    month = month || this.getMonth();

    if (month === 1 && this.isLeapYear()) {
      return DaysInMonth.FEB + 1;
    } else if (month === 1) {
      return DaysInMonth.FEB;
    } else {
      return DaysInMonth[NameOfMonth[month] as keyof typeof DaysInMonth];
    }
  }

  /**
   * Checks whether the year is a leap year
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.isLeapYear());
   * // -> true
   * ```
   * ```
   * const chrono = new Chrono("Feb 01 2021 00:00:00");
   * console.log(chrono.isLeapYear());
   * // -> false
   * ```
   */
  public isLeapYear(): boolean {
    const year = this.getFullYear();

    return this._isLeapYear(year);
  }

  /**
   * Checks whether the UTC year is a leap year
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.isUTCLeapYear());
   * // -> true
   * ```
   * ```
   * const chrono = new Chrono("Feb 01 2021 00:00:00");
   * console.log(chrono.isUTCLeapYear());
   * // -> false
   * ```
   */
  public isUTCLeapYear(): boolean {
    const year = this.getUTCFullYear();

    return this._isLeapYear(year);
  }

  /**
   * Update the date and time from a timestamp or a Date or Chrono object
   * 
   * **Example**
   * ```
   * // Set date and time using a timestamp
   * new Chrono().set(Date.now());
   * // Set date and time using a Date object
   * new Chrono().set(new Date);
   * // Set date and time using a Chrono object
   * new Chrono().set(new Chrono);
   * ```
   */
  public set(time: number | Date | Chrono): number {
    if (time instanceof Date) {
      this.setTime(time.getTime());
    } else {
      this.setTime(time);
    }
    return this.getTime();
  }

  /**
   * Substracts n days from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractDay(2);
   * console.log(chrono.toLocaleString());
   * // -> Thu Jan 30 2020 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580338800000
   * ```
   */
  public substractDay(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.DAY * n));
  }

  /**
   * Substracts n hours from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractHour(2);
   * console.log(chrono.toLocaleString());
   * // -> Fri Jan 31 2020 22:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580504400000
   * ```
   */
  public substractHour(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.HOUR * n));
  }

  /**
   * Substracts n minutes from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractMinute(2);
   * console.log(chrono.toLocaleString());
   * // -> Fri Jan 31 2020 23:58:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580511480000
   * ```
   */
  public substractMinute(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.MINUTE * n));
  }

  /**
   * Substracts n months from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractMonth(2);
   * console.log(chrono.toLocaleString());
   * // -> Sun Dec 01 2019 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1575154800000
   * ```
   */
  public substractMonth(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setMonth(newDate.getMonth() - n);
    while (oldDate.getDate() > 28 && newDate.getDate() < 4) {
      newDate.setDate(newDate.getDate() - 1);
    }

    return this.setTime(newDate.getTime());
  }

  /**
   * Substracts n seconds from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractSecond(2);
   * console.log(chrono.toLocaleString());
   * // -> Fri Jan 31 2020 23:59:58 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1580511598000
   * ```
   */
  public substractSecond(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.SECOND * n));
  }

  /**
   * Substracts n weeks from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractWeek(2);
   * console.log(chrono.toLocaleString());
   * // -> Sat Jan 18 2020 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1579302000000
   * ```
   */
  public substractWeek(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.WEEK * n));
  }

  /**
   * Substracts n years from the date and time value
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * const timestamp = chrono.substractYear(2);
   * console.log(chrono.toLocaleString());
   * // -> Thu Feb 01 2018 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 1517439600000
   * ```
   */
  public substractYear(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setFullYear(newDate.getFullYear() - n);

    while (newDate.getMonth() !== oldDate.getMonth()) {
      newDate.setDate(newDate.getDate() - 1);
    }

    return this.setTime(newDate.getTime());
  }

  /**
   * Returns the date expressed as an array
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.toArray());
   * // -> [2020, 1, 1, 0, 0, 0, 0]
   * ```
   */
  public toArray(): [number, number, number, number, number, number, number] {
    return [
      this.getFullYear(),
      this.getMonth(),
      this.getDate(),
      this.getHours(),
      this.getMinutes(),
      this.getSeconds(),
      this.getMilliseconds(),
    ];
  }

  /**
   * Changes the date of the Chrono instance to
   * the last day of the current month.
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 10 2000 00:00:00");
   * const timestamp = chrono.toEndOfMonth();
   * console.log(chrono.toLocaleString());
   * // -> Tue Feb 29 2000 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 951778800000
   * ```
   */
  public toEndOfMonth(offset: number = 0): number {
    offset = offset < 0 ? 0 : offset;

    if (this.getMonth() === 1 && this._isLeapYear(this.getFullYear())) {
      this.setDate(DaysInMonthNum[this.getMonth()] + 1 - offset);
    } else {
      this.setDate(DaysInMonthNum[this.getMonth()] - offset);
    }

    return this.getTime();
  }

  /**
   * Changes the date of the Chrono instance to
   * the first day of the next month.
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 10 2000 00:00:00");
   * const timestamp = chrono.toEndOfNextMonth();
   * console.log(chrono.toLocaleString());
   * // -> Fri Mar 31 2000 00:00:00 GMT+0200 (CEST)
   * console.log(timestamp); 
   * // -> 954453600000
   * ```
   */
  public toEndOfNextMonth(): number {
    // since all months don't have the same number of days,
    // we need first to be sure that the date will exist during
    // next month
    this.setDate(1);
    this.setMonth(this.getMonth() + 1);

    this.toEndOfMonth();

    return this.getTime();
  }

  /**
   * Changes the date of the Chrono instance to
   * the first day of the previous month.
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 10 2000 00:00:00");
   * const timestamp = chrono.toEndOfPreviousMonth();
   * console.log(chrono.toLocaleString());
   * // -> Mon Jan 31 2000 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 949273200000
   * ```
   */
  public toEndOfPreviousMonth(): number {
    // since all months don't have the same number of days,
    // we need first to be sure that the date will exist during
    // previous month
    this.setDate(1);
    this.setMonth(this.getMonth() - 1);

    this.toEndOfMonth();

    return this.getTime();
  }

  /**
   * Changes the date of the Chrono instance to
   * the first day of the next month.
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 10 2000 00:00:00");
   * const timestamp = chrono.toStartOfNextMonth();
   * console.log(chrono.toLocaleString());
   * // -> Wed Mar 01 2000 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 951865200000
   * ```
   */
  public toStartOfNextMonth(): number {
    const current_month: number = this.getMonth();
    this.setMonth(current_month + 1);
    this.setDate(1);
    return this.getTime();
  }

  /**
   * Changes the date of the Chrono instance to
   * the first day of the next month.
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 10 2000 00:00:00");
   * const timestamp = chrono.toStartOfPreviousMonth();
   * console.log(chrono.toLocaleString());
   * // -> Sat Jan 01 2000 00:00:00 GMT+0100 (CET)
   * console.log(timestamp); 
   * // -> 946681200000
   * ```
   */
  public toStartOfPreviousMonth(): number {
    const current_month: number = this.getMonth();
    this.setMonth(current_month - 1);
    this.setDate(1);
    return this.getTime();
  }

  /**
   * Returns the date expressed as an array
   * 
   * **Example**
   * ```
   * const chrono = new Chrono("Feb 01 2020 00:00:00");
   * console.log(chrono.toUTCArray());
   * // -> [2020, 0, 31, 23, 0, 0, 0]
   * ```
   */
  public toUTCArray(): [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ] {
    return [
      this.getUTCFullYear(),
      this.getUTCMonth(),
      this.getUTCDate(),
      this.getUTCHours(),
      this.getUTCMinutes(),
      this.getUTCSeconds(),
      this.getUTCMilliseconds(),
    ];
  }

  /** Checks if a year is a leap year */
  private _isLeapYear(year: number): boolean {
    if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
      // common year
      return false;
    }
    // leap year
    return true;
  }
}

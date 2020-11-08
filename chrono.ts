import { Duration } from "./duration.enum.ts";

/**
 * The Chrono constructor
 * @extends Date
 */
export class Chrono extends Date {

  constructor()
  constructor(value: number | string | Date)
  constructor(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
  constructor(...args: any[]) {
    if(!args.length) {
      super(...args as []);
    } else if(args.length === 1) {
      super(...args as [number | string | Date]);
    } else {
      super(...args as [number, number, number?, number?, number?, number?, number?]);
    }
  }

  /**
   * Add n days to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of days to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addDay(3); // Add 3 days to the current date
   */
  public addDay(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.DAY * n));
  }

  /**
   * Add n hours to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of hours to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addHour(3); // Add 3 hours to the current time
   */
  public addHour(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.HOUR * n));
  }

  /**
   * Add n minutes to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of minutes to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addMinute(3); // Add 3 minutes to the current time
   */
  public addMinute(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.MINUTE * n));
  }

  /**
   * Add n months to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of months to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addMonth(3); // Add 3 months to the current date
   */
  public addMonth(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setMonth(newDate.getMonth() + n);
    
    while(newDate.getMonth() > ((oldDate.getMonth() + n%12) % 12)) {
      newDate.setDate(newDate.getDate() - 1);
    }
    
    return this.setTime(newDate.getTime());
  }

  /**
   * Add n seconds to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of seconds to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addSecond(3); // Add 3 seconds to the current time
   */
  public addSecond(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.SECOND * n));
  }

  /**
   * Add n weeks to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of weeks to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addWeek(3); // Add 3 weeks to the current date
   */
  public addWeek(n: number = 1): number {
    return this.setTime(this.getTime() + (Duration.WEEK * n));
  }

  /**
   * Add n years to the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of years to add
   * @returns {number} Timestamp
   * @example
   * new Chrono().addYear(3); // Add 3 years to the current date
   */
  public addYear(n: number = 1): number {
    const oldDate = new Date(this.getTime());
    const newDate = new Date(this.getTime());
    newDate.setFullYear(newDate.getFullYear() + n);

    while(newDate.getMonth() !== oldDate.getMonth()) {
      newDate.setDate(newDate.getDate() - 1);
    }
    
    return this.setTime(newDate.getTime());
  }

  /**
   * Update the date and time from a timestamp or a Date or Chrono object
   * @public
   * @method
   * @param {number|Date|Chrono} time Timestamp, Date object or Chrono object
   * @returns {number} Timestamp
   * @example
   * new Chrono().set(Date.now()); // Set date and time using a timestamp
   * new Chrono().set(new Date);   // Set date and time using a Date object
   * new Chrono().set(new Chrono); // Set date and time using a Chrono object
   */
  public set(time: number | Date | Chrono): number {
    if(time instanceof Date) {
      this.setTime(time.getTime());
    } else {
      this.setTime(time);
    }
    return this.getTime();
  }

  /**
   * Substracts n days from the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of days to substract
   * @returns {number} Timestamp
   * @example
   * new Chrono().substractDay(3); // Substracts 3 days from the current date
   */
  public substractDay(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.DAY * n));
  }

  /**
   * Substracts n hours from the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of hours to substract
   * @returns {number} Timestamp
   * @example
   * new Chrono().substractHour(3); // Substracts 3 hours from the current time
   */
  public substractHour(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.HOUR * n));
  }

  /**
   * Substracts n minutes from the date and time value
   * @public
   * @method
   * @param {number} [n=1] Number of minutes to substract
   * @returns {number} Timestamp
   * @example
   * new Chrono().substractMinute(3); // Substracts 3 minutes from the current time
   */
  public substractMinute(n: number = 1): number {
    return this.setTime(this.getTime() - (Duration.MINUTE * n));
  }

}

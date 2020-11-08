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

}

# Chrono
![ci](https://github.com/ymonb1291/chrono/workflows/ci/badge.svg)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/ymonb1291/chrono?include_prereleases)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ymonb1291/chrono)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/chrono/mod.ts)
![GitHub](https://img.shields.io/github/license/ymonb1291/chrono)

A date utility library that extends the native `Date` object.

## Features
* Date and time manipulation
* Fully compatible with the native `Date` object

# How to use
Basic usage:
```
import { Chrono } from "https://raw.githubusercontent.com/ymonb1291/chrono/main/mod.ts";

const chrono = new Chrono();
chrono.addDay(1);
```

# Compatibility
The class `Chrono` extends the `Date` object with additional functionalities. All functionalities from `Date` are accounted for.

The following two lines of code return the timestamp of the current date and time:
```
Chrono.now();
Date.now();
```
And so are the following two:
```
new Chrono().toLocaleString();
new Date().toLocaleString();
```
A `Chrono` object fully complies with the `Date` interface. The following example is valid:
```
function useDate(date: Date) {}
useDate(new Chrono());
```
However, a `Date` type does not allow objects of type `Chrono`.
```
function useChrono(date: Chrono) {}
useChrono(new Date());
```

# Methods

## Chrono.prototype.addDay
### Method signature
```
Chrono.addDay(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of days to add to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addDay(2);
console.log(chrono.toLocaleString()); // Mon Feb 03 2020 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1580727600000
```

## Chrono.prototype.addHour
### Method signature
```
Chrono.addHour(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of hours to add to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addHour(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 14:00:00 GMT+0100 (CET)
console.log(res);                     // 1580562000000
```

## Chrono.prototype.addMinute
### Method signature
```
Chrono.addMinute(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of minutes to add to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addMinute(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 12:02:00 GMT+0100 (CET)
console.log(res);                     // 1580554920000
```

## Chrono.prototype.addMonth
### Method signature
```
Chrono.addMonth(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of months to add to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addMonth(2);
console.log(chrono.toLocaleString()); // Wed Apr 01 2020 12:00:00 GMT+0200 (CEST)
console.log(res);                     // 1585735200000
```

## Chrono.prototype.addSecond
### Method signature
```
Chrono.addSecond(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of seconds to add to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addSecond(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 12:00:02 GMT+0100 (CET)
console.log(res);                     // 1580554802000
```

## Chrono.prototype.addWeek
### Method signature
```
Chrono.addWeek(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of weeks to add to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addWeek(2);
console.log(chrono.toLocaleString()); // Sat Feb 15 2020 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1581764400000
```

## Chrono.prototype.addYear
### Method signature
```
Chrono.addYear(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of years to add to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.addYear(2);
console.log(chrono.toLocaleString()); // Tue Feb 01 2022 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1643713200000
```

## Chrono.prototype.isLeapYear
### Method signature
```
Chrono.isLeapYear(): boolean
```
* **Returns:** a value of type `boolean` which is true when the year is a leap year

### Example
```
const chrono = new Chrono("Jan 01 2020 00:00:00");
console.log(chrono.isLeapYear());    // true
```

## Chrono.prototype.isUTCLeapYear
### Method signature
```
Chrono.isUTCLeapYear(): boolean
```
* **Returns:** a value of type `boolean` which is true when the UTC year is a leap year

### Example
```
const chrono = new Chrono("Jan 01 2020 00:00:00");
console.log(chrono.isUTCLeapYear());    // false
```

## Chrono.prototype.set
### Method signature
```
Chrono.set(time: number | Date | Chrono): number
```
* **Parameter:**
  * time: parameter of type `number | Date | Chrono` representing a valid date
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.set(new Date(946681200000));
console.log(chrono.toLocaleString()); // Sat Jan 01 2000 00:00:00 GMT+0100 (CET)
console.log(res);                     // 946681200000
```

## Chrono.prototype.substractDay
### Method signature
```
Chrono.substractDay(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of days to substract to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractDay(2);
console.log(chrono.toLocaleString()); // Thu Jan 30 2020 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1580382000000
```

## Chrono.prototype.substractHour
### Method signature
```
Chrono.substractHour(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of hours to substract to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractHour(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 10:00:00 GMT+0100 (CET)
console.log(res);                     // 1580547600000
```

## Chrono.prototype.substractMinute
### Method signature
```
Chrono.substractMinute(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of minutes to substract to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractMinute(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 11:58:00 GMT+0100 (CET)
console.log(res);                     // 1580554680000
```

## Chrono.prototype.substractMonth
### Method signature
```
Chrono.substractMonth(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of months to substract to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractMonth(2);
console.log(chrono.toLocaleString()); // Sun Dec 01 2019 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1575198000000
```

## Chrono.prototype.substractSecond
### Method signature
```
Chrono.substractSecond(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of seconds to substract to the current time.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractSecond(2);
console.log(chrono.toLocaleString()); // Sat Feb 01 2020 11:59:58 GMT+0100 (CET)
console.log(res);                     // 1580554798000
```

## Chrono.prototype.substractWeek
### Method signature
```
Chrono.substractWeek(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of weeks to substract to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractWeek(2);
console.log(chrono.toLocaleString()); // Sat Jan 18 2020 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1579345200000
```

## Chrono.prototype.substractYear
### Method signature
```
Chrono.substractYear(n?: number): number
```
* **Parameter:**
  * n: (optional) parameter of type `number` which defaults to `1` and defines the number of years to substract to the current date.
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 01 2020 12:00:00.000");
const res = chrono.substractYear(2);
console.log(chrono.toLocaleString()); // Thu Feb 01 2018 12:00:00 GMT+0100 (CET)
console.log(res);                     // 1517482800000
```

## Chrono.prototype.toArray
### Method signature
```
Chrono.toArray(): [number, number, number, number, number, number, number]
```
* **Returns:** an array of 7 values of type `number` representing [`year`, `month`, `date`, `hours`, `minutes`, `seconds`, `milliseconds`]

### Example
```
const chrono = new Chrono("Feb 01 2020 00:00:00");
console.log(chrono.toUTCArray());   // [2020, 1, 1, 0, 0, 0, 0]
```

## Chrono.prototype.toEndOfNextMonth
### Method signature
```
Chrono.toEndOfNextMonth(): number
```
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 10 2000 00:00:00");
const timestamp = chrono.toEndOfNextMonth();
console.log(chrono.toLocaleString());
// -> Fri Mar 31 2000 00:00:00 GMT+0200 (CEST)
console.log(timestamp); 
// -> 954453600000
```

## Chrono.prototype.toStartOfNextMonth
### Method signature
```
Chrono.toStartOfNextMonth(): number
```
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 10 2000 00:00:00");
const timestamp = chrono.toStartOfNextMonth();
console.log(chrono.toLocaleString());
// -> Wed Mar 01 2000 00:00:00 GMT+0100 (CET)
console.log(timestamp); 
// -> 951865200000
```

## Chrono.prototype.toStartOfPreviousMonth
### Method signature
```
Chrono.toStartOfPreviousMonth(): number
```
* **Returns:** a value of type `number` representing the timestamp after execution

### Example
```
const chrono = new Chrono("Feb 10 2000 00:00:00");
const timestamp = chrono.toStartOfPreviousMonth();
console.log(chrono.toLocaleString());
// -> Sat Jan 01 2000 00:00:00 GMT+0100 (CET)
console.log(timestamp); 
// -> 946681200000
```

## Chrono.prototype.toUTCArray
### Method signature
```
Chrono.toUTCArray(): [number, number, number, number, number, number, number]
```
* **Returns:** an array of 7 values of type `number` representing [`UTCYear`, `UTCMonth`, `UTCDate`, `UTCHours`, `UTCMinutes`, `UTCSeconds`, `UTCMilliseconds`]

### Example
```
const chrono = new Chrono("Feb 01 2020 00:00:00");
console.log(chrono.toUTCArray());   // [2020, 0, 31, 23, 0, 0, 0]
```

# Contributions
PRs are welcome!
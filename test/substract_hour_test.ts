import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined;
}

Rhum.testPlan("substract_hour_test.ts", () => {
  Rhum.testSuite("substractHour()", () => {
    const testCases: TestCase[] = [
      {
        description: "substractHour() substracts 1 hour",
        startDate: "Jan 15 2000 11:15:50.015",
        targetDate: "Jan 15 2000 10:15:50.015",
        param: void 0,
      },
      {
        description:
          "substractHour(2) substracts 2 hours in the middle of a day",
        startDate: "Jan 15 2000 12:15:50.015",
        targetDate: "Jan 15 2000 10:15:50.015",
        param: 2,
      },
      {
        description: "substractHour(2) substracts 2 hours at year's change",
        startDate: "Jan 01 2000 01:15:50.015",
        targetDate: "Dec 31 1999 23:15:50.015",
        param: 2,
      },
      {
        description: "substractHour(2) skips February 29th on a non leap-year",
        startDate: "Mar 01 1999 01:15:50.015",
        targetDate: "Feb 28 1999 23:15:50.015",
        param: 2,
      },
      {
        description: "substractHour(2) counts February 29th on a leap-year",
        startDate: "Feb 29 2000 01:15:50.015",
        targetDate: "Feb 28 2000 23:15:50.015",
        param: 2,
      },
    ];

    testCases.forEach((testCase) => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);

        chrono.substractHour(testCase.param);

        expect(chrono.getFullYear()).toEqual(target.getFullYear());
        expect(chrono.getMonth()).toEqual(target.getMonth());
        expect(chrono.getDate()).toEqual(target.getDate());
        expect(chrono.getHours()).toEqual(target.getHours());
        expect(chrono.getMinutes()).toEqual(target.getMinutes());
        expect(chrono.getSeconds()).toEqual(target.getSeconds());
        expect(chrono.getMilliseconds()).toEqual(target.getMilliseconds());
      });
    });
  });
});

Rhum.run();

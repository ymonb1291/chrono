import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined;
}

Rhum.testPlan("add_month_test.ts", () => {
  Rhum.testSuite("addMonth()", () => {
    const testCases: TestCase[] = [
      {
        description: "addMonth() adds 1 month",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Feb 15 2000 10:15:50.015",
        param: void 0,
      },
      {
        description: "addMonth(2) adds 2 months in the middle of a day",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Mar 15 2000 10:15:50.015",
        param: 2,
      },
      {
        description: "addMonth(2) adds 2 months at year's change",
        startDate: "Dec 20 1999 10:15:50.015",
        targetDate: "Feb 20 2000 10:15:50.015",
        param: 2,
      },
      {
        description: "addMonth(2) skips February 29th on a non leap-year",
        startDate: "Dec 31 1998 10:15:50.015",
        targetDate: "Feb 28 1999 10:15:50.015",
        param: 2,
      },
      {
        description: "addMonth(2) counts February 29th on a leap-year",
        startDate: "Dec 31 1999 10:15:50.015",
        targetDate: "Feb 29 2000 10:15:50.015",
        param: 2,
      },
      {
        description: "addMonth() counts correctly from 1st day of month",
        startDate: "Mar 01 2006 10:15:50.015",
        targetDate: "Apr 01 2006 10:15:50.015",
        param: 1,
      },
    ];

    testCases.forEach((testCase) => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);

        chrono.addMonth(testCase.param);

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

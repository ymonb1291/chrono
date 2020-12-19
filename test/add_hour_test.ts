import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined;
}

Rhum.testPlan("add_hour_test.ts", () => {
  Rhum.testSuite("addHour()", () => {
    const testCases: TestCase[] = [
      {
        description: "addHour() adds 1 hour",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 11:15:50.015",
        param: void 0,
      },
      {
        description: "addHour(2) adds 2 hours in the middle of a day",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 12:15:50.015",
        param: 2,
      },
      {
        description: "addHour(2) adds 2 hours at year's change",
        startDate: "Dec 31 1999 23:15:50.015",
        targetDate: "Jan 01 2000 01:15:50.015",
        param: 2,
      },
      {
        description: "addHour(2) skips February 29th on a non leap-year",
        startDate: "Feb 28 1999 23:15:50.015",
        targetDate: "Mar 01 1999 01:15:50.015",
        param: 2,
      },
      {
        description: "addHour(2) counts February 29th on a leap-year",
        startDate: "Feb 28 2000 23:15:50.015",
        targetDate: "Feb 29 2000 01:15:50.015",
        param: 2,
      },
    ];

    testCases.forEach((testCase) => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);

        chrono.addHour(testCase.param);

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

import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined;
}

Rhum.testPlan("add_second_test.ts", () => {
  Rhum.testSuite("addSecond()", () => {
    const testCases: TestCase[] = [
      {
        description: "addSecond() adds 1 second",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 10:15:51.015",
        param: void 0,
      },
      {
        description: "addSecond(2) adds 2 seconds in the middle of a day",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 10:15:52.015",
        param: 2,
      },
      {
        description: "addSecond(2) adds 2 seconds at year's change",
        startDate: "Dec 31 1999 23:59:59.015",
        targetDate: "Jan 01 2000 00:00:01.015",
        param: 2,
      },
      {
        description: "addSecond(2) skips February 29th on a non leap-year",
        startDate: "Feb 28 1999 23:59:59.015",
        targetDate: "Mar 01 1999 00:00:01.015",
        param: 2,
      },
      {
        description: "addSecond(2) counts February 29th on a leap-year",
        startDate: "Feb 28 2000 23:59:59.015",
        targetDate: "Feb 29 2000 00:00:01.015",
        param: 2,
      },
    ];

    testCases.forEach((testCase) => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);

        chrono.addSecond(testCase.param);

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

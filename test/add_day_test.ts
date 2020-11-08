import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined
}

Rhum.testPlan("add_day_test.ts", () => {

  Rhum.testSuite("addDay()", () => {

    const testCases: TestCase[] = [
      {
        description: "addDay() adds 1 day",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 16 2000 10:15:50.015",
        param: void 0
      },
      {
        description: "addDay(2) adds 2 days in the middle of a month",
        startDate: "Jan 15 2000 10:15:50.015",
        targetDate: "Jan 17 2000 10:15:50.015",
        param: 2
      },
      {
        description: "addDay(2) adds 2 days at year's change",
        startDate: "Dec 31 1999 10:15:50.015",
        targetDate: "Jan 02 2000 10:15:50.015",
        param: 2
      },
      {
        description: "addDay(2) skips February 29th on a non leap-year",
        startDate: "Feb 28 1999 10:15:50.015",
        targetDate: "Mar 02 1999 10:15:50.015",
        param: 2
      },
      {
        description: "addDay(2) doesn't skip February 29th on a leap-year",
        startDate: "Feb 28 2000 10:15:50.015",
        targetDate: "Mar 01 2000 10:15:50.015",
        param: 2
      }
    ];

    testCases.forEach(testCase => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);
  
        chrono.addDay(testCase.param);
        
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
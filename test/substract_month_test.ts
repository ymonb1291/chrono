import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined
}

Rhum.testPlan("substract_month_test.ts", () => {

  Rhum.testSuite("substractMonth()", () => {

    const testCases: TestCase[] = [
      {
        description: "substractMonth() substracts 1 month",
        startDate: "Feb 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 10:15:50.015",
        param: void 0
      },
      {
        description: "substractMonth(2) substracts 2 months in the middle of a day",
        startDate: "Mar 15 2000 10:15:50.015",
        targetDate: "Jan 15 2000 10:15:50.015",
        param: 2
      },
      {
        description: "substractMonth(2) substracts 2 months at year's change",
        startDate: "Feb 20 2000 10:15:50.015",
        targetDate: "Dec 20 1999 10:15:50.015",
        param: 2
      },
      {
        description: "substractMonth(2) skips February 29th on a non leap-year",
        startDate: "Apr 30 1999 10:15:50.015",
        targetDate: "Feb 28 1999 10:15:50.015",
        param: 2
      },
      {
        description: "substractMonth(2) counts February 29th on a leap-year",
        startDate: "Apr 30 2000 10:15:50.015",
        targetDate: "Feb 29 2000 10:15:50.015",
        param: 2
      }
    ];

    testCases.forEach(testCase => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);
        
        chrono.substractMonth(testCase.param);
        
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
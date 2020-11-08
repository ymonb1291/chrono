import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined
}

Rhum.testPlan("substract_week_test.ts", () => {

  Rhum.testSuite("substractWeek()", () => {

    const testCases: TestCase[] = [
      {
        description: "substractWeek() substracts 1 week",
        startDate: "Jan 17 2000 10:15:50.015",
        targetDate: "Jan 10 2000 10:15:50.015",
        param: void 0
      },
      {
        description: "substractWeek(2) substracts 2 weeks in the middle of a month",
        startDate: "Jan 24 2000 10:15:50.015",
        targetDate: "Jan 10 2000 10:15:50.015",
        param: 2
      },
      {
        description: "substractWeek(2) substracts 2 weeks at year's change",
        startDate: "Jan 14 2000 10:15:50.015",
        targetDate: "Dec 31 1999 10:15:50.015",
        param: 2
      },
      {
        description: "substractWeek(2) skips February 29th on a non leap-year",
        startDate: "Mar 01 1999 10:15:50.015",
        targetDate: "Feb 15 1999 10:15:50.015",
        param: 2
      },
      {
        description: "substractWeek(2) doesn't skip February 29th on a leap-year",
        startDate: "Feb 29 2000 10:15:50.015",
        targetDate: "Feb 15 2000 10:15:50.015",
        param: 2
      }
    ];

    testCases.forEach(testCase => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);
  
        chrono.substractWeek(testCase.param);
        
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
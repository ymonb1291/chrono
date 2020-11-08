import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

interface TestCase {
  description: string;
  startDate: string;
  targetDate: string;
  param: number | undefined
}

Rhum.testPlan("add_year_test.ts", () => {

  Rhum.testSuite("addYear()", () => {

    const testCases: TestCase[] = [
      {
        description: "addYear() adds 1 year",
        startDate: "Jan 15 1999 10:15:50.015",
        targetDate: "Jan 15 2000 10:15:50.015",
        param: void 0
      },
      {
        description: "addYear(2) adds 2 years",
        startDate: "Jan 15 1999 10:15:50.015",
        targetDate: "Jan 15 2001 10:15:50.015",
        param: 2
      },
      {
        description: "addYear(2) skips February 29th on a non leap-year",
        startDate: "Feb 29 2000 10:15:50.015",
        targetDate: "Feb 28 2002 10:15:50.015",
        param: 2
      },
      {
        description: "addYear(4) counts February 29th on a leap-year",
        startDate: "Feb 29 2000 10:15:50.015",
        targetDate: "Feb 29 2004 10:15:50.015",
        param: 4
      }
    ];

    testCases.forEach(testCase => {
      Rhum.testCase(testCase.description, () => {
        const chrono = new Chrono(testCase.startDate);
        const target = new Chrono(testCase.targetDate);
        
        chrono.addYear(testCase.param);
        
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
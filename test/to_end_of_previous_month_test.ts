import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_end_of_previous_month_test.ts", () => {
  Rhum.testSuite("toEndOfPreviousMonth()", () => {
    Rhum.testCase("Changes to the last day of the previous month", () => {
      const chrono = new Chrono("Feb 10 2000 00:00:00");

      const res = chrono.toEndOfPreviousMonth();

      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Works on year's start", () => {
      const chrono = new Chrono("Jan 10 2000 00:00:00");

      const res = chrono.toEndOfPreviousMonth();

      expect(new Date(res).getMonth()).toEqual(11);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Works on a leap year", () => {
      const chrono = new Chrono("Mar 10 2000 00:00:00");

      const res = chrono.toEndOfPreviousMonth();

      expect(new Date(res).getMonth()).toEqual(1);
      expect(new Date(res).getDate()).toEqual(29);
    });
  });
});

Rhum.run();

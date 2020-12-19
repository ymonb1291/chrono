import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_start_of_previous_month_test.ts", () => {
  Rhum.testSuite("toStartOfPreviousMonth()", () => {
    Rhum.testCase("Changes to the 1st of the previous month", () => {
      const chrono = new Chrono("Feb 10 2000 00:00:00");

      const res = chrono.toStartOfPreviousMonth();

      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(1);
    });

    Rhum.testCase("Works in January", () => {
      const chrono = new Chrono("Jan 10 2000 00:00:00");

      const res = chrono.toStartOfPreviousMonth();

      expect(new Date(res).getMonth()).toEqual(11);
      expect(new Date(res).getDate()).toEqual(1);
      expect(new Date(res).getFullYear()).toEqual(1999);
    });
  });
});

Rhum.run();

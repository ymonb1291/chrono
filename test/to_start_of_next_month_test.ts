import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_start_of_next_month_test.ts", () => {
  Rhum.testSuite("toStartOfNextMonth()", () => {
    Rhum.testCase("Changes to the 1st of the next month", () => {
      const chrono = new Chrono("Feb 10 2000 00:00:00");

      const res = chrono.toStartOfNextMonth();

      expect(new Date(res).getMonth()).toEqual(2);
      expect(new Date(res).getDate()).toEqual(1);
    });

    Rhum.testCase("Works on year's end", () => {
      const chrono = new Chrono("Dec 10 1999 00:00:00");

      const res = chrono.toStartOfNextMonth();

      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(1);
    });
  });
});

Rhum.run();

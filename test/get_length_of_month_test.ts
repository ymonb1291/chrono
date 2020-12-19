import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("get_length_of_month_test.ts", () => {
  Rhum.testSuite("getLenghOfMonth()", () => {
    Rhum.testCase("Accepts no parameter", () => {
      const chrono = new Chrono("Feb 01 1900 00:00:00");

      const res = chrono.getLenghOfMonth();

      expect(res).toEqual(28);
    });

    Rhum.testCase("Accepts parameter", () => {
      const chrono = new Chrono("Feb 01 1900 00:00:00");

      const res = chrono.getLenghOfMonth(2);

      expect(res).toEqual(31);
    });

    Rhum.testCase("Considers leap years", () => {
      const chrono = new Chrono("Feb 01 2000 00:00:00");

      const res = chrono.getLenghOfMonth();

      expect(res).toEqual(29);
    });
  });
});

Rhum.run();

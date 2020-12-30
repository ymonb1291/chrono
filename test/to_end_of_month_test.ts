import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_end_of_month_test.ts", () => {
  Rhum.testSuite("toEndOfMonth()", () => {
    Rhum.testCase("Changes date to the 31st in January", () => {
      const chrono = new Chrono("Jan 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 29th in February on a leap year", () => {
      const chrono = new Chrono("Feb 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(1);
      expect(new Date(res).getDate()).toEqual(29);
    });

    Rhum.testCase(
      "Changes date to the 28th in February on a non-leap year",
      () => {
        const chrono = new Chrono("Feb 10 1999 00:00:00");

        const res = chrono.toEndOfMonth();

        expect(new Date(res).getFullYear()).toEqual(1999);
        expect(new Date(res).getMonth()).toEqual(1);
        expect(new Date(res).getDate()).toEqual(28);
      },
    );

    Rhum.testCase(
      "Changes date to the 19th in February on a leap year with offset=10",
      () => {
        const chrono = new Chrono("Feb 10 2000 00:00:00");

        const res = chrono.toEndOfMonth(10);

        expect(new Date(res).getFullYear()).toEqual(2000);
        expect(new Date(res).getMonth()).toEqual(1);
        expect(new Date(res).getDate()).toEqual(19);
      },
    );

    Rhum.testCase(
      "Changes date to the 18th in February on a non-leap year with offset=10",
      () => {
        const chrono = new Chrono("Feb 10 1999 00:00:00");

        const res = chrono.toEndOfMonth(10);

        expect(new Date(res).getFullYear()).toEqual(1999);
        expect(new Date(res).getMonth()).toEqual(1);
        expect(new Date(res).getDate()).toEqual(18);
      },
    );

    Rhum.testCase("Changes date to the 31st in March", () => {
      const chrono = new Chrono("Mar 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(2);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 30th in April", () => {
      const chrono = new Chrono("Apr 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(3);
      expect(new Date(res).getDate()).toEqual(30);
    });

    Rhum.testCase("Changes date to the 31st in May", () => {
      const chrono = new Chrono("May 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(4);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 30th in June", () => {
      const chrono = new Chrono("Jun 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(5);
      expect(new Date(res).getDate()).toEqual(30);
    });

    Rhum.testCase("Changes date to the 31st in Jul", () => {
      const chrono = new Chrono("Jul 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(6);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 31st in Aug", () => {
      const chrono = new Chrono("Aug 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(7);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 30th in Sep", () => {
      const chrono = new Chrono("Sep 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(8);
      expect(new Date(res).getDate()).toEqual(30);
    });

    Rhum.testCase("Changes date to the 31st in Oct", () => {
      const chrono = new Chrono("Oct 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(9);
      expect(new Date(res).getDate()).toEqual(31);
    });

    Rhum.testCase("Changes date to the 30th in Nov", () => {
      const chrono = new Chrono("Nov 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(10);
      expect(new Date(res).getDate()).toEqual(30);
    });

    Rhum.testCase("Changes date to the 31st in Dec", () => {
      const chrono = new Chrono("Dec 10 2000 00:00:00");

      const res = chrono.toEndOfMonth();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(11);
      expect(new Date(res).getDate()).toEqual(31);
    });
  });
});

Rhum.run();

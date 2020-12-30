import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_nearest_weekday_test.ts", () => {
  Rhum.testSuite("toNearestWeekday()", () => {
    Rhum.testCase("Doesn't change the date if already a weekday", () => {
      const chrono = new Chrono("Jan 7 2000 00:00:00");

      const res = chrono.toNearestWeekday();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(7);
    });

    Rhum.testCase("Changes the date to Friday if the day is Saturday", () => {
      const chrono = new Chrono("Jan 8 2000 00:00:00");

      const res = chrono.toNearestWeekday();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(7);
    });

    Rhum.testCase("Changes the date to Monday if the day is Sunday", () => {
      const chrono = new Chrono("Jan 9 2000 00:00:00");

      const res = chrono.toNearestWeekday();

      expect(new Date(res).getFullYear()).toEqual(2000);
      expect(new Date(res).getMonth()).toEqual(0);
      expect(new Date(res).getDate()).toEqual(10);
    });

    Rhum.testCase(
      "Stays within the boudaries of the month if the 'bound' parameter is true",
      () => {
        const chrono = new Chrono("May 31 2020 00:00:00");

        const res = chrono.toNearestWeekday(true);

        expect(new Date(res).getFullYear()).toEqual(2020);
        expect(new Date(res).getMonth()).toEqual(4);
        expect(new Date(res).getDate()).toEqual(29);
      },
    );

    Rhum.testCase(
      "Doesn't stay within the boudaries of the month if the 'bound' parameter is false",
      () => {
        const chrono = new Chrono("May 31 2020 00:00:00");

        const res = chrono.toNearestWeekday(false);

        expect(new Date(res).getFullYear()).toEqual(2020);
        expect(new Date(res).getMonth()).toEqual(5);
        expect(new Date(res).getDate()).toEqual(1);
      },
    );

    Rhum.testCase("The 'bound' parameter defaults to true", () => {
      const chrono = new Chrono("May 31 2020 00:00:00");

      const res = chrono.toNearestWeekday();

      expect(new Date(res).getFullYear()).toEqual(2020);
      expect(new Date(res).getMonth()).toEqual(4);
      expect(new Date(res).getDate()).toEqual(29);
    });
  });
});

Rhum.run();
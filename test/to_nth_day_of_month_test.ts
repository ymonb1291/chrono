import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_nth_day_of_month_test.ts", () => {
  Rhum.testSuite("toNthDayOfMonth()", () => {
    Rhum.testCase("d#1 means 1st occurence of day d", () => {
      const chrono = new Chrono("Jan 21 2000 00:00:00");
      let res = chrono.toNthDayOfMonth(3, 1);

      if (res) {
        expect(new Date(res).getFullYear()).toEqual(2000);
        expect(new Date(res).getMonth()).toEqual(0);
        expect(new Date(res).getDate()).toEqual(5);
      } else {
        expect(false).toEqual(true);
      }
    });

    Rhum.testCase("d#1 means 2nd occurence of day d", () => {
      const chrono = new Chrono("Jan 21 2000 00:00:00");
      let res = chrono.toNthDayOfMonth(3, 2);

      if (res) {
        expect(new Date(res).getFullYear()).toEqual(2000);
        expect(new Date(res).getMonth()).toEqual(0);
        expect(new Date(res).getDate()).toEqual(12);
      } else {
        expect(false).toEqual(true);
      }
    });

    Rhum.testCase(
      "d#5 means 5th occurence of day d and modifies the instance of Chrono",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        let res = chrono.toNthDayOfMonth(6, 5);

        if (res) {
          expect(new Date(res).getFullYear()).toEqual(2000);
          expect(new Date(res).getMonth()).toEqual(0);
          expect(new Date(res).getDate()).toEqual(29);
        } else {
          expect(false).toEqual(true);
        }
      },
    );

    Rhum.testCase(
      "returns undefined when the nth occurence doesn't exist and doesn't modify the instance of Chrono",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        let res = chrono.toNthDayOfMonth(4, 5);

        if (res) {
          expect(false).toEqual(true);
        } else {
          expect(new Date(chrono).getTime()).toEqual(chrono.getTime());
          expect(res).toEqual(void 0);
        }
      },
    );

    Rhum.testCase(
      "Throws an error when parameter 'day' is < 0",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        const t = () => {
          chrono.toNthDayOfMonth(-1, 1);
        };

        expect(t).toThrow();
      },
    );

    Rhum.testCase(
      "Throws an error when parameter 'day' is > 6",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        const t = () => {
          chrono.toNthDayOfMonth(7, 1);
        };

        expect(t).toThrow();
      },
    );

    Rhum.testCase(
      "Throws an error when parameter 'occurence' is < 1",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        const t = () => {
          chrono.toNthDayOfMonth(1, 0);
        };

        expect(t).toThrow();
      },
    );

    Rhum.testCase(
      "Throws an error when parameter 'occurence' is > 5",
      () => {
        const chrono = new Chrono("Jan 21 2000 00:00:00");
        const t = () => {
          chrono.toNthDayOfMonth(1, 6);
        };

        expect(t).toThrow();
      },
    );
  });
});

Rhum.run();

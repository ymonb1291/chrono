import { Chrono } from "./chrono.ts";
import { expect, Rhum } from "./deps_test.ts";

Rhum.testPlan("chrono_test.ts", () => {

  Rhum.testSuite("Chrono instance", () => {

    Rhum.testCase("Is equivalent to a Date object", () => {
      const chrono: Date = new Chrono(2011, 10, 28);
      const date: Date = new Date(chrono);
      expect(date.toString()).toEqual(chrono.toString());
    });

  });

  Rhum.testSuite("Chrono constuctor", () => {

    Rhum.testCase("Behaves like Date without argument", () => {
      const date = new Date();
      const chrono = new Chrono();
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 1 argument of type number", () => {
      const date = new Date(2000);
      const chrono = new Chrono(2000);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 1 argument of type string", () => {
      const date = new Date("2000-10-10");
      const chrono = new Chrono("2000-10-10");
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 1 argument of type Date", () => {
      const arg = new Date(0);
      const date = new Date(arg);
      const chrono = new Chrono(arg);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 1 argument of type Chrono", () => {
      const arg = new Chrono(0);
      const date = new Date(arg);
      const chrono = new Chrono(arg);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 2 arguments of type number", () => {
      const date = new Date(2000, 10);
      const chrono = new Chrono(2000, 10);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 3 arguments of type number", () => {
      const date = new Date(2000, 10, 25);
      const chrono = new Chrono(2000, 10, 25);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 4 arguments of type number", () => {
      const date = new Date(2000, 10, 25, 17);
      const chrono = new Chrono(2000, 10, 25, 17);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 5 arguments of type number", () => {
      const date = new Date(2000, 10, 25, 17, 50);
      const chrono = new Chrono(2000, 10, 25, 17, 50);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 6 arguments of type number", () => {
      const date = new Date(2000, 10, 25, 17, 50, 59);
      const chrono = new Chrono(2000, 10, 25, 17, 50, 59);
      expect(date.toString()).toEqual(chrono.toString());
    });

    Rhum.testCase("Behaves like Date with 7 arguments of type number", () => {
      const date = new Date(2000, 10, 25, 17, 50, 59, 999);
      const chrono = new Chrono(2000, 10, 25, 17, 50, 59, 999);
      expect(date.toString()).toEqual(chrono.toString());
      expect(date.getMilliseconds()).toEqual(chrono.getMilliseconds());
    });

  });

});

Rhum.run();
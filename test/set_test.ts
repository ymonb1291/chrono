import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("set_test.ts", () => {

  Rhum.testSuite("set()", () => {

    Rhum.testCase("Allows for argument of type number", () => {
      const chrono = new Chrono();
      chrono.set(0);
      expect(chrono.getUTCFullYear()).toEqual(1970);
    });

    Rhum.testCase("Allows for argument of type Date", () => {
      const chrono = new Chrono();
      chrono.set(new Date(0));
      expect(chrono.getUTCFullYear()).toEqual(1970);
    });

    Rhum.testCase("Allows for argument of type Chrono", () => {
      const chrono = new Chrono();
      chrono.set(new Chrono(0));
      expect(chrono.getUTCFullYear()).toEqual(1970);
    });

  });

});

Rhum.run();
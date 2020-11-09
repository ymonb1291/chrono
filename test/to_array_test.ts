import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_array_test.ts", () => {

  Rhum.testSuite("toArray()", () => {

    Rhum.testCase("Returns an array of length 7", () => {
      const chrono = new Chrono("Feb 01 2020 00:00:00");
      
      const res = chrono.toArray();
      
      expect(Array.isArray(res)).toBeTruthy();
      expect(res.length).toEqual(7);
    });

    Rhum.testCase("Returns the locale components of the date", () => {
      const chrono = new Chrono("Feb 01 2020 00:00:00");
      
      const res = chrono.toArray();
      
      expect(res[0]).toEqual(2020);
      expect(res[1]).toEqual(1);
      expect(res[2]).toEqual(1);
      expect(res[3]).toEqual(0);
      expect(res[4]).toEqual(0);
      expect(res[5]).toEqual(0);
      expect(res[6]).toEqual(0);
    });

  });

});

Rhum.run();
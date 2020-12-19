import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("to_utc_array_test.ts", () => {

  Rhum.testSuite("toUTCArray()", () => {

    Rhum.testCase("Returns an array of length 7", () => {
      const chrono = new Chrono("Feb 01 2020 00:00:00");
      
      const res = chrono.toUTCArray();
      
      expect(Array.isArray(res)).toBeTruthy();
      expect(res.length).toEqual(7);
    });

    Rhum.testCase("Returns the UTC components of the date", () => {
      const chrono = new Chrono("Feb 01 2020 00:00:00");
      
      const res = chrono.toUTCArray();
      
      expect(res[0]).toEqual(chrono.getUTCFullYear());
      expect(res[1]).toEqual(chrono.getUTCMonth());
      expect(res[2]).toEqual(chrono.getUTCDate());
      expect(res[3]).toEqual(chrono.getUTCHours());
      expect(res[4]).toEqual(chrono.getUTCMinutes());
      expect(res[5]).toEqual(chrono.getUTCSeconds());
      expect(res[6]).toEqual(chrono.getUTCMilliseconds());
    });

  });

});

Rhum.run();
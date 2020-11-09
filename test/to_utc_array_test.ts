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
      
      expect(res[0]).toEqual(2020);
      expect(res[1]).toEqual(0);
      expect(res[2]).toEqual(31);
      expect(res[3]).toEqual(23);
      expect(res[4]).toEqual(0);
      expect(res[5]).toEqual(0);
      expect(res[6]).toEqual(0);
    });

  });

});

Rhum.run();
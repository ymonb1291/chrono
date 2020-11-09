import { Chrono } from "../chrono.ts";
import { expect, Rhum } from "../deps_test.ts";

Rhum.testPlan("is_utc_leap_year_test.ts", () => {

  Rhum.testSuite("isUTCLeapYear()", () => {

    Rhum.testCase("1900 is not a leap year", () => {
      const chrono = new Chrono("Feb 01 1900 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeFalsy();
    });

    Rhum.testCase("2000 is a leap year", () => {
      const chrono = new Chrono("Feb 01 2000 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeTruthy();
    });

    Rhum.testCase("2100 is not a leap year", () => {
      const chrono = new Chrono("Feb 01 2100 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeFalsy();
    });

    Rhum.testCase("2200 is not a leap year", () => {
      const chrono = new Chrono("Feb 01 2200 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeFalsy();
    });

    Rhum.testCase("2300 is not a leap year", () => {
      const chrono = new Chrono("Feb 01 2300 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeFalsy();
    });

    Rhum.testCase("2400 is a leap year", () => {
      const chrono = new Chrono("Feb 01 2400 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeTruthy();
    });

    Rhum.testCase("Checks the UTC date", () => {
      const chrono = new Chrono("Jan 01 2000 00:00:00");
      
      const res = chrono.isUTCLeapYear();
      
      expect(res).toBeFalsy();
    });

  });

});

Rhum.run();
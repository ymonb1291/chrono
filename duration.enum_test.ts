import { expect, Rhum } from "./deps_test.ts";
import { Duration } from "./duration.enum.ts";

Rhum.testPlan("duration_test.ts", () => {

  Rhum.testSuite("Duration", () => {

    Rhum.testCase("Contains keys WEEK, DAY, HOUR, MINUTE and SECOND", () => {
      const keys: string[] = [
        "WEEK",
        "DAY",
        "HOUR",
        "MINUTE",
        "SECOND",
      ];

      const includes = keys
        .map(key => Object.keys(Duration)
        .includes(key))
        .every(val => val);

      expect(includes).toEqual(true);
    });

    Rhum.testCase("Duration.WEEK equals 604800000s", () => {
      expect(Duration.WEEK).toEqual(604800000);
    });

    Rhum.testCase("Duration.DAY equals 86400000s", () => {
      expect(Duration.DAY).toEqual(86400000);
    });

    Rhum.testCase("Duration.HOUR equals 3600000s", () => {
      expect(Duration.HOUR).toEqual(3600000);
    });

    Rhum.testCase("Duration.MINUTE equals 60000s", () => {
      expect(Duration.MINUTE).toEqual(60000);
    });

    Rhum.testCase("Duration.SECOND equals 1000s", () => {
      expect(Duration.SECOND).toEqual(1000);
    });

  });

});

Rhum.run();
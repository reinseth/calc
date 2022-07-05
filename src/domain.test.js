import { handleAction } from "./domain";

describe("handleAction", () => {
  test("unhandled action", () => {
    expect(() => handleAction({}, "unknown")).toThrow();
  });

  test("clear", () => {
    expect(handleAction({ expression: [] }, "C")).toEqual({ expression: [] });
    expect(handleAction({ expression: [1] }, "C")).toEqual({ expression: [] });
    expect(handleAction({ expression: [1, "+"] }, "C")).toEqual({
      expression: [1],
    });
    expect(handleAction({ expression: [1, "+", 1] }, "C")).toEqual({
      expression: [1, "+"],
    });
  });

  describe("number input", () => {
    test("empty expression", () => {
      expect(handleAction({ expression: [] }, "0")).toEqual({
        expression: [0],
      });
    });

    test("existing operand", () => {
      expect(handleAction({ expression: [0] }, "0")).toEqual({
        expression: [0],
      });
      expect(handleAction({ expression: [0] }, "1")).toEqual({
        expression: [1],
      });
      expect(handleAction({ expression: [1] }, "1")).toEqual({
        expression: [11],
      });
    });

    test("existing operand and operator", () => {
      expect(handleAction({ expression: [1, "+"] }, "1")).toEqual({
        expression: [1, "+", 1],
      });
      expect(handleAction({ expression: [1, "+", 1] }, "1")).toEqual({
        expression: [1, "+", 11],
      });
    });

    test("handles all numbers", () => {
      for (let i = 0; i < 10; i++) {
        expect(handleAction({ expression: [] }, String(i))).toEqual({
          expression: [i],
        });
      }
    });
  });
});

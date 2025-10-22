import { sub } from "../sum";

describe("sum module", () => {
  test("sum 2-2 to equal 0", () => {
    const res = sub(2, 2);
    expect(res).toBe(0);
  });
   test("sum 5-2 to equal 3", () => {
    const res = sub(5, 2);
    expect(res).toBe(3);
  });
});

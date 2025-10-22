import sum from "../sum";

describe("sub module", () => {
  test("adds 1 + 2 to equal 3", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });
  test("adds 4 + 2 to equal 6", () => {
    const res = sum(4, 2);
    expect(res).toBe(6);
  });
});

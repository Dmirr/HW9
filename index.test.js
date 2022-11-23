const calculateBonus = require("./index.js");
describe("тестирование расчета бонуса", () => {
  it("Суммированние положительных чисел", () => {
    expect(calculateBonus(10, 40)).toBe(50);
    expect(calculateBonus(27, 23)).toEqual(50);
  });
  it("Проверка результата на больше или меньше", () => {
    expect(calculateBonus(10, 40)).toBeGreaterThanOrEqual(50);
    expect(calculateBonus(10, 10)).toBeLessThan(50);
  });
});

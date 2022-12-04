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
  it("Проверка граничных значений:граница => 50", () => {
    expect(calculateBonus(30, 20)).toBe(50);
  });
  it("Граница < 50", () => {
    expect(calculateBonus(19, 30)).toBe(49);
  });
  it("Сумма дробных чисел", () => {
    expect(calculateBonus(0.3, 0.2)).toBeCloseTo(0.5);
  });
  it("Bonus", () => {
    expect(calculateBonus(10, 40)).toBeGreaterThanOrEqual(50);
    console.log("bonus = 50");
  });
});

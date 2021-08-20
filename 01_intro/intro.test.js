const { summ, nativeNull } = require("./intro");

describe("Summ", ()=>{
    test('add 2 plus 4 equals 6', () => {
        expect(summ(2,4)).toBe(6)
    })
    test("should be return correctly value comparing to other value", ()=>{
        expect(summ(2,4)).toBeGreaterThan(5);
        expect(summ(2,4)).toBeGreaterThanOrEqual(6);
        expect(summ(2,4)).toBeLessThan(7);
        expect(summ(2,4)).toBeLessThanOrEqual(6)
    })
    test("should summ two float values correctly", ()=>{
        expect(summ(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe("Native Null function", ()=>{
    test("should false value null", ()=>{
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    })
})

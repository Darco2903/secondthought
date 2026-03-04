import { describe, it, expect } from "vitest";
import { Hour, Millisecond, Second } from "../../src";

//////////////////////////
// Clone

describe("Clone", () => {
    it("should return a new instance of the same time unit with the same time value", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = time1.clone(); // Clone time1
        expect(time2).not.toBe(time1); // time2 should be a different instance
        expect(time2.time).toBe(time1.time);
        expect(time2.getUnit()).toBe(time1.getUnit());
    });
});

//////////////////////////
// toLike

describe("toLike", () => {
    it("should convert time to the same unit as the other time (same units)", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(10); // 10 seconds
        const result = time1.toLike(time2);
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(30); // Time value should be the same as time1
    });

    it("should convert time to the same unit as the other time with different units", () => {
        const time1 = new Hour(1); // 1 hour
        const time2 = new Second(30); // 30 seconds
        const result = time1.toLike(time2);
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(3600); // 1 hour is 3600 seconds
    });
});

//////////////////////////
// Add

describe("Add", () => {
    it("should add two times and return the correct result", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(60); // 60 seconds
        const result = time1.add(time2); // Convert total time to seconds
        expect(time1).toBe(result); // add should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(90); // 30s + 60s = 90s
    });

    it("should add two times with different units and return the correct result", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Hour(1); // 1 hour
        const result = time1.add(time2); // Convert total time to seconds
        expect(time1).toBe(result); // add should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(3630); // 30s + 3600s = 3630s
    });

    it("should add two times with negative values and return the correct result", () => {
        const time1 = new Second(-30); // -30 seconds
        const time2 = new Second(60); // 60 seconds
        const result = time1.add(time2);
        expect(time1).toBe(result); // add should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(30); // -30s + 60s = 30s
    });
});

//////////////////////////
// Subtract

describe("Subtract", () => {
    it("should subtract two times and return the correct result", () => {
        const time1 = new Second(60); // 60 seconds
        const time2 = new Second(30); // 30 seconds
        const result = time1.subtract(time2); // Convert total time to seconds
        expect(time1).toBe(result); // subtract should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(30); // 60s - 30s = 30s
    });

    it("should subtract two times with different units and return the correct result", () => {
        const time1 = new Hour(1); // 1 hour
        const time2 = new Second(30); // 30 seconds
        const result = time1.subtract(time2); // Convert total time to seconds
        expect(time1).toBe(result); // subtract should modify the original instance
        expect(result).toBeInstanceOf(Hour); // Result should be a Hour instance
        expect(result.toSecond().time).toBe(3570); // 3600s - 30s = 3570s
    });

    it("should subtract two times with negative values and return the correct result", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(-60); // -60 seconds
        const result = time1.subtract(time2);
        expect(time1).toBe(result); // subtract should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(90); // 30s - (-60s) = 90s
    });
});

//////////////////////////
// Abs

describe("Abs", () => {
    it("should return the absolute value of a time with a negative value", () => {
        const time = new Second(-30); // -30 seconds
        const result = time.abs();
        expect(time).toBe(result); // abs should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(30); // |-30s| = 30s
    });

    it("should return the same value for a time with a positive value", () => {
        const time = new Second(30); // 30 seconds
        const result = time.abs();
        expect(time).toBe(result); // abs should modify the original instance
        expect(result).toBeInstanceOf(Second); // Result should be a Second instance
        expect(result.time).toBe(30); // |30s| = 30s
    });
});

//////////////////////////
// Diff

describe("Diff", () => {
    it("should return the absolute difference between two times", () => {
        const time1 = new Second(60); // 60 seconds
        const time2 = new Second(30); // 30 seconds
        const result = time1.diff(time2).toSecond();
        expect(result.time).toBe(30); // |60s - 30s| = 30s
    });

    it("should return the absolute difference between two times", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(60); // 60 seconds
        const result = time1.diff(time2).toSecond();
        expect(result.time).toBe(30); // |30s - 60s| = 30s
    });

    it("should return the absolute difference between two times with different units", () => {
        const time1 = new Hour(1); // 1 hour
        const time2 = new Second(30); // 30 seconds
        const result = time1.diff(time2).toSecond();
        expect(result.time).toBe(3570); // |3600s - 30s| = 3570s
    });

    it("should return the absolute difference between two times with negative values", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(-60); // -60 seconds
        const result = time1.diff(time2).toSecond();
        expect(result.time).toBe(90); // |30s - (-60s)| = 90s
    });
});

//////////////////////////
// Equals & Not Equals

describe("Equals & Not Equals", () => {
    it("should compare two times for equality", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Millisecond(30_000); // 30,000 milliseconds
        expect(time1.equals(time2)).toBe(true); // 30s is equal to 30,000ms
        expect(time1.notEquals(time2)).toBe(false); // 30s is not not equal to 30,000ms
    });

    it("should compare two times for inequality", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Millisecond(30_001); // 30,001 milliseconds
        expect(time1.notEquals(time2)).toBe(true); // 30s is not equal to 30,001ms
        expect(time1.equals(time2)).toBe(false); // 30s is not equal to 30,001ms
    });
});

//////////////////////////
// Greater Than & Less Than

describe("Greater Than & Less Than", () => {
    it("should compare two times for greater than", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(60); // 60 seconds
        expect(time1.greaterThan(time2)).toBe(false); // 30s is not greater than 60s
        expect(time2.greaterThan(time1)).toBe(true); // 60s is greater than 30s
        expect(time1.greaterThanOrEqual(time2)).toBe(false); // 30s is not greater than 60s
        expect(time2.greaterThanOrEqual(time1)).toBe(true); // 60s is greater than 30s
    });

    it("should compare two times for less than", () => {
        const time1 = new Second(30); // 30 seconds
        const time2 = new Second(60); // 60 seconds
        expect(time1.lessThan(time2)).toBe(true); // 30s is less than 60s
        expect(time2.lessThan(time1)).toBe(false); // 60s is not less than 30s
        expect(time1.lessThanOrEqual(time2)).toBe(true); // 30s is less than 60s
        expect(time2.lessThanOrEqual(time1)).toBe(false); // 60s is not less than 30s
    });

    it("should compare two times with different units for greater than", () => {
        const time1 = new Hour(1); // 1 hour
        const time2 = new Second(30);
        expect(time1.greaterThan(time2)).toBe(true); // 1 hour is greater than 30 seconds
        expect(time2.greaterThan(time1)).toBe(false); // 30 seconds is not greater than 1 hour
        expect(time1.greaterThanOrEqual(time2)).toBe(true); // 1 hour is greater than 30 seconds
        expect(time2.greaterThanOrEqual(time1)).toBe(false); // 30 seconds is not greater than 1 hour
    });

    it("should compare two times with different units for less than", () => {
        const time1 = new Hour(1); // 1 hour
        const time2 = new Second(30);
        expect(time1.lessThan(time2)).toBe(false); // 1 hour is not less than 30 seconds
        expect(time2.lessThan(time1)).toBe(true); // 30 seconds is less than 1 hour
        expect(time1.lessThanOrEqual(time2)).toBe(false); // 1 hour is not less than 30 seconds
        expect(time2.lessThanOrEqual(time1)).toBe(true); // 30 seconds is less than 1 hour
    });
});

//////////////////////////
// toString & toStringWithUnit

describe("toString & toStringWithUnit", () => {
    it("should return the time value as a string (Second)", () => {
        const time = new Second(30); // 30 seconds
        expect(time.toString()).toBe("30"); // Time value as string should be "30"
    });

    it("should return the time value with unit as a string (Second)", () => {
        const time = new Second(30); // 30 seconds
        expect(time.toStringWithUnit()).toBe("30s"); // Time value with unit as string should be "30s"
    });

    it("should return the time value as a string (Millisecond)", () => {
        const time = new Millisecond(30_000); // 30,000 milliseconds
        expect(time.toString()).toBe("30000"); // Time value as string should be "30000"
    });

    it("should return the time value with unit as a string (Millisecond)", () => {
        const time = new Millisecond(30_000); // 30,000 milliseconds
        expect(time.toStringWithUnit()).toBe("30000ms"); // Time value with unit as string should be "30000ms"
    });
});

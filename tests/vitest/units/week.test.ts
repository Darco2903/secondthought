import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Week

describe("Week", () => {
    it("should create a Week instance", () => {
        const week = new Week(1);
        expect(week).toBeInstanceOf(Week);
        expect(week.time).toBe(1);
        expect(week.getUnit()).toBe("w");
    });
});

describe("Week toWeek", () => {
    it("should return a Week instance", () => {
        const week = new Week(1);
        const result = week.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should return the same time in days", () => {
        const week = new Week(1);
        const result = week.toDay();
        expect(result.time).toBe(7);
    });
});

describe("Week toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const week = new Week(1);
        const result = week.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert weeks to nanoseconds correctly", () => {
        const week = new Week(1);
        const result = week.toNanosecond();
        expect(result.time).toBe(86_400_000_000_000 * 7);
    });

    it("should convert weeks to nanoseconds with decimal", () => {
        const week = new Week(1.5);
        const result = week.toNanosecond();
        expect(result.time).toBe(129_600_000_000_000 * 7);
    });

    it("should convert weeks to nanoseconds with zero", () => {
        const week = new Week(0);
        const result = week.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to nanoseconds with negative value", () => {
        const week = new Week(-1);
        const result = week.toNanosecond();
        expect(result.time).toBe(-86_400_000_000_000 * 7);
    });
});

describe("Week toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const week = new Week(1);
        const result = week.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert weeks to microseconds correctly", () => {
        const week = new Week(1);
        const result = week.toMicrosecond();
        expect(result.time).toBe(86_400_000_000 * 7);
    });

    it("should convert weeks to microseconds with decimal", () => {
        const week = new Week(1.5);
        const result = week.toMicrosecond();
        expect(result.time).toBe(129_600_000_000 * 7);
    });

    it("should convert weeks to microseconds with zero", () => {
        const week = new Week(0);
        const result = week.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to microseconds with negative value", () => {
        const week = new Week(-1);
        const result = week.toMicrosecond();
        expect(result.time).toBe(-86_400_000_000 * 7);
    });
});

describe("Week toMilliseconds", () => {
    it("should return a Millisecond instance", () => {
        const week = new Week(1);
        const result = week.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert weeks to milliseconds correctly", () => {
        const week = new Week(1);
        const result = week.toMillisecond();
        expect(result.time).toBe(86_400_000 * 7);
    });

    it("should convert weeks to milliseconds with decimal", () => {
        const week = new Week(1.5);
        const result = week.toMillisecond();
        expect(result.time).toBe(129_600_000 * 7);
    });

    it("should convert weeks to milliseconds with zero", () => {
        const week = new Week(0);
        const result = week.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to milliseconds with negative value", () => {
        const week = new Week(-1);
        const result = week.toMillisecond();
        expect(result.time).toBe(-86_400_000 * 7);
    });
});

describe("Week toSeconds", () => {
    it("should return a Second instance", () => {
        const week = new Week(1);
        const result = week.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert weeks to seconds correctly", () => {
        const week = new Week(1);
        const result = week.toSecond();
        expect(result.time).toBe(86_400 * 7);
    });

    it("should convert weeks to seconds with decimal", () => {
        const week = new Week(1.5);
        const result = week.toSecond();
        expect(result.time).toBe(129_600 * 7);
    });

    it("should convert weeks to seconds with zero", () => {
        const week = new Week(0);
        const result = week.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to seconds with negative value", () => {
        const week = new Week(-1);
        const result = week.toSecond();
        expect(result.time).toBe(-86_400 * 7);
    });
});

describe("Week toMinute", () => {
    it("should return a Week instance", () => {
        const week = new Week(1);
        const result = week.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert weeks to minutes correctly", () => {
        const week = new Week(1);
        const result = week.toMinute();
        expect(result.time).toBe(10_080);
    });

    it("should convert weeks to minutes with decimal", () => {
        const week = new Week(1.5);
        const result = week.toMinute();
        expect(result.time).toBe(15_120);
    });

    it("should convert weeks to minutes with zero", () => {
        const week = new Week(0);
        const result = week.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to minutes with negative value", () => {
        const week = new Week(-1);
        const result = week.toMinute();
        expect(result.time).toBe(-10_080);
    });
});

describe("Week toHour", () => {
    it("should return a Week instance", () => {
        const week = new Week(1);
        const result = week.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert weeks to hours correctly", () => {
        const week = new Week(1);
        const result = week.toHour();
        expect(result.time).toBe(168);
    });

    it("should convert weeks to hours with decimal", () => {
        const week = new Week(1.5);
        const result = week.toHour();
        expect(result.time).toBe(252);
    });

    it("should convert weeks to hours with zero", () => {
        const week = new Week(0);
        const result = week.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to hours with negative value", () => {
        const week = new Week(-1);
        const result = week.toHour();
        expect(result.time).toBe(-168);
    });
});

describe("Week toDay", () => {
    it("should return a Week instance", () => {
        const week = new Week(1);
        const result = week.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert weeks to days correctly", () => {
        const week = new Week(1);
        const result = week.toDay();
        expect(result.time).toBe(7);
    });

    it("should convert weeks to days with decimal", () => {
        const week = new Week(1.5);
        const result = week.toDay();
        expect(result.time).toBe(10.5);
    });

    it("should convert weeks to days with zero", () => {
        const week = new Week(0);
        const result = week.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert weeks to days with negative value", () => {
        const week = new Week(-1);
        const result = week.toDay();
        expect(result.time).toBe(-7);
    });
});

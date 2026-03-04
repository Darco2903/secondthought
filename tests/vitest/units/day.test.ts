import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Day

describe("Day", () => {
    it("should create a Day instance", () => {
        const day = new Day(1);
        expect(day).toBeInstanceOf(Day);
        expect(day.time).toBe(1);
        expect(day.getUnit()).toBe("d");
    });
});

describe("Day toDay", () => {
    it("should return a Hour instance", () => {
        const day = new Day(1);
        const result = day.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should return the same time in hours", () => {
        const day = new Day(1);
        const result = day.toHour();
        expect(result.time).toBe(24);
    });
});

describe("Day toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const day = new Day(1);
        const result = day.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert days to nanoseconds correctly", () => {
        const day = new Day(1);
        const result = day.toNanosecond();
        expect(result.time).toBe(86_400_000_000_000);
    });

    it("should convert days to nanoseconds with decimal", () => {
        const day = new Day(1.5);
        const result = day.toNanosecond();
        expect(result.time).toBe(129_600_000_000_000);
    });

    it("should convert days to nanoseconds with zero", () => {
        const day = new Day(0);
        const result = day.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert days to nanoseconds with negative value", () => {
        const day = new Day(-1);
        const result = day.toNanosecond();
        expect(result.time).toBe(-86_400_000_000_000);
    });
});

describe("Day toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const day = new Day(1);
        const result = day.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert days to microseconds correctly", () => {
        const day = new Day(1);
        const result = day.toMicrosecond();
        expect(result.time).toBe(86_400_000_000);
    });

    it("should convert days to microseconds with decimal", () => {
        const day = new Day(1.5);
        const result = day.toMicrosecond();
        expect(result.time).toBe(129_600_000_000);
    });

    it("should convert days to microseconds with zero", () => {
        const day = new Day(0);
        const result = day.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert days to microseconds with negative value", () => {
        const day = new Day(-1);
        const result = day.toMicrosecond();
        expect(result.time).toBe(-86_400_000_000);
    });
});

describe("Day toMilliseconds", () => {
    it("should return a Millisecond instance", () => {
        const day = new Day(1);
        const result = day.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert days to milliseconds correctly", () => {
        const day = new Day(1);
        const result = day.toMillisecond();
        expect(result.time).toBe(86_400_000);
    });

    it("should convert days to milliseconds with decimal", () => {
        const day = new Day(1.5);
        const result = day.toMillisecond();
        expect(result.time).toBe(129_600_000);
    });

    it("should convert days to milliseconds with zero", () => {
        const day = new Day(0);
        const result = day.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert days to milliseconds with negative value", () => {
        const day = new Day(-1);
        const result = day.toMillisecond();
        expect(result.time).toBe(-86_400_000);
    });
});

describe("Day toSeconds", () => {
    it("should return a Second instance", () => {
        const day = new Day(1);
        const result = day.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert days to seconds correctly", () => {
        const day = new Day(1);
        const result = day.toSecond();
        expect(result.time).toBe(86_400);
    });

    it("should convert days to seconds with decimal", () => {
        const day = new Day(1.5);
        const result = day.toSecond();
        expect(result.time).toBe(129_600);
    });

    it("should convert days to seconds with zero", () => {
        const day = new Day(0);
        const result = day.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert days to seconds with negative value", () => {
        const day = new Day(-1);
        const result = day.toSecond();
        expect(result.time).toBe(-86_400);
    });
});

describe("Day toMinute", () => {
    it("should return a Day instance", () => {
        const day = new Day(1);
        const result = day.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert days to minutes correctly", () => {
        const day = new Day(1);
        const result = day.toMinute();
        expect(result.time).toBe(1440);
    });

    it("should convert days to minutes with decimal", () => {
        const day = new Day(1.5);
        const result = day.toMinute();
        expect(result.time).toBe(2160);
    });

    it("should convert days to minutes with zero", () => {
        const day = new Day(0);
        const result = day.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert days to minutes with negative value", () => {
        const day = new Day(-1);
        const result = day.toMinute();
        expect(result.time).toBe(-1440);
    });
});

describe("Day toHour", () => {
    it("should return a Day instance", () => {
        const day = new Day(1);
        const result = day.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert days to hours correctly", () => {
        const day = new Day(1);
        const result = day.toHour();
        expect(result.time).toBe(24);
    });

    it("should convert days to hours with decimal", () => {
        const day = new Day(1.5);
        const result = day.toHour();
        expect(result.time).toBe(36);
    });

    it("should convert days to hours with zero", () => {
        const day = new Day(0);
        const result = day.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert days to hours with negative value", () => {
        const day = new Day(-1);
        const result = day.toHour();
        expect(result.time).toBe(-24);
    });
});

describe("Day toWeek", () => {
    it("should return a Day instance", () => {
        const day = new Day(1);
        const result = day.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert days to weeks correctly", () => {
        const day = new Day(7);
        const result = day.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert days to weeks with decimal", () => {
        const day = new Day(10.5);
        const result = day.toWeek();
        expect(result.time).toBe(1.5);
    });

    it("should convert days to weeks with zero", () => {
        const day = new Day(0);
        const result = day.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert days to weeks with negative value", () => {
        const day = new Day(-7);
        const result = day.toWeek();
        expect(result.time).toBe(-1);
    });
});

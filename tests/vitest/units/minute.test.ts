import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Minute

describe("Minute", () => {
    it("should create a Minute instance", () => {
        const minute = new Minute(1);
        expect(minute).toBeInstanceOf(Minute);
        expect(minute.time).toBe(1);
        expect(minute.getUnit()).toBe("min");
    });
});

describe("Minute toSeconds", () => {
    it("should return a Minute instance", () => {
        const minute = new Minute(1);
        const result = minute.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should return the same time in seconds", () => {
        const minute = new Minute(1);
        const result = minute.toMinute();
        expect(result.time).toBe(1);
    });
});

describe("Minute toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const minute = new Minute(1);
        const result = minute.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert minutes to nanoseconds correctly", () => {
        const minute = new Minute(2);
        const result = minute.toNanosecond();
        expect(result.time).toBe(120_000_000_000);
    });

    it("should convert minutes to nanoseconds with decimal", () => {
        const minute = new Minute(1.5);
        const result = minute.toNanosecond();
        expect(result.time).toBe(90_000_000_000);
    });

    it("should convert minutes to nanoseconds with zero", () => {
        const minute = new Minute(0);
        const result = minute.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to nanoseconds with negative value", () => {
        const minute = new Minute(-1);
        const result = minute.toNanosecond();
        expect(result.time).toBe(-60_000_000_000);
    });
});

describe("Minute toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const minute = new Minute(1);
        const result = minute.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert minutes to microseconds correctly", () => {
        const minute = new Minute(1);
        const result = minute.toMicrosecond();
        expect(result.time).toBe(60_000_000);
    });

    it("should convert minutes to microseconds with decimal", () => {
        const minute = new Minute(1.5);
        const result = minute.toMicrosecond();
        expect(result.time).toBe(90_000_000);
    });

    it("should convert minutes to microseconds with zero", () => {
        const minute = new Minute(0);
        const result = minute.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to microseconds with negative value", () => {
        const minute = new Minute(-1);
        const result = minute.toMicrosecond();
        expect(result.time).toBe(-60_000_000);
    });
});

describe("Minute toMilliseconds", () => {
    it("should return a Millisecond instance", () => {
        const minute = new Minute(1);
        const result = minute.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert minutes to milliseconds correctly", () => {
        const minute = new Minute(2);
        const result = minute.toMillisecond();
        expect(result.time).toBe(120_000);
    });

    it("should convert minutes to milliseconds with decimal", () => {
        const minute = new Minute(1.5);
        const result = minute.toMillisecond();
        expect(result.time).toBe(90_000);
    });

    it("should convert minutes to milliseconds with zero", () => {
        const minute = new Minute(0);
        const result = minute.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to milliseconds with negative value", () => {
        const minute = new Minute(-1);
        const result = minute.toMillisecond();
        expect(result.time).toBe(-60_000);
    });
});

describe("Minute toSeconds", () => {
    it("should return a Second instance", () => {
        const minute = new Minute(1);
        const result = minute.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert minutes to seconds correctly", () => {
        const minute = new Minute(2);
        const result = minute.toSecond();
        expect(result.time).toBe(120);
    });

    it("should convert minutes to seconds with decimal", () => {
        const minute = new Minute(1.5);
        const result = minute.toSecond();
        expect(result.time).toBe(90);
    });

    it("should convert minutes to seconds with zero", () => {
        const minute = new Minute(0);
        const result = minute.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to seconds with negative value", () => {
        const minute = new Minute(-1);
        const result = minute.toSecond();
        expect(result.time).toBe(-60);
    });
});

describe("Minute toHours", () => {
    it("should return a Hour instance", () => {
        const minute = new Minute(60);
        const result = minute.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert minutes to hours correctly", () => {
        const minute = new Minute(120);
        const result = minute.toHour();
        expect(result.time).toBe(2);
    });

    it("should convert minutes to hours with decimal", () => {
        const minute = new Minute(90);
        const result = minute.toHour();
        expect(result.time).toBe(1.5);
    });

    it("should convert minutes to hours with zero", () => {
        const minute = new Minute(0);
        const result = minute.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to hours with negative value", () => {
        const minute = new Minute(-60);
        const result = minute.toHour();
        expect(result.time).toBe(-1);
    });
});

describe("Minute toDay", () => {
    it("should return a Day instance", () => {
        const minute = new Minute(1_440);
        const result = minute.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert minutes to days correctly", () => {
        const hour = new Hour(1);
        const result = hour.toMinute();
        expect(result.time).toBe(60);
    });

    it("should convert minutes to days with decimal", () => {
        const minute = new Minute(2160);
        const result = minute.toDay();
        expect(result.time).toBe(1.5);
    });

    it("should convert minutes to days with zero", () => {
        const minute = new Minute(0);
        const result = minute.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to days with negative value", () => {
        const minute = new Minute(-1440);
        const result = minute.toDay();
        expect(result.time).toBe(-1);
    });
});

describe("Minute toWeek", () => {
    it("should return a Week instance", () => {
        const minute = new Minute(10080);
        const result = minute.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert minutes to weeks correctly", () => {
        const minute = new Minute(10080);
        const result = minute.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert minutes to weeks with decimal", () => {
        const minute = new Minute(10080);
        const result = minute.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert minutes to weeks with zero", () => {
        const minute = new Minute(0);
        const result = minute.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert minutes to weeks with negative value", () => {
        const minute = new Minute(-10080);
        const result = minute.toWeek();
        expect(result.time).toBe(-1);
    });
});

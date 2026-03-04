import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Microsecond

describe("Microsecond", () => {
    it("should create a Microsecond instance", () => {
        const microsecond = new Microsecond(1);
        expect(microsecond).toBeInstanceOf(Microsecond);
        expect(microsecond.time).toBe(1);
        expect(microsecond.getUnit()).toBe("µs");
    });
});

describe("Microsecond toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const microsecond = new Microsecond(1);
        const result = microsecond.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should return the same time in seconds", () => {
        const microsecond = new Microsecond(1_000_000);
        const result = microsecond.toMicrosecond();
        expect(result.time).toBe(1_000_000);
    });
});

describe("Microsecond toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const microsecond = new Microsecond(1_000_000);
        const result = microsecond.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert microseconds to nanoseconds correctly", () => {
        const microsecond = new Microsecond(120);
        const result = microsecond.toNanosecond();
        expect(result.time).toBe(120_000);
    });

    it("should convert microseconds to nanoseconds with decimal", () => {
        const microsecond = new Microsecond(90);
        const result = microsecond.toNanosecond();
        expect(result.time).toBe(90_000);
    });

    it("should convert microseconds to nanoseconds with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to nanoseconds with negative value", () => {
        const microsecond = new Microsecond(-60);
        const result = microsecond.toNanosecond();
        expect(result.time).toBe(-60_000);
    });
});

describe("Microsecond toMillisecond", () => {
    it("should return a Millisecond instance", () => {
        const microsecond = new Microsecond(1_000_000);
        const result = microsecond.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert microseconds to milliseconds correctly", () => {
        const microsecond = new Microsecond(120_000_000);
        const result = microsecond.toMillisecond();
        expect(result.time).toBe(120_000);
    });

    it("should convert microseconds to milliseconds with decimal", () => {
        const microsecond = new Microsecond(90_000_000);
        const result = microsecond.toMillisecond();
        expect(result.time).toBe(90_000);
    });

    it("should convert microseconds to milliseconds with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to milliseconds with negative value", () => {
        const microsecond = new Microsecond(-60_000_000);
        const result = microsecond.toMillisecond();
        expect(result.time).toBe(-60_000);
    });
});

describe("Microsecond toSeconds", () => {
    it("should return a Second instance", () => {
        const microsecond = new Microsecond(1_000_000);
        const result = microsecond.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert microseconds to seconds correctly", () => {
        const microsecond = new Microsecond(1_200_000);
        const result = microsecond.toSecond();
        expect(result.time).toBe(1.2);
    });

    it("should convert microseconds to seconds with decimal", () => {
        const microsecond = new Microsecond(90_000_000);
        const result = microsecond.toSecond();
        expect(result.time).toBe(90);
    });

    it("should convert microseconds to seconds with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to seconds with negative value", () => {
        const microsecond = new Microsecond(-60_000_000);
        const result = microsecond.toSecond();
        expect(result.time).toBe(-60);
    });
});

describe("Microsecond toMinutes", () => {
    it("should return a Minute instance", () => {
        const microsecond = new Microsecond(60_000_000);
        const result = microsecond.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert microseconds to minutes correctly", () => {
        const microsecond = new Microsecond(120_000_000);
        const result = microsecond.toMinute();
        expect(result.time).toBe(2);
    });

    it("should convert microseconds to minutes with decimal", () => {
        const microsecond = new Microsecond(90_000_000);
        const result = microsecond.toMinute();
        expect(result.time).toBe(1.5);
    });

    it("should convert microseconds to minutes with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to minutes with negative value", () => {
        const microsecond = new Microsecond(-60_000_000);
        const result = microsecond.toMinute();
        expect(result.time).toBe(-1);
    });
});

describe("Microsecond toHours", () => {
    it("should return a Hour instance", () => {
        const microsecond = new Microsecond(3600_000_000);
        const result = microsecond.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert microseconds to hours correctly", () => {
        const microsecond = new Microsecond(7200_000_000);
        const result = microsecond.toHour();
        expect(result.time).toBe(2);
    });

    it("should convert microseconds to hours with decimal", () => {
        const microsecond = new Microsecond(5400_000_000);
        const result = microsecond.toHour();
        expect(result.time).toBe(1.5);
    });

    it("should convert microseconds to hours with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to hours with negative value", () => {
        const microsecond = new Microsecond(-3600_000_000);
        const result = microsecond.toHour();
        expect(result.time).toBe(-1);
    });
});

describe("Microsecond toDay", () => {
    it("should return a Day instance", () => {
        const microsecond = new Microsecond(86_400_000_000);
        const result = microsecond.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert microseconds to days correctly", () => {
        const microsecond = new Microsecond(172_800_000_000);
        const result = microsecond.toDay();
        expect(result.time).toBe(2);
    });

    it("should convert microseconds to days with decimal", () => {
        const microsecond = new Microsecond(129_600_000_000);
        const result = microsecond.toDay();
        expect(result.time).toBe(1.5);
    });

    it("should convert microseconds to days with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to days with negative value", () => {
        const microsecond = new Microsecond(-86_400_000_000);
        const result = microsecond.toDay();
        expect(result.time).toBe(-1);
    });
});

describe("Microsecond toWeek", () => {
    it("should return a Week instance", () => {
        const microsecond = new Microsecond(604_800_000);
        const result = microsecond.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert microseconds to weeks correctly", () => {
        const microsecond = new Microsecond(604_800_000_000);
        const result = microsecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert microseconds to weeks with decimal", () => {
        const microsecond = new Microsecond(604_800_000_000);
        const result = microsecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert microseconds to weeks with zero", () => {
        const microsecond = new Microsecond(0);
        const result = microsecond.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert microseconds to weeks with negative value", () => {
        const microsecond = new Microsecond(-604_800_000_000);
        const result = microsecond.toWeek();
        expect(result.time).toBe(-1);
    });
});

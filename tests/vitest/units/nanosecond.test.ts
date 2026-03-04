import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// NanoSecond

describe("NanoSecond", () => {
    it("should create a NanoSecond instance", () => {
        const nanosecond = new Nanosecond(1);
        expect(nanosecond).toBeInstanceOf(Nanosecond);
        expect(nanosecond.time).toBe(1);
        expect(nanosecond.getUnit()).toBe("ns");
    });
});

describe("NanoSecond toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const nanosecond = new Nanosecond(1);
        const result = nanosecond.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should return the same time in seconds", () => {
        const nanosecond = new Nanosecond(1);
        const result = nanosecond.toNanosecond();
        expect(result.time).toBe(1);
    });
});

describe("NanoSecond toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const nanosecond = new Nanosecond(1_000_000);
        const result = nanosecond.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert nanoseconds to microseconds correctly", () => {
        const nanosecond = new Nanosecond(120_000);
        const result = nanosecond.toMicrosecond();
        expect(result.time).toBe(120);
    });

    it("should convert nanoseconds to microseconds with decimal", () => {
        const nanosecond = new Nanosecond(90_000);
        const result = nanosecond.toMicrosecond();
        expect(result.time).toBe(90);
    });

    it("should convert nanoseconds to microseconds with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to microseconds with negative value", () => {
        const nanosecond = new Nanosecond(-60_000);
        const result = nanosecond.toMicrosecond();
        expect(result.time).toBe(-60);
    });
});

describe("NanoSecond toMillisecond", () => {
    it("should return a Millisecond instance", () => {
        const nanosecond = new Nanosecond(1_000);
        const result = nanosecond.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert nanoseconds to milliseconds correctly", () => {
        const nanosecond = new Nanosecond(120_000_000);
        const result = nanosecond.toMillisecond();
        expect(result.time).toBe(120);
    });

    it("should convert nanoseconds to milliseconds with decimal", () => {
        const nanosecond = new Nanosecond(90_000_000);
        const result = nanosecond.toMillisecond();
        expect(result.time).toBe(90);
    });

    it("should convert nanoseconds to milliseconds with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to milliseconds with negative value", () => {
        const nanosecond = new Nanosecond(-60_000_000);
        const result = nanosecond.toMillisecond();
        expect(result.time).toBe(-60);
    });
});

describe("NanoSecond toSeconds", () => {
    it("should return a Second instance", () => {
        const nanosecond = new Nanosecond(1_000_000_000);
        const result = nanosecond.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert nanoseconds to seconds correctly", () => {
        const nanosecond = new Nanosecond(1_200_000_000);
        const result = nanosecond.toSecond();
        expect(result.time).toBe(1.2);
    });

    it("should convert nanoseconds to seconds with decimal", () => {
        const nanosecond = new Nanosecond(90_000_000_000);
        const result = nanosecond.toSecond();
        expect(result.time).toBe(90);
    });

    it("should convert nanoseconds to seconds with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to seconds with negative value", () => {
        const nanosecond = new Nanosecond(-60_000_000_000);
        const result = nanosecond.toSecond();
        expect(result.time).toBe(-60);
    });
});

describe("NanoSecond toMinutes", () => {
    it("should return a Minute instance", () => {
        const nanosecond = new Nanosecond(60_000_000_000);
        const result = nanosecond.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert nanoseconds to minutes correctly", () => {
        const nanosecond = new Nanosecond(120_000_000_000);
        const result = nanosecond.toMinute();
        expect(result.time).toBe(2);
    });

    it("should convert nanoseconds to minutes with decimal", () => {
        const nanosecond = new Nanosecond(90_000_000_000);
        const result = nanosecond.toMinute();
        expect(result.time).toBe(1.5);
    });

    it("should convert nanoseconds to minutes with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to minutes with negative value", () => {
        const nanosecond = new Nanosecond(-60_000_000_000);
        const result = nanosecond.toMinute();
        expect(result.time).toBe(-1);
    });
});

describe("NanoSecond toHours", () => {
    it("should return a Hour instance", () => {
        const nanosecond = new Nanosecond(3600_000_000_000);
        const result = nanosecond.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert nanoseconds to hours correctly", () => {
        const nanosecond = new Nanosecond(7200_000_000_000);
        const result = nanosecond.toHour();
        expect(result.time).toBe(2);
    });

    it("should convert nanoseconds to hours with decimal", () => {
        const nanosecond = new Nanosecond(5400_000_000_000);
        const result = nanosecond.toHour();
        expect(result.time).toBe(1.5);
    });

    it("should convert nanoseconds to hours with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to hours with negative value", () => {
        const nanosecond = new Nanosecond(-3600_000_000_000);
        const result = nanosecond.toHour();
        expect(result.time).toBe(-1);
    });
});

describe("Nanosecond toDay", () => {
    it("should return a Day instance", () => {
        const nanosecond = new Nanosecond(86_400_000_000);
        const result = nanosecond.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert nanoseconds to days correctly", () => {
        const nanosecond = new Nanosecond(172_800_000_000_000);
        const result = nanosecond.toDay();
        expect(result.time).toBe(2);
    });

    it("should convert nanoseconds to days with decimal", () => {
        const nanosecond = new Nanosecond(129_600_000_000_000);
        const result = nanosecond.toDay();
        expect(result.time).toBe(1.5);
    });

    it("should convert nanoseconds to days with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to days with negative value", () => {
        const nanosecond = new Nanosecond(-86_400_000_000_000);
        const result = nanosecond.toDay();
        expect(result.time).toBe(-1);
    });
});

describe("Nanosecond toWeek", () => {
    it("should return a Week instance", () => {
        const nanosecond = new Nanosecond(604_800_000_000);
        const result = nanosecond.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert nanoseconds to weeks correctly", () => {
        const nanosecond = new Nanosecond(604_800_000_000_000);
        const result = nanosecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert nanoseconds to weeks with decimal", () => {
        const nanosecond = new Nanosecond(604_800_000_000_000);
        const result = nanosecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert nanoseconds to weeks with zero", () => {
        const nanosecond = new Nanosecond(0);
        const result = nanosecond.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert nanoseconds to weeks with negative value", () => {
        const nanosecond = new Nanosecond(-604_800_000_000_000);
        const result = nanosecond.toWeek();
        expect(result.time).toBe(-1);
    });
});

import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Millisecond

describe("Millisecond", () => {
    it("should create a Millisecond instance", () => {
        const millisecond = new Millisecond(1);
        expect(millisecond).toBeInstanceOf(Millisecond);
        expect(millisecond.time).toBe(1);
        expect(millisecond.getUnit()).toBe("ms");
    });
});

describe("Millisecond toMillisecond", () => {
    it("should return a Millisecond instance", () => {
        const millisecond = new Millisecond(1);
        const result = millisecond.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should return the same time in seconds", () => {
        const millisecond = new Millisecond(1_000);
        const result = millisecond.toMillisecond();
        expect(result.time).toBe(1_000);
    });
});

describe("Millisecond toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const millisecond = new Millisecond(1_000);
        const result = millisecond.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert milliseconds to nanoseconds correctly", () => {
        const millisecond = new Millisecond(120);
        const result = millisecond.toNanosecond();
        expect(result.time).toBe(120_000_000);
    });

    it("should convert milliseconds to nanoseconds with decimal", () => {
        const millisecond = new Millisecond(90);
        const result = millisecond.toNanosecond();
        expect(result.time).toBe(90_000_000);
    });

    it("should convert milliseconds to nanoseconds with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to nanoseconds with negative value", () => {
        const millisecond = new Millisecond(-60);
        const result = millisecond.toNanosecond();
        expect(result.time).toBe(-60_000_000);
    });
});

describe("Millisecond toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const millisecond = new Millisecond(1_000);
        const result = millisecond.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert milliseconds to microseconds correctly", () => {
        const millisecond = new Millisecond(120);
        const result = millisecond.toMicrosecond();
        expect(result.time).toBe(120_000);
    });

    it("should convert milliseconds to microseconds with decimal", () => {
        const millisecond = new Millisecond(90);
        const result = millisecond.toMicrosecond();
        expect(result.time).toBe(90_000);
    });

    it("should convert milliseconds to microseconds with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to microseconds with negative value", () => {
        const millisecond = new Millisecond(-60);
        const result = millisecond.toMicrosecond();
        expect(result.time).toBe(-60_000);
    });
});

describe("Millisecond toSeconds", () => {
    it("should return a Second instance", () => {
        const millisecond = new Millisecond(1_000);
        const result = millisecond.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert milliseconds to seconds correctly", () => {
        const millisecond = new Millisecond(120_000);
        const result = millisecond.toSecond();
        expect(result.time).toBe(120);
    });

    it("should convert milliseconds to seconds with decimal", () => {
        const millisecond = new Millisecond(90_000);
        const result = millisecond.toSecond();
        expect(result.time).toBe(90);
    });

    it("should convert milliseconds to seconds with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to seconds with negative value", () => {
        const millisecond = new Millisecond(-60_000);
        const result = millisecond.toSecond();
        expect(result.time).toBe(-60);
    });
});

describe("Millisecond toMinutes", () => {
    it("should return a Minute instance", () => {
        const millisecond = new Millisecond(60_000);
        const result = millisecond.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert milliseconds to minutes correctly", () => {
        const millisecond = new Millisecond(120_000);
        const result = millisecond.toMinute();
        expect(result.time).toBe(2);
    });

    it("should convert milliseconds to minutes with decimal", () => {
        const millisecond = new Millisecond(90_000);
        const result = millisecond.toMinute();
        expect(result.time).toBe(1.5);
    });

    it("should convert milliseconds to minutes with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to minutes with negative value", () => {
        const millisecond = new Millisecond(-60_000);
        const result = millisecond.toMinute();
        expect(result.time).toBe(-1);
    });
});

describe("Millisecond toHours", () => {
    it("should return a Hour instance", () => {
        const millisecond = new Millisecond(3600_000);
        const result = millisecond.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert milliseconds to hours correctly", () => {
        const millisecond = new Millisecond(7200_000);
        const result = millisecond.toHour();
        expect(result.time).toBe(2);
    });

    it("should convert milliseconds to hours with decimal", () => {
        const millisecond = new Millisecond(5400_000);
        const result = millisecond.toHour();
        expect(result.time).toBe(1.5);
    });

    it("should convert milliseconds to hours with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to hours with negative value", () => {
        const millisecond = new Millisecond(-3600_000);
        const result = millisecond.toHour();
        expect(result.time).toBe(-1);
    });
});

describe("Millisecond toDay", () => {
    it("should return a Day instance", () => {
        const millisecond = new Millisecond(86_400_000);
        const result = millisecond.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert milliseconds to days correctly", () => {
        const millisecond = new Millisecond(172_800_000);
        const result = millisecond.toDay();
        expect(result.time).toBe(2);
    });

    it("should convert milliseconds to days with decimal", () => {
        const millisecond = new Millisecond(129_600_000);
        const result = millisecond.toDay();
        expect(result.time).toBe(1.5);
    });

    it("should convert milliseconds to days with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to days with negative value", () => {
        const millisecond = new Millisecond(-86_400_000);
        const result = millisecond.toDay();
        expect(result.time).toBe(-1);
    });
});

describe("Millisecond toWeek", () => {
    it("should return a Week instance", () => {
        const millisecond = new Millisecond(604_800_000);
        const result = millisecond.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert milliseconds to weeks correctly", () => {
        const millisecond = new Millisecond(604_800_000);
        const result = millisecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert milliseconds to weeks with decimal", () => {
        const millisecond = new Millisecond(604_800_000);
        const result = millisecond.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert milliseconds to weeks with zero", () => {
        const millisecond = new Millisecond(0);
        const result = millisecond.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert milliseconds to weeks with negative value", () => {
        const millisecond = new Millisecond(-604_800_000);
        const result = millisecond.toWeek();
        expect(result.time).toBe(-1);
    });
});

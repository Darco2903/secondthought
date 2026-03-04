import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Second

describe("Second", () => {
    it("should create a Second instance", () => {
        const second = new Second(1);
        expect(second).toBeInstanceOf(Second);
        expect(second.time).toBe(1);
        expect(second.getUnit()).toBe("s");
    });
});

describe("Second toSeconds", () => {
    it("should return a Second instance", () => {
        const second = new Second(1);
        const result = second.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should return the same time in seconds", () => {
        const second = new Second(1);
        const result = second.toSecond();
        expect(result.time).toBe(1);
    });
});

describe("Second toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const second = new Second(1);
        const result = second.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert seconds to nanoseconds correctly", () => {
        const second = new Second(120);
        const result = second.toNanosecond();
        expect(result.time).toBe(120_000_000_000);
    });

    it("should convert seconds to nanoseconds with decimal", () => {
        const second = new Second(90);
        const result = second.toNanosecond();
        expect(result.time).toBe(90_000_000_000);
    });

    it("should convert seconds to nanoseconds with zero", () => {
        const second = new Second(0);
        const result = second.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to nanoseconds with negative value", () => {
        const second = new Second(-60);
        const result = second.toNanosecond();
        expect(result.time).toBe(-60_000_000_000);
    });
});

describe("Second toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const second = new Second(1);
        const result = second.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert seconds to microseconds correctly", () => {
        const second = new Second(120);
        const result = second.toMicrosecond();
        expect(result.time).toBe(120_000_000);
    });

    it("should convert seconds to microseconds with decimal", () => {
        const second = new Second(90);
        const result = second.toMicrosecond();
        expect(result.time).toBe(90_000_000);
    });

    it("should convert seconds to microseconds with zero", () => {
        const second = new Second(0);
        const result = second.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to microseconds with negative value", () => {
        const second = new Second(-60);
        const result = second.toMicrosecond();
        expect(result.time).toBe(-60_000_000);
    });
});

describe("Second toMilliseconds", () => {
    it("should return a Millisecond instance", () => {
        const second = new Second(1);
        const result = second.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert seconds to milliseconds correctly", () => {
        const second = new Second(120);
        const result = second.toMillisecond();
        expect(result.time).toBe(120_000);
    });

    it("should convert seconds to milliseconds with decimal", () => {
        const second = new Second(90);
        const result = second.toMillisecond();
        expect(result.time).toBe(90_000);
    });

    it("should convert seconds to milliseconds with zero", () => {
        const second = new Second(0);
        const result = second.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to milliseconds with negative value", () => {
        const second = new Second(-60);
        const result = second.toMillisecond();
        expect(result.time).toBe(-60_000);
    });
});

describe("Second toMinutes", () => {
    it("should return a Minute instance", () => {
        const second = new Second(60);
        const result = second.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert seconds to minutes correctly", () => {
        const second = new Second(120);
        const result = second.toMinute();
        expect(result.time).toBe(2);
    });

    it("should convert seconds to minutes with decimal", () => {
        const second = new Second(90);
        const result = second.toMinute();
        expect(result.time).toBe(1.5);
    });

    it("should convert seconds to minutes with zero", () => {
        const second = new Second(0);
        const result = second.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to minutes with negative value", () => {
        const second = new Second(-60);
        const result = second.toMinute();
        expect(result.time).toBe(-1);
    });
});

describe("Second toHours", () => {
    it("should return a Hour instance", () => {
        const second = new Second(3600);
        const result = second.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should convert seconds to hours correctly", () => {
        const second = new Second(7200);
        const result = second.toHour();
        expect(result.time).toBe(2);
    });

    it("should convert seconds to hours with decimal", () => {
        const second = new Second(5400);
        const result = second.toHour();
        expect(result.time).toBe(1.5);
    });

    it("should convert seconds to hours with zero", () => {
        const second = new Second(0);
        const result = second.toHour();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to hours with negative value", () => {
        const second = new Second(-3600);
        const result = second.toHour();
        expect(result.time).toBe(-1);
    });
});

describe("Second toDay", () => {
    it("should return a Day instance", () => {
        const second = new Second(86_400);
        const result = second.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert seconds to days correctly", () => {
        const second = new Second(172_800);
        const result = second.toDay();
        expect(result.time).toBe(2);
    });

    it("should convert seconds to days with decimal", () => {
        const second = new Second(129_600);
        const result = second.toDay();
        expect(result.time).toBe(1.5);
    });

    it("should convert seconds to days with zero", () => {
        const second = new Second(0);
        const result = second.toDay();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to days with negative value", () => {
        const second = new Second(-86_400);
        const result = second.toDay();
        expect(result.time).toBe(-1);
    });
});

describe("Second toWeek", () => {
    it("should return a Week instance", () => {
        const second = new Second(604_800);
        const result = second.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert seconds to weeks correctly", () => {
        const second = new Second(604_800);
        const result = second.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert seconds to weeks with decimal", () => {
        const second = new Second(604_800);
        const result = second.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert seconds to weeks with zero", () => {
        const second = new Second(0);
        const result = second.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert seconds to weeks with negative value", () => {
        const second = new Second(-604_800);
        const result = second.toWeek();
        expect(result.time).toBe(-1);
    });
});

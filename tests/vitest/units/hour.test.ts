import { describe, it, expect } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Week } from "../../../src";

//////////////////////////
// Hour

describe("Hour", () => {
    it("should create a Hour instance", () => {
        const hour = new Hour(1);
        expect(hour).toBeInstanceOf(Hour);
        expect(hour.time).toBe(1);
        expect(hour.getUnit()).toBe("h");
    });
});

describe("Hour toHour", () => {
    it("should return a Hour instance", () => {
        const hour = new Hour(1);
        const result = hour.toHour();
        expect(result).toBeInstanceOf(Hour);
    });

    it("should return the same time in hours", () => {
        const hour = new Hour(1);
        const result = hour.toHour();
        expect(result.time).toBe(1);
    });
});

describe("Hour toNanosecond", () => {
    it("should return a NanoSecond instance", () => {
        const hour = new Hour(1);
        const result = hour.toNanosecond();
        expect(result).toBeInstanceOf(Nanosecond);
    });

    it("should convert hours to nanoseconds correctly", () => {
        const hour = new Hour(1);
        const result = hour.toNanosecond();
        expect(result.time).toBe(3_600_000_000_000);
    });

    it("should convert hours to nanoseconds with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toNanosecond();
        expect(result.time).toBe(5_400_000_000_000);
    });

    it("should convert hours to nanoseconds with zero", () => {
        const hour = new Hour(0);
        const result = hour.toNanosecond();
        expect(result.time).toBe(0);
    });

    it("should convert hours to nanoseconds with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toNanosecond();
        expect(result.time).toBe(-3_600_000_000_000);
    });
});

describe("Hour toMicrosecond", () => {
    it("should return a Microsecond instance", () => {
        const hour = new Hour(1);
        const result = hour.toMicrosecond();
        expect(result).toBeInstanceOf(Microsecond);
    });

    it("should convert hours to microseconds correctly", () => {
        const hour = new Hour(1);
        const result = hour.toMicrosecond();
        expect(result.time).toBe(3_600_000_000);
    });

    it("should convert hours to microseconds with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toMicrosecond();
        expect(result.time).toBe(5_400_000_000);
    });

    it("should convert hours to microseconds with zero", () => {
        const hour = new Hour(0);
        const result = hour.toMicrosecond();
        expect(result.time).toBe(0);
    });

    it("should convert hours to microseconds with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toMicrosecond();
        expect(result.time).toBe(-3_600_000_000);
    });
});

describe("Hour toMilliseconds", () => {
    it("should return a Millisecond instance", () => {
        const hour = new Hour(1);
        const result = hour.toMillisecond();
        expect(result).toBeInstanceOf(Millisecond);
    });

    it("should convert hours to milliseconds correctly", () => {
        const hour = new Hour(1);
        const result = hour.toMillisecond();
        expect(result.time).toBe(3_600_000);
    });

    it("should convert hours to milliseconds with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toMillisecond();
        expect(result.time).toBe(5_400_000);
    });

    it("should convert hours to milliseconds with zero", () => {
        const hour = new Hour(0);
        const result = hour.toMillisecond();
        expect(result.time).toBe(0);
    });

    it("should convert hours to milliseconds with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toMillisecond();
        expect(result.time).toBe(-3_600_000);
    });
});

describe("Hour toSeconds", () => {
    it("should return a Second instance", () => {
        const hour = new Hour(1);
        const result = hour.toSecond();
        expect(result).toBeInstanceOf(Second);
    });

    it("should convert hours to seconds correctly", () => {
        const hour = new Hour(1);
        const result = hour.toSecond();
        expect(result.time).toBe(3600);
    });

    it("should convert hours to seconds with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toSecond();
        expect(result.time).toBe(5400);
    });

    it("should convert hours to seconds with zero", () => {
        const hour = new Hour(0);
        const result = hour.toSecond();
        expect(result.time).toBe(0);
    });

    it("should convert hours to seconds with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toSecond();
        expect(result.time).toBe(-3600);
    });
});

describe("Hour toMinute", () => {
    it("should return a Hour instance", () => {
        const hour = new Hour(1);
        const result = hour.toMinute();
        expect(result).toBeInstanceOf(Minute);
    });

    it("should convert hours to minutes correctly", () => {
        const hour = new Hour(1);
        const result = hour.toMinute();
        expect(result.time).toBe(60);
    });

    it("should convert hours to minutes with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toMinute();
        expect(result.time).toBe(90);
    });

    it("should convert hours to minutes with zero", () => {
        const hour = new Hour(0);
        const result = hour.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert hours to minutes with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toMinute();
        expect(result.time).toBe(-60);
    });
});

describe("Hour toDay", () => {
    it("should return a Day instance", () => {
        const hour = new Hour(24);
        const result = hour.toDay();
        expect(result).toBeInstanceOf(Day);
    });

    it("should convert hours to minutes correctly", () => {
        const hour = new Hour(1);
        const result = hour.toMinute();
        expect(result.time).toBe(60);
    });

    it("should convert hours to minutes with decimal", () => {
        const hour = new Hour(1.5);
        const result = hour.toMinute();
        expect(result.time).toBe(90);
    });

    it("should convert hours to minutes with zero", () => {
        const hour = new Hour(0);
        const result = hour.toMinute();
        expect(result.time).toBe(0);
    });

    it("should convert hours to minutes with negative value", () => {
        const hour = new Hour(-1);
        const result = hour.toMinute();
        expect(result.time).toBe(-60);
    });
});

describe("Hour toWeek", () => {
    it("should return a Week instance", () => {
        const hour = new Hour(168);
        const result = hour.toWeek();
        expect(result).toBeInstanceOf(Week);
    });

    it("should convert hours to weeks correctly", () => {
        const hour = new Hour(168);
        const result = hour.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert hours to weeks with decimal", () => {
        const hour = new Hour(168);
        const result = hour.toWeek();
        expect(result.time).toBe(1);
    });

    it("should convert hours to weeks with zero", () => {
        const hour = new Hour(0);
        const result = hour.toWeek();
        expect(result.time).toBe(0);
    });

    it("should convert hours to weeks with negative value", () => {
        const hour = new Hour(-168);
        const result = hour.toWeek();
        expect(result.time).toBe(-1);
    });
});

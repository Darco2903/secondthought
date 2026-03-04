import { describe, it, expect } from "vitest";
import { Hour, Week, Nanosecond } from "../../src";

//////////////////////////
// Big Number Operations

describe("Big Number Operations", () => {
    it("should handle large time values correctly", () => {
        const time1 = new Week(30_000_000); // 30,000,000 weeks
        const time2 = time1.toNanosecond(); // Convert to nanoseconds
        const expectedNanoseconds = 30_000_000 * 7 * 24 * 60 * 60 * 1_000_000_000; // 30,000 weeks in nanoseconds
        expect(time2.time).toBe(expectedNanoseconds);
        expect(time2.toStringWithUnit()).toBe(expectedNanoseconds.toLocaleString("fullwide", { useGrouping: false }) + "ns"); // 30,000 weeks in nanoseconds with unit
        expect(time2.safe).toBe(false); // Should not be safe to use as a number
    });

    it("should handle large time values in operations", () => {
        const time1 = new Week(30_000_000).toNanosecond(); // 30,000,000 weeks
        const time2 = new Hour(1); // 1 hour
        const totalTime = time1.add(time2); // Add 1 hour to 30,000,000 weeks and convert to nanoseconds
        const expectedNanoseconds = (30_000_000 * 7 * 24 * 60 * 60 + 1 * 60 * 60) * 1_000_000_000; // Total time in nanoseconds
        expect(totalTime).toBeInstanceOf(Nanosecond); // Result should be in nanoseconds
        expect(totalTime.time).toBe(expectedNanoseconds);
        expect(totalTime.toStringWithUnit()).toBe(expectedNanoseconds.toLocaleString("fullwide", { useGrouping: false }) + "ns"); // Total time in nanoseconds with unit
        expect(totalTime.safe).toBe(false); // Should not be safe to use as a number
    });
});

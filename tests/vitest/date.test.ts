import { describe, it, expect } from "vitest";
import { Millisecond } from "../../src";

//////////////////////////
// Date tests

describe("Date tests", () => {
    it("should get the current time in milliseconds", () => {
        const now = Millisecond.now();
        const date = new Date();
        expect(now.time).toBeCloseTo(date.getTime(), -2); // Allow for some time difference
    });

    it("should convert to Date and back correctly", () => {
        const now = Millisecond.now();
        const date = now.toDate();
        expect(date.getTime()).toBe(now.time);
        const convertedBack = Millisecond.fromDate(date);
        expect(convertedBack.time).toBe(now.time);
    });
});

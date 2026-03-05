import { describe, it, expect } from "vitest";
import { Hour, Millisecond, Second, type Time } from "../../src";

//////////////////////////
// General

async function wait(time: Time): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time.toMillisecond().time);
    });
}

describe("General", () => {
    it("should return a new instance of the same time unit with the same time value", async () => {
        const timeout = new Millisecond(200);
        const start = Millisecond.now();
        await wait(timeout);
        const diff = Millisecond.now().diff(start);
        expect(diff.toMillisecond().time).toBeGreaterThanOrEqual(timeout.time);
    });
});

import { describe, it, expect } from "vitest";
import { Millisecond, type Time } from "../../src";

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
    it("should wait for the specified time", async () => {
        const timeout = new Millisecond(200);
        const start = Millisecond.now();
        await wait(timeout);
        const diff = Millisecond.now().diff(start);
        expect(diff.toMillisecond().time).toBeGreaterThanOrEqual(timeout.time);
    });
});

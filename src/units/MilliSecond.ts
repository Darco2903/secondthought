import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Second } from "./Second.js";
import { Minute } from "./Minute.js";
import { Hour } from "./Hour.js";
import { Day } from "./Day.js";
import { Week } from "./Week.js";

export class Millisecond extends Time {
    private readonly __brand!: "Millisecond";

    constructor(time: number) {
        super(time);
    }

    static now(): Millisecond {
        return new Millisecond(Date.now());
    }

    static fromDate(date: Date): Millisecond {
        return new Millisecond(date.getTime());
    }

    clone(): Millisecond {
        return new Millisecond(this.time);
    }

    getUnit(): TimeUnit {
        return "ms";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 1_000_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 1_000);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time);
    }

    toSecond(): Second {
        return new Second(this.time / 1_000);
    }

    toMinute(): Minute {
        return new Minute(this.time / 60_000);
    }

    toHour(): Hour {
        return new Hour(this.time / 3_600_000);
    }

    toDay(): Day {
        return new Day(this.time / 86_400_000);
    }

    toWeek(): Week {
        return new Week(this.time / 604_800_000);
    }
}

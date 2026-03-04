import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Minute } from "./Minute.js";
import { Hour } from "./Hour.js";
import { Day } from "./Day.js";
import { Week } from "./Week.js";

export class Second extends Time {
    private readonly __brand!: "Second";

    constructor(time: number) {
        super(time);
    }

    clone(): Second {
        return new Second(this.time);
    }

    getUnit(): TimeUnit {
        return "s";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 1_000_000_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 1_000_000);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time * 1_000);
    }

    toSecond(): Second {
        return new Second(this.time);
    }

    toMinute(): Minute {
        return new Minute(this.time / 60);
    }

    toHour(): Hour {
        return new Hour(this.time / 3_600);
    }

    toDay(): Day {
        return new Day(this.time / 86_400);
    }

    toWeek(): Week {
        return new Week(this.time / 604_800);
    }
}

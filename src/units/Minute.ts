import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Second } from "./Second.js";
import { Hour } from "./Hour.js";
import { Day } from "./Day.js";
import { Week } from "./Week.js";

export class Minute extends Time {
    private readonly __brand!: "Minute";

    constructor(time: number) {
        super(time);
    }

    clone(): Minute {
        return new Minute(this.time);
    }

    getUnit(): TimeUnit {
        return "min";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 60_000_000_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 60_000_000);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time * 60_000);
    }

    toSecond(): Second {
        return new Second(this.time * 60);
    }

    toMinute(): Minute {
        return new Minute(this.time);
    }

    toHour(): Hour {
        return new Hour(this.time / 60);
    }

    toDay(): Day {
        return new Day(this.time / 1_440);
    }

    toWeek(): Week {
        return new Week(this.time / 10_080);
    }
}

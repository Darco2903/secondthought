import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Second } from "./Second.js";
import { Minute } from "./Minute.js";
import { Hour } from "./Hour.js";
import { Day } from "./Day.js";
import { Week } from "./Week.js";

export class Microsecond extends Time {
    private readonly __brand!: "Microsecond";

    constructor(time: number) {
        super(time);
    }

    clone(): Microsecond {
        return new Microsecond(this.time);
    }

    getUnit(): TimeUnit {
        return "µs";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 1_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time / 1_000);
    }

    toSecond(): Second {
        return new Second(this.time / 1_000_000);
    }

    toMinute(): Minute {
        return new Minute(this.time / 60_000_000);
    }

    toHour(): Hour {
        return new Hour(this.time / 3_600_000_000);
    }

    toDay(): Day {
        return new Day(this.time / 86_400_000_000);
    }

    toWeek(): Week {
        return new Week(this.time / 604_800_000_000);
    }
}

import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Second } from "./Second.js";
import { Minute } from "./Minute.js";
import { Hour } from "./Hour.js";
import { Week } from "./Week.js";

export class Day extends Time {
    private readonly __brand!: "Day";

    constructor(time: number) {
        super(time);
    }

    clone(): Day {
        return new Day(this.time);
    }

    getUnit(): TimeUnit {
        return "d";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 86_400_000_000_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 86_400_000_000);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time * 86_400_000);
    }

    toSecond(): Second {
        return new Second(this.time * 86_400);
    }

    toMinute(): Minute {
        return new Minute(this.time * 1_440);
    }

    toHour(): Hour {
        return new Hour(this.time * 24);
    }

    toDay(): Day {
        return new Day(this.time);
    }

    toWeek(): Week {
        return new Week(this.time / 7);
    }
}

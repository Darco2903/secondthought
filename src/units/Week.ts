import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Second } from "./Second.js";
import { Minute } from "./Minute.js";
import { Hour } from "./Hour.js";
import { Day } from "./Day.js";

export class Week extends Time {
    private readonly __brand!: "Week";

    constructor(time: number) {
        super(time);
    }

    clone(): Week {
        return new Week(this.time);
    }

    getUnit(): TimeUnit {
        return "w";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 86_400_000_000_000 * 7);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 86_400_000_000 * 7);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time * 86_400_000 * 7);
    }

    toSecond(): Second {
        return new Second(this.time * 86_400 * 7);
    }

    toMinute(): Minute {
        return new Minute(this.time * 1_440 * 7);
    }

    toHour(): Hour {
        return new Hour(this.time * 24 * 7);
    }

    toDay(): Day {
        return new Day(this.time * 7);
    }

    toWeek(): Week {
        return new Week(this.time);
    }
}

import { Time } from "./Time.js";
import { TimeUnit } from "../types/TimeUnit.js";
import { Nanosecond } from "./NanoSecond.js";
import { Microsecond } from "./MicroSecond.js";
import { Millisecond } from "./MilliSecond.js";
import { Second } from "./Second.js";
import { Minute } from "./Minute.js";
import { Day } from "./Day.js";
import { Week } from "./Week.js";

export class Hour extends Time {
    private readonly __brand!: "Hour";

    constructor(time: number) {
        super(time);
    }

    clone(): Hour {
        return new Hour(this.time);
    }

    getUnit(): TimeUnit {
        return "h";
    }

    toNanosecond(): Nanosecond {
        return new Nanosecond(this.time * 3_600_000_000_000);
    }

    toMicrosecond() {
        return new Microsecond(this.time * 3_600_000_000);
    }

    toMillisecond(): Millisecond {
        return new Millisecond(this.time * 3_600_000);
    }

    toSecond(): Second {
        return new Second(this.time * 3_600);
    }

    toMinute(): Minute {
        return new Minute(this.time * 60);
    }

    toHour(): Hour {
        return new Hour(this.time);
    }

    toDay(): Day {
        return new Day(this.time / 24);
    }

    toWeek(): Week {
        return new Week(this.time / 168);
    }
}

import type { TimeUnit } from "../types/TimeUnit.js";
import type { Nanosecond } from "./NanoSecond.js";
import type { Microsecond } from "./MicroSecond.js";
import type { Millisecond } from "./MilliSecond.js";
import type { Second } from "./Second.js";
import type { Minute } from "./Minute.js";
import type { Hour } from "./Hour.js";
import type { Day } from "./Day.js";
import type { Week } from "./Week.js";

export abstract class Time {
    protected _time: number;

    /**
     * Returns the time value in the unit of this time.
     */
    public get time(): number {
        return this._time;
    }

    /**
     * Returns whether the time value can be safely used without losing precision.
     */
    public get safe(): boolean {
        return this._time <= Number.MAX_SAFE_INTEGER && this._time >= Number.MIN_SAFE_INTEGER;
    }

    /**
     * Returns whether this time is zero.
     */
    get isZero(): boolean {
        return this._time === 0;
    }

    /**
     * Returns whether this time is positive, negative, or zero.
     */
    get isPositive(): boolean {
        return this._time > 0;
    }

    /**
     * Returns whether this time is negative.
     */
    get isNegative(): boolean {
        return this._time < 0;
    }

    /**
     * Creates a new time with the given time value in the unit of this time.
     * @param time The time value in the unit of this time.
     */
    protected constructor(time: number) {
        this._time = time;
    }

    /**
     * Returns a copy of this time in the same unit.
     */
    public abstract clone(): Time;

    /**
     * Returns the unit of this time as a string.
     */
    public abstract getUnit(): TimeUnit;

    /**
     * Returns a new time converted to nanoseconds.
     */
    public abstract toNanosecond(): Nanosecond;

    /**
     * Returns a new time converted to microsecond.
     */
    public abstract toMicrosecond(): Microsecond;

    /**
     * Returns a new time converted to millisecond.
     */
    public abstract toMillisecond(): Millisecond;

    /**
     * Returns a new time converted to second.
     */
    public abstract toSecond(): Second;

    /**
     * Returns a new time converted to minute.
     */
    public abstract toMinute(): Minute;

    /**
     * Returns a new time converted to hour.
     */
    public abstract toHour(): Hour;

    /**
     * Returns a new time converted to day.
     */
    public abstract toDay(): Day;

    /**
     * Returns a new time converted to week.
     */
    public abstract toWeek(): Week;

    /**
     * Returns a new Date object representing the same time as this time, converted to milliseconds.
     */
    public toDate(): Date {
        return new Date(this.toMillisecond().time);
    }

    /**
     * Converts this time to the same unit as the other time and returns it.
     */
    public toLike(other: Nanosecond): Nanosecond;
    public toLike(other: Microsecond): Microsecond;
    public toLike(other: Millisecond): Millisecond;
    public toLike(other: Second): Second;
    public toLike(other: Minute): Minute;
    public toLike(other: Hour): Hour;
    public toLike(other: Day): Day;
    public toLike(other: Week): Week;
    public toLike(other: Time): Time;
    public toLike(other: Time): Time {
        switch (other.getUnit()) {
            case "ns":
                return this.toNanosecond();
            case "µs":
                return this.toMicrosecond();
            case "ms":
                return this.toMillisecond();
            case "s":
                return this.toSecond();
            case "min":
                return this.toMinute();
            case "h":
                return this.toHour();
            case "d":
                return this.toDay();
            case "w":
                return this.toWeek();
        }
    }

    /**
     * Adds the other time to this time, converting it to the same unit if necessary.
     * This method mutates this time and returns it for chaining.
     * @param other The time to add to this time.
     */
    public add(other: Time): this {
        this._time += other.toLike(this).time;
        return this;
    }

    /**
     * Subtracts the other time from this time, converting it to the same unit if necessary.
     * This method mutates this time and returns it for chaining.
     * @param other The time to subtract from this time.
     */
    public sub(other: Time): this {
        this._time -= other.toLike(this).time;
        return this;
    }

    /**
     * Multiplies this time by the given factor.
     * This method mutates this time and returns it for chaining.
     * @param factor The factor to multiply this time by.
     */
    public mul(factor: number): this {
        this._time *= factor;
        return this;
    }

    /**
     * Divides this time by the given factor.
     * This method mutates this time and returns it for chaining.
     * @param factor The factor to divide this time by.
     */
    public div(factor: number): this {
        this._time /= factor;
        return this;
    }

    /**
     * Returns the remainder of this time divided by the given factor.
     * This method mutates this time and returns it for chaining.
     * @param factor The factor to divide this time by.
     */
    public mod(factor: number): this {
        this._time %= factor;
        return this;
    }

    /**
     * Rounds the time value to the nearest integer.
     * This method mutates this time and returns it for chaining.
     */
    public round(): this {
        this._time = Math.round(this._time);
        return this;
    }

    /**
     * Rounds the time value down to the nearest integer.
     * This method mutates this time and returns it for chaining.
     */
    public floor(): this {
        this._time = Math.floor(this._time);
        return this;
    }

    /**
     * Rounds the time value up to the nearest integer.
     * This method mutates this time and returns it for chaining.
     */
    public ceil(): this {
        this._time = Math.ceil(this._time);
        return this;
    }

    /**
     * Truncates the time value to an integer by removing any fractional digits.
     * This method mutates this time and returns it for chaining.
     */
    public trunc(): this {
        this._time = Math.trunc(this._time);
        return this;
    }

    /**
     * Returns the absolute value of this time.
     * This method mutates this time and returns it for chaining.
     */
    public abs(): this {
        if (this._time < 0) {
            this._time = -this._time;
        }
        return this;
    }

    /**
     * Negates this time.
     * This method mutates this time and returns it for chaining.
     */
    public negate(): this {
        this._time = -this._time;
        return this;
    }

    /**
     * Clamps this time between the given minimum and maximum times, converting them to the same unit if necessary.
     * This method mutates this time and returns it for chaining.
     * @param min The minimum time to clamp this time to.
     * @param max The maximum time to clamp this time to.
     */
    public clamp(min: Time, max: Time): this {
        const minTime = min.toLike(this).time;
        const maxTime = max.toLike(this).time;

        if (this._time < minTime) {
            this._time = minTime;
        } else if (this._time > maxTime) {
            this._time = maxTime;
        }
        return this;
    }

    /**
     * Returns the absolute difference between this time and the other time, converting it to the same unit if necessary.
     * This method returns a new time in the same unit as this.
     * @param other The time to compare to this time.
     */
    public diff(other: Nanosecond): Nanosecond;
    public diff(other: Microsecond): Microsecond;
    public diff(other: Millisecond): Millisecond;
    public diff(other: Second): Second;
    public diff(other: Minute): Minute;
    public diff(other: Hour): Hour;
    public diff(other: Day): Day;
    public diff(other: Time): Time;
    public diff(other: Time): Time {
        return this.clone().sub(other.toLike(this)).abs();
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public equals(other: Time): boolean {
        return this.time === other.toLike(this).time;
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public notEquals(other: Time): boolean {
        return this.time !== other.toLike(this).time;
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public lessThan(other: Time): boolean {
        return this.time < other.toLike(this).time;
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public lessThanOrEqual(other: Time): boolean {
        return this.time <= other.toLike(this).time;
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public greaterThan(other: Time): boolean {
        return this.time > other.toLike(this).time;
    }

    /**
     * Compares this time to the other time, converting it to the same unit if necessary.
     * @param other The time to compare to this time.
     */
    public greaterThanOrEqual(other: Time): boolean {
        return this.time >= other.toLike(this).time;
    }

    /**
     * Returns the time value in the unit of this time.
     * @param other The time to compare to this time.
     */
    public toString(): string {
        return this.time.toLocaleString("fullwide", { useGrouping: false });
    }

    /**
     * Returns the time value in the unit of this time, followed by the unit of this time.
     * @param other The time to compare to this time.
     */
    public toStringWithUnit(): string {
        return this.toString() + this.getUnit();
    }

    /**
     * Returns the minimum time among the given times, converting them to the same unit if necessary.
     * @param times The times to compare.
     * @return The minimum time among the given times, or null if no times are given.
     */
    public static min(...times: Time[]): Time | null {
        if (times.length === 0) {
            return null;
        }

        let minTime = times[0];
        for (let i = 1; i < times.length; i++) {
            if (times[i].lessThan(minTime)) {
                minTime = times[i];
            }
        }
        return minTime;
    }

    /**
     * Returns the maximum time among the given times, converting them to the same unit if necessary.
     * @param times The times to compare.
     * @return The maximum time among the given times, or null if no times are given.
     */
    public static max(...times: Time[]): Time | null {
        if (times.length === 0) {
            return null;
        }

        let maxTime = times[0];
        for (let i = 1; i < times.length; i++) {
            if (times[i].greaterThan(maxTime)) {
                maxTime = times[i];
            }
        }
        return maxTime;
    }
}

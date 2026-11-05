import { expectTypeOf } from "vitest";
import { Day, Hour, Microsecond, Millisecond, Minute, Nanosecond, Second, Time, Week } from "../../src/index.js";

// Type-level tests, checked by `pnpm check` (tsc -p tests), not run by vitest.

//////////////////////////
// Units are not interchangeable

declare function waitMs(ms: Millisecond): void;

waitMs(new Millisecond(1000));
waitMs(new Second(1).toMillisecond());
// @ts-expect-error Second is not assignable to Millisecond
waitMs(new Second(1));
// @ts-expect-error Nanosecond is not assignable to Millisecond
waitMs(new Nanosecond(1));

//////////////////////////
// Conversions

expectTypeOf(new Week(1).toNanosecond()).toEqualTypeOf<Nanosecond>();
expectTypeOf(new Week(1).toMicrosecond()).toEqualTypeOf<Microsecond>();
expectTypeOf(new Week(1).toMillisecond()).toEqualTypeOf<Millisecond>();
expectTypeOf(new Week(1).toSecond()).toEqualTypeOf<Second>();
expectTypeOf(new Week(1).toMinute()).toEqualTypeOf<Minute>();
expectTypeOf(new Week(1).toHour()).toEqualTypeOf<Hour>();
expectTypeOf(new Week(1).toDay()).toEqualTypeOf<Day>();
expectTypeOf(new Nanosecond(1).toWeek()).toEqualTypeOf<Week>();
expectTypeOf(new Second(1).toLike(new Minute(1))).toEqualTypeOf<Minute>();

//////////////////////////
// Mutating operations keep the unit

expectTypeOf(new Second(1).add(new Minute(1))).toEqualTypeOf<Second>();
expectTypeOf(new Hour(1).sub(new Second(1)).mul(2).abs()).toEqualTypeOf<Hour>();
expectTypeOf(new Second(1).clone()).toEqualTypeOf<Second>();

//////////////////////////
// diff returns the unit of this time

expectTypeOf(new Second(5).diff(new Millisecond(1))).toEqualTypeOf<Second>();
expectTypeOf(new Week(2).diff(new Week(1))).toEqualTypeOf<Week>();
expectTypeOf((new Second(1) as Time).diff(new Minute(1))).toEqualTypeOf<Time>();
// @ts-expect-error diff returns a Second here, not a Millisecond
waitMs(new Second(5).diff(new Millisecond(1)));

//////////////////////////
// min & max

expectTypeOf(Time.min(new Second(1), new Second(2))).toEqualTypeOf<Second>();
expectTypeOf(Time.max(new Second(1), new Minute(1))).toEqualTypeOf<Second | Minute>();
expectTypeOf(Time.min()).toEqualTypeOf<null>();

declare const msArray: Millisecond[];
expectTypeOf(Time.min(...msArray)).toEqualTypeOf<Millisecond | null>();
expectTypeOf(Time.max(...msArray)).toEqualTypeOf<Millisecond | null>();

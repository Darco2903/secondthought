# SecondThought

## Description

SecondThought is a TypeScript library that provides typed time units to help prevent errors when working with time-related values. It allows you to use time units such as seconds, minutes, hours, etc., with type safety, ensuring that you don't accidentally mix different time units or make mistakes in calculations.

## Features

- Typed time units to prevent unit-related errors (Nanosecond, Microsecond, Millisecond, Second, Minute, Hour, Day, Week)
- Safe conversions between time units
- Methods for common time operations (addition, subtraction, etc.)
- Support for current time and elapsed time calculations

## Installation

```bash
npm install @darco2903/secondthought
```

## Usage

### Common Operations

```ts
import { Second, Minute, Hour } from "@darco2903/secondthought";

const time1 = new Second(30); // 30 seconds
const time2 = new Minute(2); // 2 minutes
const time3 = new Hour(1); // 1 hour

const totalTime = time1.add(time2).add(time3).toMillisecond();
console.log(`Total time in milliseconds: ${totalTime.toStringWithUnit()}`); // Total time in milliseconds: 3750000ms
```

### Current Time and Elapsed Time

```ts
import { Millisecond } from "@darco2903/secondthought";

const now = Millisecond.now();

// time passed since now
const elapsed = now.diff(Millisecond.now());
const elapsedSeconds = elapsed.toSecond(); // Convert to seconds
```

### Functions with Typed Time Units

```ts
import { Millisecond, Second, Time } from "@darco2903/secondthought";

// A function that accepts only Millisecond time units

function waitMs(ms: Millisecond) {
    return new Promise((resolve) => setTimeout(resolve, ms.time));
}

await waitMs(new Millisecond(1000)); // correct
await waitMs(new Second(1)); // Error: Second is not assignable to Millisecond
await waitMs(new Second(1).toMillisecond()); // correct

// To allow all time units to be used, we can define a more general function that accepts any Time implementation:

function wait(time: Time) {
    return new Promise((resolve) => setTimeout(resolve, time.toMillisecond().time));
}

await wait(new Millisecond(1000)); // correct
await wait(new Second(1)); // also correct
```

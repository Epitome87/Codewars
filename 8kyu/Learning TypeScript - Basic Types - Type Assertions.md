# [Learning TypeScript: Basic Types - Type Assertions](https://www.codewars.com/kata/5916b952e76dc9cbcb000066)

## Description

**Overview**

Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:

```ts
let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;
```

And the other is the as-syntax:

```ts
let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

**Task**

You are given the following code:

```ts
export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning result.resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return result.message;
  }
}
```

Your task is to find and fix error in function `getResult`.

HINT: Try to use double assertion - first convert it to any and then convert it to `ErrorServerResult`.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

## My Solution

**TypeScript**

```ts
export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult | ErrorServerResult) {
  return result.httpCode === 200 ? (result as SuccessServerResult).resultObject : (result as ErrorServerResult).message;
}
```

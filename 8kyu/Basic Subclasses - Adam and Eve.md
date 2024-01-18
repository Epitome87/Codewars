# [Basic Subclasses - Adam and Eve](https://www.codewars.com/kata/547274e24481cfc469000416)

## Description

According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

## My Solution

**JavaScript**

```js
class God {
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}
```

**TypeScript**

```ts
export class God {
  static create(): [Man, Woman] {
    return [new Man(), new Woman()];
  }
}

export class Human {}
export class Man extends Human {}
export class Woman extends Human {}
```

**Python**

```py
class Human: ...

class Man(Human): ...

class Woman(Human): ...

def God():
    return [Man(), Woman()]
```

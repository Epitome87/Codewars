# [Racing #1: Simplified Drag Race](https://www.codewars.com/kata/5a40f5b01f7f70ed7600001e)

## Description

This is a simplified version of Racing #2: Accelerated Drag Race.

Anna and Bob are good friends, but also rival drag racers. Bob just got his engine reconditioned and wants to prove that he is the fastest of the two.

In this kata, you will simulate a drag race between Anna and Bob and determine the winner. You will do this by implementing the function `dragRace` (or `drag_race` in Python).

**Input**

You are given the length of the track in meters (`len` in JavaScript, `length` in Python). Also, you are given the two competing cars (`anna` and `bob`).

The cars are Car objects. In JavaScript, they have the following properties.

```
speed        -> the speed of the car in m/s
reactionTime -> the reaction time of its driver in s
```

In Python, these are the properties of Car objects.

```
speed         -> the speed of the car in m/s
reaction_time -> the reaction time of its driver in s
```

The reaction time indicates how long it takes before the driver starts to drive after the start of the race. For example if Anna has a reaction time of 1s, and Bob has a reaction time of 2s, Bob starts driving one second later than Anna.

The cars do not require any time to accelerate to their speed. In other words, the cars go from zero to their speed in literally no time.

**Output**

If there is no winner, return the string `It's a draw`.

If there is a winner, return the string `[name] is the winner`.

## My Solution

**JavaScript**

```js
const dragRace = (len, anna, bob) => {
  const [annaTime, bobTime] = [anna, bob].map((driver) => driver.reactionTime + len / driver.speed);
  return annaTime < bobTime ? 'Anna is the winner' : annaTime > bobTime ? 'Bob is the winner' : "It's a draw";
};
```

```js
const dragRace = (len, anna, bob) => {
  const annaTime = anna.reactionTime + len / anna.speed;
  const bobTime = bob.reactionTime + len / bob.speed;
  return annaTime < bobTime ? 'Anna is the winner' : annaTime > bobTime ? 'Bob is the winner' : "It's a draw";
};
```

**Python**

```py
def drag_race(length, anna, bob):
    anna_time = anna.reaction_time + length / anna.speed
    bob_time = bob.reaction_time + length / bob.speed
    return "It's a draw" if anna_time == bob_time else f"{'Anna' if anna_time < bob_time else 'Bob'} is the winner"
```

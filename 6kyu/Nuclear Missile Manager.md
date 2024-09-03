# [Nuclear Missile Manager](https://www.codewars.com/kata/567ed5db4089538eea000010)

## Description

Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the `launchAll` function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

Can you fix this for us? You know, it's pretty critical code...

**Note**: There are 5 missiles labeled `i` which is a number in {0, 1, 2, 3, 4}. The missile `i` should be launched after `i` seconds.

Original (bugged) code:

```js
function launchAll(launchMissile) {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}
```

## My Solution

**JavaScript**

```js
const launchAll = (launchMissile) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => launchMissile(i), i * 1000);
  }
};
```

## Takeaways

1. Essentially, just avoid the use of `var`! The way it works with its scoping and closures is typically not what we desire or expect!

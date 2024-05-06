# [One Line Task: Square Every Digit](https://www.codewars.com/kata/5acd142a2ec8c48521000104)

## Description

Inspired by Square Every Digit (and by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript), or 47 or fewer in Ruby

(Note: in Ruby, spaces do not count towards your total-- within reason. Spacing shouldn't be more than 30% of your total to avoid possible cheats).

Your return value should be in integer format.

Your input will always be a valid, non-negative integer... no tricks!

Bonus: Can you get it down to 34 characters? (43 in Ruby!)

Note: Just as a head's up, numbers are > 2^31, so bitwise operators aren't viable.

Examples:

```
sd(0)=>    0
sd(64)=>   3616
sd(1111)=> 1111
sd(2222)=> 4444
sd(3333)=> 9999
sd(3212)=> 9414
sd(1234)=> 14916
sd(77455754)=> 4949162525492516
sd(99999999)=> 8181818181818181
```

P.S., if you can get the sample tests to pass while under the character limit, the full tests should pass without a hitch!

## My Solution

**JavaScript**

```js
sd = (x) => +`${x}`.replace(/./g, (m) => m * m);
```

```js
sd = (x) => +[...(x + '')].map((n) => +n * n).join``; // Note: Don't need to convert n to number!
```

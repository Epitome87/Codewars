# [Can I Play Right Now?](https://www.codewars.com/kata/59ca888aaeb284bb8f0000aa)

## Description

As a strict big brother, I do limit my young brother Vasya on time he spends on computer games. I define a prime-time as a time period till which Vasya have a permission to play computer games. I specify start hour and end hour as pair of integers.

I need a function which will take three numbers - a present moment (current hour), a start hour of allowed time period and an end hour of allowed time period. The function should give answer to a question (as a boolean): "Can Vasya play in specified time?"

If I say that prime-time is from 12 till 15 that means that at 12:00 it's OK to play computer but at 15:00 there should be no more games.

I will allow Vasya to play at least one hour a day.

## My Solution

**JavaScript**

```js
const canIPlay = (now, start, end) => {
  if (end < start) {
    if (now < start) now += 24;
    end += 24;
  }
  return now >= start && now < end;
};
```

### User Solution

**JavaScript**

```js
const canIPlay = (now, start, end) => now + 24 * (now < start) < end + 24 * (end < start);
```

```js
function canIPlay(now, start, end) {
  return (now >= start || (end < start && now < end)) && (now < end || end < start);
}
```

```js
function canIPlay(now, start, end) {
  if (start <= end) {
    return start <= now && now < end;
  } else {
    return now >= start || now < end;
  }
}
```

**Python**

```py
def can_i_play(now_hour, start_hour, end_hour):
      return 0 <= (now_hour - start_hour) % 24 < (end_hour - start_hour) % 24
```

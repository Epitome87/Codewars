# [What a "Classy" Song](https://www.codewars.com/kata/6089c7992df556001253ba7d)

## Description

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

**Example**

```js
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day
Also if the same person listened to it more than once a day it should only count them once.
```

**Example**

```js
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2
```

Good luck!

## My Solution

**JavaScript**

```js
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }
  howMany(listeners) {
    const previousLength = this.listeners.length;
    for (let listener of listeners) {
      if (!this.listeners.includes(listener.toLowerCase())) this.listeners.push(listener.toLowerCase());
    }
    return this.listeners.length - previousLength;
  }
}
```

```js
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(listeners) {
    let previousSize = this.listener.size;
    listeners.forEach((l) => this.listener.add(l.toLowerCase()));
    return this.listener.size - previous;
  }
}
```

### User Solution

**JavaScript**

```js
class Song {
  constructor(title, artist) {
    Object.assign(this, { title, artist, set: new Set() });
  }

  howMany(people) {
    return people.reduce((pre, val) => pre - this.set.size + this.set.add(val.toLowerCase()).size, 0);
  }
}
```

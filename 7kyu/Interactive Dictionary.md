# [Interactive Dictionary](https://www.codewars.com/kata/57a93f93bb9944516d0000c1)

## Description

In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

```
>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana
```

## My Solution

**JavaScript**

```js
class Dictionary {
  constructor() {
    this.words = {};
  }

  newEntry(key, value) {
    this.words[key] = value;
  }

  look(key) {
    return this.words[key] || `Can't find entry for ${key}`;
  }
}
```

**Python**

```py
class Dictionary():
    def __init__(self):
        self.words = {}

    def newentry(self, word, definition):
        self.words[word] = definition

    def look(self, key):
        return self.words.get(key, f"Can't find entry for {key}")
```

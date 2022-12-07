/*
In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Can't find entry for Banana
Good luck and happy coding!
*/

// My solution:
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

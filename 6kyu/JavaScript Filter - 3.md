# [JavaScript Filter - 3](https://www.codewars.com/kata/525f0459fb9570f9ff00005d)

## Description

Your friend saw the great work you did with keeping your user-names at bay in

http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.

He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:

```
[ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
```

He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be

```
[ "food@bar.com" ]
```

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## My Solution

**JavaScript**

```js
const searchNames = (logins) => logins.filter((_, idx, arr) => /^\.|\.$/.test(arr[idx - 1]));
```

```js
const searchNames = (logins) =>
  logins.reduce((acc, curr, idx, arr) => (/^\.|\.$/.test(curr) ? [...acc, arr[idx + 1]] : acc), []);
```

### User Solution

**JavaScript**

```js
const searchNames = (logins) => logins.slice(1).filter((_, idx) => /^\.|\.$/g.test(logins[idx]));
```

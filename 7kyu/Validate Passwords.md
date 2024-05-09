# [Validate Passwords](https://www.codewars.com/kata/5838719c6754d618240000ff)

## Description

Oh no!

We made a log in system on Codewars but people have been putting random passwords to log in!
Your goal for this kata:

You must make sure all the passwords are valid, there will be two functions: `signIn()` and `logIn()`. `signIn()` will make a new password. `logIn()` will make sure that the password given is valid.

**Example:**

```js
// Let us say that someone signed in to codewars and their password is "cracker".
// NOTE: The password will ONLY be a string.
signIn('cracker');

// Now when that someone does logIn("cracker") it should return true.
logIn('cracker');

var logIn = function () {
  // code
  return true;
};

// But if that someone does another password it should return false.
logIn('goat');

var logIn = function () {
  // code
  return false;
};
```

## My Solution

**JavaScript**

```js
const passwords = [];
const signIn = (newPassword) => passwords.push(newPassword);
const logIn = (password) => passwords.includes(password);
```

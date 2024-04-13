# [Can You Keep a Secret?](https://www.codewars.com/kata/5351b35ebaeb67f9110012d2)

## Description

There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function `createSecretHolder(secret)` which accepts any value as secret and returns an object with ONLY two methods

- `getSecret()` which returns the secret
- `setSecret()` which sets the secret

```js
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
```

## My Solution

**JavaScript**

```js
const createSecretHolder = (secret) => {
  return {
    getSecret: () => secret,
    setSecret: (sec) => (secret = sec),
  };
};
```

```js
const createSecretHolder = (secret) => {
  return {
    getSecret() {
      return secret;
    },
    setSecret(sec) {
      secret = sec;
    },
  };
};
```

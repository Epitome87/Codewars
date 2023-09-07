# [Remove the Noise from the String](https://www.codewars.com/kata/5681cf0be812b41721000034)

## Description

We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using `%$&/#·@|º\ª` and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: `%$&/#·@|º\ª` within our original message.

Your mission is to write a function which removes this noise from the message.

Notice that noise can only be `%$&/#·@|º\ª` characters, other characters are not as considered noise

For example:

```js
removeNoise('h%e&·%$·llo w&%or&$l·$%d');
// returns hello world
```

## My Solution

**JavaScript**

```js
const removeNoise = (str) => str.replace(/[%$&/#·@|º\\ª]/g, '');
```

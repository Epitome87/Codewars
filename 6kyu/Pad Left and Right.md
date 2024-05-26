# [Pad left and Right](https://www.codewars.com/kata/5669ec539556f9e9f2000074)

## Description

You are exporting data from your environment that will be imported in another system, but you have a problem! Some data on your system doesn't contain the full length of required chars, it trimmed some data.

```
Registry Number   | Activity Code
1337              | 1337
60316817000448    | 6204000
```

You have to write two functions, `padLeft` and `padRight` that will fill the missing characters so the other system can import the data without any errors.

```
Registry Number   | Activity Code
00000000001337    | 1337000
60316817000448    | 6204000
```

If you try to pad to a certain length that would make your data shorter just leave it as is.

It is much easier to import and validate the data in the correct format, so help them to get the data in the other server!

## My Solution

**JavaScript**

```js
String.prototype.padLeft = function (ch, n) {
  const maxPadding = n - this.length;
  return `${ch.repeat(Math.max(maxPadding, 0))}${this}`;
};

String.prototype.padRight = function (ch, n) {
  const maxPadding = n - this.length;
  return `${this}${ch.repeat(Math.max(maxPadding, 0))}`;
};
```

If we wanted to create our own `repeat` function from scratch as well:

```js
const repeat = (ch, n) => Array(Math.max(0, n + 1)).join(ch);

String.prototype.padLeft = function (ch, n) {
  return repeat(ch, n - this.length) + this;
};

String.prototype.padRight = function (ch, n) {
  return this + repeat(ch, n - this.length);
};
```

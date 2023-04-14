# Are You Playing Banjo?

## Description

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

```
name + " plays banjo"
name + " does not play banjo"
```

Names given are always valid strings.

## My Solution

**JavaScript**

```js
const areYouPlayingBanjo = (name) =>
  name.toLowerCase().startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`;
```

**TypeScript**

```ts
export const areYouPlayingBanjo = (name: string): string =>
  `${name} ${/r/i.test(name[0]) ? 'plays' : 'does not play'} banjo`;
```

### User Solution

**JavaScript**

```js
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + ' banjo';
}
```

**TypeScript**

```ts
export function areYouPlayingBanjo(name: string): string {
  return name + (/^r/i.test(name) ? ' plays banjo' : ' does not play banjo');
}
```

## Takeaways

1. Rather than the regular expression I used, acting upon the first character of the name, I could have acted upon the name itself and used the `/^r/i` regular expression. Remember, the `^` in the regular expression means _begins with_!

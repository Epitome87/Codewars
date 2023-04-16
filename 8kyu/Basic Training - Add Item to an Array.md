# [Basic Training: Add Item to an Array](https://www.codewars.com/kata/511f0fe64ae8683297000001)

## Description

Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

**In JavaScript:**

```js
var websites = [];
```

**In TypeScript**:

```ts
export const websites: string[] = [];
```

## My Solution

**JavaScript**

```js
websites.push('codewars');
```

**TypeScript**

```ts
import { websites } from './preloaded';
websites.push('codewars');
export { websites };
```

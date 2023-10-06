# [Only One Gift Per Child](https://www.codewars.com/kata/52af0d380fcae83a560008af)

## Description

Santa is handing out gifts in the kindergarten. Many toddlers are around there and everyone should have the opportunity to have a seat on Santa's lap. But there's Peter, a 5 year old boy, who is a bit naughty. He tries to get two gifts. After he got the first one, he lines up again in the queue of children.

But fortunately Santa is not alone. His elves keep a list with the names of the children, which already were on Santa's lap. We know, that each child name is unique. If a child tries to get a second gift, the elves will tell Santa.

OK, let's help Santa and his elves with a simple function handOutGift() (hand_out_gift in Ruby, HandOutGift in C# ) which takes the name of the next child. If this child already got a gift, it must throw an error in order to remind Santa.

Example:

```js
handOutGift('Peter');
handOutGift('Alison');
handOutGift('John');
handOutGift('Maria');
handOutGift('Peter'); // <-- must throw an error
```

## My Solution

**JavaScript**

```js
const handOutGift = ((name) => {
  const cache = {};

  return (name) => {
    if (cache[name]) throw new Error(`${name} is being naughty!`);
    else cache[name] = true;
  };
})();
```

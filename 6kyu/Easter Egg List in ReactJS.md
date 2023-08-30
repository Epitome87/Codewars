# [Easter Egg List in ReactJS](https://www.codewars.com/kata/5a95947f4a6b342636000173)

## Description

You decide to create a simple list of your favourite Easter eggs in React.

**Challenge**

Learn about nesting and listing React components.

- The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
- Loop through the props.eggs to output a unorder list of Easter eggs.
- Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
- Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.

**About keys in React lists**

While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

## My Solution

**JavaScript**

```js
import React from 'react';

export const EggList = ({ eggs }) => {
  return (
    <ul>
      {eggs.map((egg, idx) => (
        <EasterEgg key={idx} name={egg} />
      ))}
    </ul>
  );
};

export const EasterEgg = ({ name }) => <li>{name}</li>;
```

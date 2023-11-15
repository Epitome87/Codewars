# [Simple Template](https://www.codewars.com/kata/56ae72854d005c7447000023)

## Description

Implement function `createTemplate` which takes string with tags wrapped in {{brackets}} as input and returns closure, which can fill string with data (flat object, where keys are tag names).

```js
let personTmpl = createTemplate('{{name}} likes {{animalType}}');
personTmpl({ name: 'John', animalType: 'dogs' }); // John likes dogs
```

When key doesn't exist in the map, put there empty string.

## My Solution

**JavaScript**

```js
const createTemplate = (template) => (obj) => template.replace(/{{(\w+)}}/g, (_, v) => obj[v] || '');
```

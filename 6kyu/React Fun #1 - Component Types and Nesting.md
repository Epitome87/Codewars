# [React Fun #1: Component Types and Nesting](https://www.codewars.com/kata/595b9b85ff19c2bd35000013)

## Description

1. Create three components. Following the provided rules
2. One component should be named Hello and it should return 'Hello' wrapped inside of h1.
3. The second component should be named World and it should return 'World!' wrapped inside of h2.
4. Create a parent component using class syntax called Greet and nest previous two components inside of it, wrapping them with a div.

## My Solution

**JavaScript**

```js
const React = require('react');

const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>;
class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}
```

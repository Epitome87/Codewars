# [Bug Fix: Is this Component Visible?](https://www.codewars.com/kata/678a4ce740343f67dcea893a)

## Description

### Background

In modern UI development, especially for complex applications, it's common to structure the interface as a tree of nested components. Each component's visibility can affect the display of its child components. This hierarchical visibility system allows for efficient management of UI states, enabling developers to show or hide entire sections of the interface with minimal code. However, implementing this system correctly can be challenging, particularly when dealing with inherited visibility states.

### Problem

Your task is to refactor an existing implementation of a component visibility system. The **current implementation contains a bug** in how components inherit visibility from their ancestors. This bug needs to be addressed through careful **refactoring** of the `Component` class.

### Specification

1.  Each component must have a constructor, specifying:

- the ID (unique identifier)
- Child components (array of child components, which may be empty)

2.  The `Visibility` property should accept values: `true`, `false`, or `null`.
3.  The `IsVisible` property should:
    - Return `true` if `Visibility` is `true`
    - Return `false` if `Visibility` is `false`
    - If `Visibility` is `null`:
      - For the root component, return `true`
      - For non-root components, return the value from the nearest ancestor that has a non-null `Visibility`, or `true` if no such component found

### Task

Refactor the provided `Component` class to fix the bug in visibility inheritance while maintaining the specified behavior. Your solution should correctly implement the visibility inheritance logic as described in the specification.

### Setup and Validation

- The initial solution setup will be provided in an object-oriented language. The specific syntax and features available will depend on the language used.
- Test cases are available that provide you with both simple and complex UI models.

### Constraints

- Input is guaranteed to be valid, so focus on the core visibility logic
- Performance is not a critical concern for this challenge
- Component tree structure limits:

| Aspect               | Minimum | Maximum |
| -------------------- | ------- | ------- |
| Number of components | 1       | 1000    |
| Tree depth           | 1       | 20      |

### Example

Consider the following tree structure:

    Root (Visibility: null)
    |-- Child1 (Visibility: true)
    |   |-- Grandchild1 (Visibility: null)
    |   |-- Grandchild2 (Visibility: false)
    |-- Child2 (Visibility: null)
        |-- Grandchild3 (Visibility: true)

Expected `IsVisible` values:

- Root: true (special case for root when Visibility is null)
- Child1: true
- Grandchild1: true (inherits from Child1)
- Grandchild2: false
- Child2: true (inherits from Root)
- Grandchild3: true

Good luck, and happy refactoring!

## My Solution

**JavaScript**

```js
class Component {
  #id;
  #parent;
  #children;
  #visibility;

  constructor(id, children) {
    this.#id = id;
    this.#children = children;
    this.#visibility = null;
    this.#parent = null;
    this.#children.forEach((child) => (child.#parent = this));
  }

  set visibility(value) {
    this.#visibility = value;
  }

  get isVisible() {
    // Return our own visibility if it is not null
    if (this.#visibility !== null) return this.#visibility;

    // Find the nearest ancestor that has a non-null visibility
    let current = this.#parent;

    while (current) {
      if (current.#visibility !== null) return current.#visibility;
      current = current.#parent;
    }

    // Could not find a parent that had non-null visibility; default to visible
    return true;
  }

  toString() {
    return this.#id;
  }
}
```

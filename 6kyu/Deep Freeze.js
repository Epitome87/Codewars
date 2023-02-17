/*
Create a complement to the Object.freeze function, Object.deepFreeze

This method should apply the Object.freeze function to an object and, recursively, all of its properties that are objects.

The freeze operation should prevent objects from being modified.
*/

// My (researched) solution:
Object.deepFreeze = (object) => {
  const propNames = Reflect.ownKeys(object);

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === 'object') {
      Object.deepFreeze(value);
    }
  }

  return Object.freeze(object);
};

// Top user solution:
Object.deepFreeze = function (object) {
  Object.freeze(object);
  Object.keys(object).forEach(function (key) {
    if (typeof object[key] == 'object') return Object.deepFreeze(object[key]);
  });
};

// Clever user solution:
Object.deepFreeze = function (object) {
  Object.values(Object.freeze(object)).forEach(Object.deepFreeze);
};

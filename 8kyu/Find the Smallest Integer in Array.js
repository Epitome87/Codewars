/*
 */

// My solution:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Decent user solution, using reduce in a unique way:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function (prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}

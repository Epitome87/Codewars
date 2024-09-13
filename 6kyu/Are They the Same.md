# [Are They the "Same"?](https://www.codewars.com/kata/550498447451fbbd7600041c)

Given two arrays `a` and `b` write a function `comp(a, b)` (or`compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same _multiplicities_ (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in `b` are the elements in `a` squared, regardless of the order.

**Examples**

**Valid arrays**

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

**Invalid arrays**

If, for example, we change the first number to something else, `comp` is not returning true anymore:

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

`comp(a,b)` returns false because in `b` 132 is not the square of any number of `a`.

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

**Remarks**

- `a` or `b` might be `[] or {}` (all languages except R, Shell).
- `a` or `b` might be `nil` or `null` or `None` or `nothing` (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If `a` or `b` are `nil` (or `null` or `None`, depending on the language), the problem doesn't make sense so return false.

## My Solution

**JavaScript**

```js
const comp = (array1, array2) =>
  !array1 || !array2 ? false : String(array1.map((n) => n * n).sort()) === String(array2.sort());
```

```js
const comp = (array1, array2) => {
  if (!array1 || !array2) return false;

  const map1 = array1.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  const map2 = array2.reduce((acc, cur) => ({ ...acc, [cur ** 0.5]: acc[cur ** 0.5] + 1 || 1 }), {});

  return Object.entries(map1).every(([key, val]) => map2[key] === val);
};
```

### User Solution

**JavaScript**

```js
function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}
```

## Takeaways

1. Although not for practical code, the use of `!!` may be good when wanting a one-liner that utilizes the `&&` operand, so we force an otherwise truthy statement to false.

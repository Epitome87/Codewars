# [Tidy Number (Special Numbers Series #9)](https://www.codewars.com/kata/5a87449ab1710171300000fd)

## Description

**Definition**

A Tidy number is a number whose digits are in non-decreasing order.

**Task**

Given a number, find if it is _Tidy_ or not.

```js
const tidyNumber = (n) => [...`${n}`].sort().join('') == n;
```

```js
const tidyNumber = (n) =>
  !n
    .toString()
    .split('')
    .some((num, idx, arr) => arr[idx] > arr[idx + 1]);
```

```js
const tidyNumber = (n) => {
  const numArr = n.toString().split('');

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] > numArr[i + 1]) return false;
  }

  return true;
};
```

**Python**

```py
def tidyNumber(n):
    s = list(str(n))
    return s == sorted(s)
```

```py
def tidyNumber(n):
    num_list = [int(x) for x in str(n)]
    
    for i in range(0, len(num_list) - 1):
        if num_list[i] > num_list[i + 1]:
            return False;
        
    return True 
```
# [Man in the West](https://www.codewars.com/kata/59bd5dc270a3b7350c00008b)

## Description

A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

## My Solution

**JavaScript**

```js
const checkTheBucket = (bucket) => bucket.includes('gold');
```

```js
const checkTheBucket = (bucket) => bucket.some((n) => n === 'gold');
```

**Python**

```py
def check_the_bucket(bucket):
    return 'gold' in bucket
```

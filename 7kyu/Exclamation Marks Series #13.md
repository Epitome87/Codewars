# [Exclamation Marks Series #3: Count the Number of Exclamation Marks and Question marks, Return the Product](https://www.codewars.com/kata/57fb142297e0860073000064)

## Description

Count the number of exclamation marks and question marks, return the product.

**Examples**

```js
Product('') == 0;
product('!') == 0;
Product('!ab? ?') == 2;
Product('!!') == 0;
Product('!??') == 2;
Product('!???') == 3;
Product('!!!??') == 6;
Product('!!!???') == 9;
Product('!???!!') == 9;
Product('!????!!!?') == 20;
```

## My Solution

**JavaScript**

```js
const product = (str) => (str.split('!').length - 1) * (str.split('?').length - 1);
```

**Python**

```py
def product(st):
    return st.count('!') * st.count('?')
```

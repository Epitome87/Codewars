# [Naming Files](https://www.codewars.com/kata/5829994cd04efd4373000468)

## Description

Naming multiple files can be a pain sometimes.

**Task**

Your job here is to create a function that will take three parameters, fmt, nbr and start, and create an array of nbr elements formatted according to frm with the starting index start. fmt will have <index_no> inserted at various locations; this is where the file index number goes in each file.

**Description of edge cases**

1. If nbr is less than or equal to 0, or not whole, return an empty array.
2. If fmt does not contain '<index_no>', just return an array with nbr elements that are all equal to fmt.
3. If start is not an integer, return an empty array.

**What each parameter looks like**

```js
typeof frm #=> 'string'
  : "text_to_stay_constant_from_file_to_file <index_no>"
typeof nbr #=> 'number'
  : number_of_files
typeof start #=> 'number'
  : index_no_of_first_file
typeof (nameFile(frm, nbr, start)) #=> 'array'
```

**Some examples**

```js
nameFile("IMG <index_no>", 4, 1) === ["IMG 1", "IMG 2", "IMG 3", "IMG 4"])
nameFile("image #<index_no>.jpg", 3, 7) === ["image #7.jpg", "image #8.jpg", "image #9.jpg"]
nameFile("#<index_no> #<index_no>", 3, -2) === ["#-2 #-2", "#-1 #-1", "#0 #0"]
```

Also check out my other creations — Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.

If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!

## My Solution

**JavaScript**

```js
const nameFile = (format, num, start) => {
  if (num < 1 || !Number.isInteger(num) || !Number.isInteger(start)) return [];
  return [...Array(num)].map((_, i) => format.replace(/<index_no>/g, start + i));
};
```

### User Solution

**JavaScript**

```js
function nameFile(fmt, nbr, start) {
  return nbr <= 0 || start % 1 !== 0 || nbr % 1 !== 0
    ? []
    : Array(nbr)
        .fill(0)
        .map((_, i) => fmt.replace(/\<index\_no\>/g, start + i));
}
```

## Takeaways

1. Some ways to test if a number is an integer:

```js
Number.isInteger(num);
parseInt(num) === num;
num % 1 === 0;
```

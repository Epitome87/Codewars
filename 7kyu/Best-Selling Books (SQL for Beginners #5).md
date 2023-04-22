# [Best-Selling Books (SQL for Beginners #5)](https://www.codewars.com/kata/591127cbe8b9fb05bd00004b)

## Description

You work at a book store. It's the end of the month, and you need to find out the 5 bestselling books at your store. Use a select statement to list names, authors, and number of copies sold of the 5 books which were sold most.

**books table schema**

- name
- author
- copies_sold

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

## My Solution

**SQL**

```sql
SELECT name, author, copies_sold
FROM books
ORDER BY copies_sold DESC
LIMIT 5;
```

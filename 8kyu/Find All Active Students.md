# [1. Find All Active Students](https://www.codewars.com/kata/5809b9ef88b750ab180001ec)

## Description

Create a simple SELECT query to display student information of all ACTIVE students.

**TABLE STRUCTURE:**

students
Id FirstName LastName IsActive

Note: IsActive (true or false)

## My Solution

**SQL**

```sql
SELECT * FROM students
WHERE IsActive = 1;
```

### User Solution

**SQL**

```sql
SELECT * FROM students WHERE IsActive;
```

## Takeaways

1. Rather than querying `WHEN IsActive = 1`, we can simply say `WHEN IsActive`.

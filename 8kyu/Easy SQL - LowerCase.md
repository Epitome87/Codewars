# [Easy SQL - LowerCase](https://www.codewars.com/kata/594800ba6fb152624300006d)

## Description

Given a demographics table in the following format:

**demographics table schema**

- id
- name
- birthday
- race

you need to return the same table where all letters are lowercase in the race column.

## My Solution

**SQL**

```sql
SELECT id, name, birthday, LOWER(race) AS race FROM demographics;
```

```sql
-- Alternative
SELECT *, lower(race) AS race FROM demographics
```

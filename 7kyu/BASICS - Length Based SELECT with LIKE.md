# [BASICS: Length Based SELECT with LIKE](https://www.codewars.com/kata/5a8d94d3ba1bb569e5000198)

## Description

You will need to create SELECT statement in conjunction with LIKE.

Please list people which have first_name with at least 6 character long

**names table schema**

- id
- first_name
- last_name

**results table schema**

- first_name
- last_name

## My Solution

**SQL**

```sql
SELECT first_name, last_name
FROM names
WHERE first_name LIKE '______%';
```

### User Solution

```sql
-- Circumvents requirement of using the LIKE keyword
select first_name, last_name from names where first_name ~ '.{6,}' -- like it :P
```

## Takeaways

1. Realistically, this scenario would simply be solved by using `WHERE LENGTH(first_name) >= 6`
2. The clever user solution is using Regex

# [SQL Grasshopper: Select Columns](https://www.codewars.com/kata/582365c18917435ab3000020)

## Description

Greetings Grasshopper!
Using only SQL, write a query that returns all rows in the custid, custname, and custstate columns from the customers table.

**Table Description for customers:**

```
Column	    Data Type	Size	Sample
custid	    integer	    8	    4
custname	string	    50	    Anakin Skywalker
custstate	string	    50	    Tatooine
custard	    string	    50	    R2-D2
```

Your solution should contain only SQL.

## My Solution

**SQL**

```sql
SELECT custid, custname, custstate
FROM customers;
```

# [Déjà vu Duplicates](https://www.codewars.com/kata/547f601b4a437a2048000981)

## Description

It might be déjà vu, or it might be a duplicate day. You’re well trained in the arts of cleaning up duplicates. Someone has hacked your database and injected all kinds of duplicate records into your tables. You don’t have access to modify the data in the tables or restore the tables to a previous time because the DBA’s are gone.

You are provided with an array of employees from the server. Your task is to write the findDuplicates function to remove the duplicate records after they are sent down to the client.

Employee Class:

```js
var Employee = function () {
  this.FirstName = '';
  this.LastName = '';
  this.UserName = '';
};
```

The result of calling the findDuplicates function should be an array of the Employee objects that are the duplicates. findDuplicates should also perform an in place modification of the array it's given (`employees`), removing the duplicate values.

Assumptions:

1. You can assume that the `employees` parameter passed in to findDuplicates is always an array.
2. You can also assume that the `employees` array is a flat array.

## My Solution

**JavaScript**

```js
const findDuplicates = (employees) => {
  const employeeSet = new Set();
  const duplicates = [];
  const stringify = ({ FirstName, LastName, UserName }) => [FirstName, LastName, UserName].join('-');

  for (let i = employees.length - 1; i >= 0; i--) {
    const employeeSignature = stringify(employees[i]);
    if (employeeSet.has(employeeSignature)) {
      duplicates.push(employees[i]);
      employees.splice(i, 1);
    } else employeeSet.add(employeeSignature);
  }

  return duplicates;
};
```

**Python**

_Note:_ The following does not pass the "mutate the input list" test for some reason -- even though
in an online Python code environment it works just fine.

```py
def find_duplicates(employees):
    employee_set = set()
    duplicates = []

    for i in range(len(employees) - 1, -1, -1):
        signature = f"{employees[i].first_name}-{employees[i].last_name}-{employees[i].user_name}"
        if signature in employee_set:
            duplicates.append(employees[i])
            delete employees[i]
        else:
            employee_set.add(signature)

    return duplicates
```

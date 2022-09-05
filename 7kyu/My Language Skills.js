/*
Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

// My eh solution:
const myLanguages = (results) =>
  Object.entries(results)
    .filter((language) => language[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((l) => l[0]);

// Top user solution:
function myLanguages(results) {
  return Object.keys(results)
    .filter((r) => results[r] > 59)
    .sort((a, b) => results[b] - results[a]);
}

/* Takeaways:
1) Remember, when you have to map out or remove a part of the input in some way, there's a good chance the solution can be refactored to ignore that input earlier in the algorithm.
*/

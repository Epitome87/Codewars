# [UEFA EURO 2016](https://www.codewars.com/kata/57613fb1033d766171000d60)

## Description

Finish the uefaEuro2016() function so it return string just like in the examples below:

```js
uefa_euro_2016(['Germany', 'Ukraine'],[2, 0]) # "At match Germany - Ukraine, Germany won!"
uefa_euro_2016(['Belgium', 'Italy'],[0, 2]) # "At match Belgium - Italy, Italy won!"
uefa_euro_2016(['Portugal', 'Iceland'],[1, 1]) # "At match Portugal - Iceland, teams played draw."
```

## My Solution

**JavaScript**

```js
const uefaEuro2016 = ([teamA, teamB], [scoreA, scoreB]) =>
  `At match ${teamA} - ${teamB}, ${
    scoreA === scoreB ? 'teams played draw.' : (scoreA > scoreB ? teamA : teamB) + ' won!'
  }`;
```

```js
const uefaEuro2016 = (teams, scores) =>
  `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] > scores[1] ? teams[0] + ' won!' : scores[1] > scores[0] ? teams[1] + ' won!' : 'teams played draw.'
  }`;
```

**Python**

```py
def uefa_euro_2016(teams, scores):
    teamA, teamB = teams
    scoreA, scoreB = scores
    return f"At match {teamA} - {teamB}, {'teams played draw.' if scoreA == scoreB else teamA + ' won!' if scoreA > scoreB else teamB + ' won!'}"
```

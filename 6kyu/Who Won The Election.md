# [Who Won the Election?](https://www.codewars.com/kata/554910d77a3582bbe300009c)

## Description

In democracy we have a lot of elections. For example, we have to vote for a class representative in school, for a new parliament or a new government.

Usually, we vote for a candidate, i.e. a set of eligible candidates is given. This is done by casting a ballot into a ballot-box. After that, it must be counted how many ballots (= votes) a candidate got.

A candidate will win this election if he has the [absolute majority](https://en.wikipedia.org/wiki/Supermajority#Majority_of_the_entire_membership).

**Your Task**

Return the name of the winner. If there is no winner, return `null / nil / None` depending on the language.

**Task Description**

There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. `"A"`, `"B"`, or `"XJDHD"`. There are no spoiled ballots.

The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

A name wins the election if it gets more than `n / 2` votes (`n` = number of all votes, i.e. the size of the given list).

**Examples**

    # 3 votes for "A", 2 votes for "B"  -->  "A" wins the election
    ["A", "A", "A", "B", "B"]  -->  "A"

    # 2 votes for "A", 2 votes for "B"  -->  no winner
    ["A", "A", "B", "B"]  -->  None / nil / null

    # 1 vote for each name --> no winner
    ["A", "B", "C", "D"]  -->  None / nil / null

    # 3 votes for "A", 2 votes for "B", 1 vote for "C"  -->  no winner, as "A" does not have more than n / 2 = 3 votes
    ["A", "A", "A", "B", "B", "C"] -->  None / nil / null

**Note**

Please keep in mind the list of votes can be large (`n <= 1 200 000`). The given list is immutable, i.e. you cannot modify the list (otherwise this could lead to vote rigging).

Good luck and have fun.

## My Solution

**JavaScript**

```js
const getWinner = (listOfBallots) => {
  const votes = {};

  for (const ballot of listOfBallots) {
    votes[ballot] = (votes[ballot] || 0) + 1;
    if (votes[ballot] > listOfBallots.length / 2) return ballot;
  }

  return null;
};
```

**Python**

```py
def getWinner(b):
    for c in set(b):
        if b.count(c) * 2 > len(b):
            return c
```

```py
def get_winner(ballots):
    votes = {}

    for ballot in ballots:
        votes[ballot] = votes.get(ballot, 0) + 1
        if votes[ballot] > len(ballots) / 2:
            return ballot


    return None
```

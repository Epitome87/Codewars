# [Santa's Master Plan](https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304)

## Description

**Happy Holidays fellow Code Warriors!**

Santa has just revealed his master plan! His goal was to automate as many of his tasks as possible by posting them as challenges in the #hackingholidays section of Codewars. Thanks to the solutions from these challenges, Santa has completed his tasks a week before Christmas! You know what that means...Party at Santa's place! All that's left is to invite everyone. Santa sent out a large amount of invitations, and is patiently waiting for responses.

**Who's attending the Party?**

Write a function called `getAttendees` that takes two arguments:

1. Array containing all the names of the people Santa invited
2. An array of responses (objects) with the following structure:
   `{name: 'Easter Bunny', response: 'declined'}`

`getAttendees` should return an array containing the names of all the people who accepted Santa's invitation and the names of those who did not respond to the invitation. Santa is very positive, so he is assuming those who did not respond will show up. Anyone who declined the invitation will not be attending the party. If nobody is attending the party, return an empty array `[]`.

**Example:**

Javascript/CoffeeScript:

```js
getAttendees(
  ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'],
  [
    { name: 'Easter Bunny', response: 'declined' },
    { name: 'Jack Frost', response: 'declined' },
    { name: 'Tooth Fairy', response: 'accepted' },
  ]
); // => returns ['Tooth Fairy', 'Frosty the Snowman']
```

## My Solution

**JavaScript**

```js
const getAttendees = (peopleInvited, responses) => {
  const declined = responses.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.response === 'declined' }), {});
  return peopleInvited.filter((invitee) => !declined[invitee]);
};
```

```js
const getAttendees = (peopleInvited, responses) => {
  return peopleInvited.filter((invitee) => {
    const responder = responses.find((p) => p.name === invitee);
    return !responder || responder.response === 'accepted';
  });
};
```

```js
const getAttendees = (peopleInvited, responses) => {
  return peopleInvited.reduce((acc, cur) => {
    const responder = responses.find((p) => p.name === cur);
    return !responder || responder.response === 'accepted' ? [...acc, cur] : acc;
  }, []);
};
```

```js
const getAttendees = (peopleInvited, responses) => {
  const attendees = [];

  for (let person of peopleInvited) {
    const attendee = responses.find((p) => p.name === person);
    if (!attendee) attendees.push(person);
    else if (attendee.response === 'accepted') attendees.push(person);
  }

  return attendees;
};
```

**Python**

```py

```

### User Solution

**JavaScript**

```js

```

**Python**

```py

```
